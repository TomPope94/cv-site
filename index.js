const width = window.innerWidth;
const height = window.innerHeight;
const scrollHeight = height * 10; // Arbitrary number but can be changed depending on how much scrolling you want

document.getElementById("scroll-box").style.height = `${scrollHeight}px`;

const topBox = document.getElementById("opening-half-left");
const cardsContainer = document.getElementById("cards-container");
const employmentContainer = document.getElementById("employment-container");
const contactContainer = document.getElementById("contact-container");

const changeFirstView = scrollPerc => {
  const percComplete = scrollPerc * 2; // Multiplied by two because the box starts at 50% width
  const widthToAdd = width * percComplete;

  topBox.style.width = `${width / 2 + widthToAdd}px`;
  cardsContainer.className = "inactive";
};

const changeSecondView = () => {
  // Reason this is separate from the changeFirstView is because if the scroll moves too quickly it won't fire
  topBox.style.width = `${width}px`;
  // Create animation for bringing in the cards
  cardsContainer.className = "active";
  employmentContainer.style.height = 0;
};

const changeThirdView = scrollPerc => {
  contactContainer.style.height = 0;
  const percComplete = (scrollPerc - 0.5) * 4;
  const proportionalHeight = height * percComplete;

  employmentContainer.style.height = `${proportionalHeight}px`;
};

const changeFourthView = scrollPerc => {
  employmentContainer.style.height = `${height}px`;
  const percComplete = (scrollPerc - 0.75) * 4;
  const proportionalHeight = height * percComplete;

  contactContainer.style.height = `${proportionalHeight}px`;
};

const getScrollPercent = () => {
  const h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";
  return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight);
};

window.addEventListener(
  "scroll",
  () => {
    // need a way of finding how far through the page we've scrolled...
    const scrollPerc = getScrollPercent();

    if (scrollPerc <= 1 / 4) {
      changeFirstView(scrollPerc);
    }
    if (scrollPerc > 1 / 4 && scrollPerc <= 2 / 4) {
      changeSecondView();
    }
    if (scrollPerc > 2 / 4 && scrollPerc <= 3 / 4) {
      changeThirdView(scrollPerc);
    }
    if (scrollPerc > 3 / 4) {
      changeFourthView(scrollPerc);
    }
  },
  false
);
