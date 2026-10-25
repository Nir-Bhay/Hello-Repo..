#!/usr/bin/env python3
"""
P001 audio: music bed + SFX, pura procedural (numpy), koi sample/license nahi.
Times timeline.json ke mirror hain — retime ho to dono badlo.
Usage:  python3 make-audio.py [out.wav]   (numpy chahiye)
Master: peak -1 dB ke aas-paas normalize; LUFS check ffmpeg loudnorm se karke gain adjust karo.
"""
import sys
import wave

import numpy as np

SR = 44100
DUR = 50.0
N = int(SR * DUR)
rng = np.random.default_rng(7)


def env_adsr(n, a=0.01, d=0.1, peak=1.0):
    t = np.linspace(0, 1, n)
    e = np.minimum(t / max(a, 1e-4), 1.0) * np.exp(-t * (2.5 + d * 8))
    return e * peak


def tone(freq, dur, vol=0.3, kind="sine", sweep_to=None, a=0.005):
    n = int(SR * dur)
    t = np.arange(n) / SR
    f = np.linspace(freq, sweep_to, n) if sweep_to else np.full(n, float(freq))
    ph = np.cumsum(f) / SR * 2 * np.pi
    if kind == "sine":
        w = np.sin(ph)
    elif kind == "tri":
        w = 2 * np.abs(2 * (ph / (2 * np.pi) - np.floor(ph / (2 * np.pi) + 0.5))) - 1
    else:  # soft square
        w = np.tanh(np.sin(ph) * 3)
    return w * env_adsr(n, a=a) * vol


def noise(dur, vol=0.3, sweep=False):
    n = int(SR * dur)
    w = rng.standard_normal(n)
    if sweep:  # fake band-sweep: amplitude + rising smoothed noise
        k = max(1, n // 60)
        w = np.convolve(w, np.ones(k) / k, mode="same") * np.linspace(0.3, 1.6, n)
    return w * env_adsr(n, a=dur * 0.35, d=0.4) * vol


mix = np.zeros(N)


def put(wav, at, vol=1.0, pan=0.0):
    i = int(at * SR)
    j = min(N, i + len(wav))
    if j > i:
        mix[i:j] += wav[: j - i] * vol


# ---------- MUSIC BED: Am - F - C - G, 92 BPM ----------
beat = 60 / 92
chords = [  # (root, [notes]) Hz
    (110.00, [220.00, 261.63, 329.63]),  # Am
    (87.31, [174.61, 220.00, 261.63]),  # F
    (130.81, [196.00, 261.63, 329.63]),  # C
    (98.00, [196.00, 246.94, 293.66]),  # G
]
bar = beat * 4
nbars = int(DUR / bar) + 1
for b in range(nbars):
    root, notes = chords[b % 4]
    at = b * bar
    for f in notes:  # pad
        put(tone(f, bar * 1.05, vol=0.055, kind="tri", a=0.4), at, pan=0)
        put(tone(f * 2, bar * 1.05, vol=0.018, kind="sine", a=0.4), at)
    put(tone(root, bar * 0.9, vol=0.10, kind="sine", a=0.02), at)  # bass
    # soft pluck melody (deterministic pentatonic walk)
    scale = [440.0, 523.25, 587.33, 659.25, 783.99]
    for k in range(4):
        f = scale[(b * 2 + k * [0, 2, 1, 3][k]) % len(scale)]
        put(tone(f, 0.32, vol=0.045, kind="sine", a=0.004), at + k * beat)
    # hat ticks offbeat
    for k in range(4):
        put(noise(0.05, vol=0.015), at + k * beat + beat / 2)

# vinyl-ish floor
mix += rng.standard_normal(N) * 0.004

# ---------- SFX (timeline beats) ----------
put(noise(0.45, vol=0.25, sweep=True), 0.0)  # riser
put(tone(160, 0.5, vol=0.5, sweep_to=42), 0.4)  # impact
put(noise(0.18, vol=0.18), 0.4)
for at in (1.2, 1.55, 1.9):  # mail badges
    put(tone(760, 0.14, vol=0.30, sweep_to=320), at)
for at in (4.5, 10.0, 31.0):  # whoosh transitions
    put(noise(0.4, vol=0.20, sweep=True), at)
put(tone(120, 0.3, vol=0.45, sweep_to=55), 6.0)  # cross thud
for at in (11.0, 13.8, 16.6, 19.4):  # step clicks
    put(tone(1250, 0.06, vol=0.20, kind="square"), at)
put(tone(880, 0.5, vol=0.22), 20.6)  # connected ding
put(tone(1318, 0.7, vol=0.18), 20.68)
tick = 23.0  # typing ticks
while tick < 25.0:
    put(tone(1500 + (int(tick * 100) % 4) * 130, 0.03, vol=0.07, kind="square"), tick)
    tick += 0.09
for at, f in ((26.2, 700), (28.6, 820), (32.2, 660), (36.0, 660), (38.8, 940)):  # card pops
    put(tone(f, 0.15, vol=0.28, sweep_to=f * 0.45), at)
put(noise(0.4, vol=0.16, sweep=True), 22.0)
put(tone(1046, 0.8, vol=0.16), 41.5)  # safety chime
put(tone(1568, 1.0, vol=0.12), 41.62)
put(tone(880, 0.9, vol=0.20), 46.4)  # final resolve
put(tone(1174, 1.2, vol=0.15), 46.52)
put(tone(1760, 1.4, vol=0.10), 46.64)

# ---------- master ----------
peak = np.max(np.abs(mix)) or 1.0
mix = mix / peak * 0.89
# gentle loudness lift (~ -15 LUFS zone), soft clip guard
mix = np.tanh(mix * 1.15)
stereo = np.stack([mix, mix], axis=1)
pcm = (stereo * 32767).astype(np.int16)
out = sys.argv[1] if len(sys.argv) > 1 else "public/audio/p001-track.wav"
with wave.open(out, "wb") as w:
    w.setnchannels(2)
    w.setsampwidth(2)
    w.setframerate(SR)
    w.writeframes(pcm.tobytes())
print("wrote", out, f"{DUR:.0f}s")
