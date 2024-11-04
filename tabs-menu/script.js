const containerTag = document.querySelector(".container");
const tapMenuTag = document.querySelector(".tapMenu");
const ulTag = document.querySelector("ul");
const sliderTag = document.querySelector(".slider");

const homeTag = document.querySelector(".home");
const serviceTag = document.querySelector(".service");
const aboutTag = document.querySelector(".about");
const contactTag = document.querySelector(".contact");
const loginTag = document.querySelector(".login");

// Navigation Bar Array
const tabs = ["home", "service", "about us", "contact us", "login"];
const about = tabs[2];

const handleTabChange = (event) => {
  const clickTabId = event.target.id;
  const clickLiTag = document.getElementById(clickTabId);

  const clickLiTagWidth = clickLiTag.offsetWidth;
  sliderTag.style.width = `${clickLiTagWidth}px`;
  const clickLiTagOffsetLeft = clickLiTag.offsetLeft;
  sliderTag.style.transform = `translateX(${clickLiTagOffsetLeft}px)`;

  //  clickLiTag.addEventListener("click",()=>{
  //   const aboutTitle = document.createElement("h2");
  //   aboutTitle.classList.add("aboutTitle");
  //   aboutTitle.append("Hello, I'm May Myupt Noe Aung");
  //   const aboutMyself = document.createElement("p");
  //   aboutMyself.classList.add("aboutMyself");
  //   aboutMyself.append(
  //     "Hello everyone. My name is May Myupt NOe Aung.You can call me Noe Noe. Now,I'm learning programming language is JavaScript. My gold is to become a Fullstack developer.Est..."
  //   );
  //   aboutTag.append(aboutTitle, aboutMyself);

  //  })
};

for (let i = 0; i < tabs.length; i++) {
  const liTag = document.createElement("li");
  const linkTag = document.createElement("a");
  linkTag.id = "linkTag" + (i + 1).toString();

  liTag.id = i;
  linkTag.append(liTag);
  liTag.append(tabs[i].toUpperCase());

  ulTag.append(liTag);

  liTag.addEventListener("click", handleTabChange);
  if (i === 0) {
    sliderTag.style.width = liTag.offsetWidth + "px";
  }
  // liTag.addEventListener("click", () => {
  //   serviceTag.style.display = "inline-block";
  //   aboutTag.style.display = "inline-block";
  //   contactTag.style.display = "inline-block";
  //   loginTag.style.display = "inline-block";
  // });

  // linkTag.addEventListener("click", () => {
  //   if (linkTag === "linkTag1") {
  //     aboutTag.style.display = "inline-block";
  //   } else if (linkTag === "linkTag2") {
  //     serviceTag.style.display = "inline-block";
  //     // aboutTag.style.display = "none";
  //   }
  // });
}


