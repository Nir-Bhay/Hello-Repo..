# REVIEW CHECKLIST — Draft ko "done" bolne se pehle

> Har beat ka ek frame dekho (preview me scrub / still render / draft ke frames). Ek bhi fail = fix + dobara pass. Report me likho: kya check kiya, kya fix kiya.

## Composition
- [ ] Ek frame me ek hi focal point — do cheezein lad to nahi rahi?
- [ ] Transitions ke beech me bhi kuch takra/clip to nahi ho raha (wahi sabse zyada hota hai)?
- [ ] Safe area: important cheez edge ke 6% ke andar to nahi? 9:16 me top/bottom platform zones khali?
- [ ] Frame 0 thumbnail jaisa hai (black/khali to fail)?

## Type
- [ ] Kuch mask/container/frame se kata to nahi?
- [ ] 360px wide (phone) pe key message padh sakte ho?
- [ ] Padhne ke waqt text hil to nahi raha?

## Timing
- [ ] Har readable state ko hold mila (≥1s phrase, final ≥2s)?
- [ ] Scenes overlap hote hain, beech me khali "loading" frame to nahi?
- [ ] Exits entrances se tez hain? Har element ka exit hai (teleport to nahi)?

## Motion feel
- [ ] Koi linear lagne wala move? (ho to easing/spring lagao)
- [ ] Sab ek saath to nahi aa raha — stagger sahi hai?
- [ ] Camera har scene me halka zinda hai? Texture (grain/grid) chal raha hai?
- [ ] Sirf EK hero moment hai, aur wo jaldi kharch to nahi hua?

## Consistency
- [ ] Sirf palette colors; accent sirf point pe?
- [ ] Travel karne wala object har scene me ek jaisa dikhta hai?

## Causality & states (Studio Method v2)
- [ ] Har handoff recipient tak asal me pahuncha (leading edge se contact), phir hi reaction hua?
- [ ] **Forbidden states absent hain?** Har trigger se pehle wala frame check kiya — jawab/result/payment pehle se to nahi dikh raha?
- [ ] Beech ke poses (quarter/middle) saaf hain — morph me knot, takrav, kata hua text to nahi?
- [ ] Camera ke baad bhi sab bounds frame ke andar hain (projected bounds, sirf design ke numbers nahi)?

## Sound (final pass me)
- [ ] Bade SFX apne beats pe frame-exact baithe hain?
- [ ] Loudness −14 LUFS ±1, true peak ≤ −1 dBFS? (encode ke BAAD measure kiya?)
- [ ] Mute pe poori baat samajh aati hai (captions)?

## Readiness record (notes.md me alag-alag likho — ek "done" nahi)
- **Export:** dimensions/fps/duration/audio measured: <result>
- **Semantic:** causal order + forbidden states frames par verified: <result>
- **Craft:** normal speed + phone size par dekha; bachi kamiyan: <result / pending>
- **Comprehension:** bina samjhaye kisi ko dikhaya?: <result / pending — pending hai to wahi likho>

## Report (user ko)
Kya check kiya · kya mila · kya fix kiya · kaunsa frame/sheet proof hai · bacha hua risk.
