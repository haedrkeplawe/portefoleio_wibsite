let MenuTrigger = document.querySelector("nav .container .menu-trigger");
let UlMobile = document.querySelector("nav .mobile");
MenuTrigger.addEventListener("click", () => {
  if (UlMobile.style.display != "flex") {
    UlMobile.style.display = "flex";
  } else {
    UlMobile.style.display = "none";
  }
});
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let Box = document.querySelector(".FeaturedGames .content .box");
let X = 0;
nextBtn.addEventListener("click", () => {
  Box.style.transform = `translateX(${(X += 13)}rem)`;
});
prevBtn.addEventListener("click", () => {
  Box.style.transform = `translateX(${(X -= 13)}rem)`;
  console.log(X);
});
