const planets = {
  Earth:{
    image:"https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
    description:"The third planet from the Sun. A unique world full of life.",
    glow:"#4f8cff"
  },

  Mars:{
    image:"https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
    description:"A cold desert world known as the Red Planet.",
    glow:"#ff6b35"
  },

  Jupiter:{
    image:"https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg",
    description:"The largest planet in our solar system.",
    glow:"#ffb347"
  },

  Saturn:{
    image:"https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
    description:"Famous for its magnificent rings.",
    glow:"#ffe08a"
  }
};

const buttons = document.querySelectorAll(".planet");

const image = document.querySelector(".planet-image");
const title = document.querySelector(".planet-info h1");
const text = document.querySelector(".planet-info p");
const glow = document.querySelector(".glow");

buttons.forEach(button=>{

  button.addEventListener("click",()=>{

    const planet = planets[button.textContent];

    buttons.forEach(btn=>btn.classList.remove("active"));
    button.classList.add("active");

    image.style.opacity="0";
    image.style.transform="scale(.8)";

    setTimeout(()=>{

      image.src=planet.image;
      title.textContent=button.textContent;
      text.textContent=planet.description;

      glow.style.background=
      `radial-gradient(circle,
      ${planet.glow},
      transparent 70%)`;

      image.style.opacity="1";
      image.style.transform="scale(1)";

    },300);

  });

});

document.addEventListener("mousemove",(e)=>{

  const x=(e.clientX/window.innerWidth-0.5)*20;
  const y=(e.clientY/window.innerHeight-0.5)*20;

  document.querySelector(".planet-container").style.transform=
  `translate(${x}px,${y}px)`;

});
