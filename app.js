const imgs = [
  "/images/pexels-kevin-villaruz-7252278.jpg",
  "/images/pexels-abid-bin-nazar-10593605.jpg",
  "/images/pexels-abid-bin-nazar-10593631.jpg",
]

const btn = document.querySelector("button")
const img = document.querySelector(".main-img")
let count = 0

btn.addEventListener("click", () => {
  if (count === 3) count = 0
  img.src = imgs[count]
  count++
})
