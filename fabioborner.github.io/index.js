const titreSpans = document.querySelectorAll("h1 span");
const btns = document.querySelectorAll(".btn-first");
const logo = document.querySelector(".logo");
const medias = document.querySelectorAll(".bulle");
const l1 = document.querySelector(".l1");
const l2 = document.querySelector(".l2");
const textAnim = document.querySelector("p");
var app = document.getElementById("textAnim");

console.log(textAnim);
window.addEventListener("load", () => {
  const TL = gsap.timeline({ paused: true });

  TL.staggerFrom(
    titreSpans,
    1,
    { top: -50, opacity: 0, ease: "power2.out" },
    0.3
  )
    .staggerFrom(btns, 1, { opacity: 0, ease: "power2.out" }, 0.3, "-=1")
    .from(l1, 1, { width: 0, ease: "power2.out" }, "-=2")
    .from(l2, 1, { width: 0, ease: "power2.out" }, "-=2")
    .from(logo, 0.4, { transform: "scale(0)", ease: "power2.out" }, "-=2")
    .staggerFrom(medias, 1, { right: -200, ease: "power2.out" }, 0.3, "-=1");

  TL.play();
});

// NavBar
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

//animation texte

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 40,
});

typewriter
  .typeString("Je m'appelle Fabio Borner, ")
  .pauseFor(200)
  .typeString(
    '<strong>Apprentis <span style="color: #27ae60;"> dev web</span>!</strong>'
  )
  .pauseFor(300)
  .deleteChars(4)

  .typeString(
    '<strong><span style="color: #ff6910;"> Javascript </span>!</strong>'
  )
  .pauseFor(300)
  .deleteChars(12)

  .typeString('<strong><span style="color: #27ae60;"> CSS </span>!</strong>')

  .pauseFor(300)
  .deleteChars(5)

  .typeString(
    '<strong><span style="color: midnightblue;"> SQL </span>!</strong>'
  )

  .pauseFor(2000)
  .start();
