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
// <!-- feature speakers  -->
const projectArray = [
  {
    name: "Yochai Benkler",
    description: `  Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School.`,
    featuredImage: "./picture/33.png",
    technologies:
      "Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006",
  },
  {
    name: "SohYeong Noh",
    description: `  Director of Art Centre Nabi and a board member of CC Korea`,
    featuredImage: "./picture/speaker_01 1(1).png",
    technologies:
      "As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.",
  },
];

const project = document.querySelector(".card");

for (let i = 0; i < projectArray.length; i += 1) {
  project.innerHTML += `
  <div class="card-container">
  <div class="card-img">
    <img src="${projectArray[i].featuredImage}" alt="" />
  </div>
  <div class="card-parg">
    <h3 class="card-h3">${projectArray[i].name}</h3>
    <p class="card-parg1">
    ${projectArray[i].description}
    </p>
    <span class="card-space"></span>
    <p class="card-parg2">
    ${projectArray[i].technologies}
    </p>
  </div>
</div>
`;
}
// <!-- feature speakers desktop  -->
const projectArray1 = [
  {
    name: "Yochai Benkler",
    description: `  Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School`,
    featuredImage: "./picture/speaker_01 1.png",
    technologies:
      "Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006",
  },
  {
    name: "SohYeong Noh",
    description: `  Director of Art Centre Nabi and a board member of CC Korea`,
    featuredImage: "./picture/2.png",
    technologies:
      "As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.",
  },
  {
    name: "Lila tretikov",
    description: `  Executive Director of the Wikimedia Foundation.`,
    featuredImage: "./picture/3.png",
    technologies:
      "Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.",
  },
  {
    name: "Kilnam Chon",
    description: `  `,
    featuredImage: "./picture/4.png",
    technologies:
      "Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame.",
  },
  {
    name: "Julia Leda",
    description: `  President of Young Pirates of Europe`,
    featuredImage: "./picture/5.png",
    technologies:
      "European ingetration, political democracy , Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July.",
  },
  {
    name: "SohYeong Noh",
    description: `  Director of Art Centre Nabi and a board member Korea`,
    featuredImage: "./picture/6.png",
    technologies:
      "As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.",
  },
];

const project1 = document.querySelector(".card1");

for (let i = 0; i < projectArray1.length; i += 1) {
  project1.innerHTML += `
  <div class="card-container">
  <div class="card-img">
    <img src="${projectArray1[i].featuredImage}" alt="" />
  </div>
  <div class="card-parg">
    <h3 class="card-h3">${projectArray1[i].name}</h3>
    <p class="card-parg1">
    ${projectArray1[i].description}
    </p>
    <hr class="card-space"></hr>
    <p class="card-parg2">
    ${projectArray1[i].technologies}
    </p>
  </div>
</div>
`;
}
