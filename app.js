const imgs = [
  "https://i.pinimg.com/originals/25/c4/ef/25c4efbf918a698f50e05f545050491c.jpg",
  "https://offactandfantasy.files.wordpress.com/2020/05/magic-of-pegasus-18.png?w=1024",
  "https://offactandfantasy.files.wordpress.com/2020/05/magic-of-pegasus-22.png?w=1024",
  "https://offactandfantasy.files.wordpress.com/2020/05/magic-of-pegasus-16.png?w=1024",
]

const btn = document.querySelector("button")
const img = document.querySelector("img")
let count = 0

btn.addEventListener("click", function () {
  if (count === 4) count = 0
  img.src = imgs[count]
  count++
})
