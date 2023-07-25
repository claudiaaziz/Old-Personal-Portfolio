const imgs = [
  "/images/pexels-kevin-villaruz-7252278.jpg",
  "/images/pexels-the-lazy-artist-gallery-1302991.jpg",
  "/images/pexels-abid-bin-nazar-10593605.jpg",
  "/images/pexels-abid-bin-nazar-10593631.jpg",
]

const btn = document.querySelector("button")
const img = document.querySelector(".main-img")
let count = 0

btn.addEventListener("click", () => {
  if (count === 4) count = 0
  img.src = imgs[count]
  count++
})
