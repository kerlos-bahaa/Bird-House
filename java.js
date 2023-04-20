const myopen = document.querySelector("#open");
const nav = document.querySelector(".nav-links-2");
const myaxe = document.querySelector(".axe");
const mytra1 = document.querySelector(".nav-transition-1");
const mytra2 = document.querySelector(".nav-transition-2");
const mytra3 = document.querySelector(".nav-transition-3");
const mytra4 = document.querySelector(".nav-transition-4");
myopen.onclick = () => {
  nav.style.cssText = "transform:translateY(0%);";
};

let loop = [myaxe, mytra1, mytra2, mytra3, mytra4];
for (let i = 0; i < loop.length; i++) {
  loop[i].onclick = function () {
    nav.style.cssText = "transform: translateY(-100%);";
  };
}
