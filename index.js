// The logic for the window width & height range only works when the window is wider
// than it is tall... come up with a better logic!

const width = window.innerWidth;
const height = window.innerHeight;

const topBox = document.getElementById("opening-half-left");
const cardsContainer = document.getElementById("cards-container");
const employmentContainer = document.getElementById("employment-container");
const contactContainer = document.getElementById("contact-container");

const scrollBoxes = document.getElementsByClassName("scroll-box");
for (let i = 0; i < scrollBoxes.length; i++) {
  scrollBoxes[i].style.height = `${width}px`;
}

const topBoxScroll = scrollPos => {
  if (scrollPos > width / 2 && scrollPos <= width) {
    topBox.style.width = `${scrollPos}px`;
  }
  if (scrollPos > width) {
    topBox.style.width = `${width}px`;
    cardsContainer.className = "active";
  }
  if (scrollPos <= width) {
    cardsContainer.className = "inactive";
  }
  if (scrollPos <= width / 2) {
    topBox.style.width = `${width / 2}px`;
  }

  if (scrollPos <= width * 2) {
    employmentContainer.style.height = 0;
  }

  // find what % through the width section you are and then translate that into height
  if (scrollPos > width * 2 && scrollPos <= width * 3) {
    const empHeightPerc = (scrollPos - width * 2) / width;
    console.log(empHeightPerc);
    employmentContainer.style.height = `${empHeightPerc * height}px`;
  }

  if (scrollPos <= width * 3) {
    contactContainer.style.height = 0;
  }
  if (scrollPos > width * 3) {
    employmentContainer.style.height = `${height}px`;
    const conHeightPerc = (scrollPos - width * 3) / width;
    contactContainer.style.height = `${conHeightPerc * height}px`;
  }
};

window.addEventListener(
  "scroll",
  () => {
    topBoxScroll(window.pageYOffset);
  },
  false
);
