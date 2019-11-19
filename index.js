const width = window.innerWidth;
const height = window.innerHeight;
const numberOfViews = 4;
const scrollHeight = height * (numberOfViews * 2); // Arbitrary number but can be changed depending on how much scrolling you want

const scrollBoxes = document.getElementsByClassName("scroll-box");
for (let i = 0; i < scrollBoxes.length; i++) {
  scrollBoxes[i].style.height = `${scrollHeight / scrollBoxes.length}px`;
  scrollBoxes[i].style.width = `${width}px`;
}

const topBox = document.getElementById("opening-half-left");
const cardsContainer = document.getElementById("cards-container");
const employmentContainer = document.getElementById("employment-container");
const contactContainer = document.getElementById("contact-container");
const nextButton = document.querySelector("#page-navigation-container button");

let seeCards = false;

const scrollTo = (element, to, duration) => {
  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = (difference / duration) * 10;

  setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
};

const animateCards = async toOpen => {
  const animateDirection = toOpen ? "normal" : "reverse";
  const animation = await anime({
    targets: "#commercial-apps, #personal-apps, #acheivements",
    scaleY: [0, 1],
    duration: 500,
    direction: animateDirection
  });

  seeCards = !seeCards;
};

const changeFirstView = async scrollPerc => {
  const percComplete = (scrollPerc * numberOfViews) / 2; // Multiplied by two because the box starts at 50% width
  const widthToAdd = width * percComplete;

  topBox.style.width = `${width / 2 + widthToAdd}px`;
  if (seeCards) {
    await animateCards(false);
  }
};

const changeSecondView = () => {
  // Reason this is separate from the changeFirstView is because if the scroll moves too quickly it won't fire
  topBox.style.width = `${width}px`;
  // Create animation for bringing in the cards
  if (!seeCards) {
    animateCards(true);
  }
  employmentContainer.style.height = 0;
};

const changeThirdView = scrollPerc => {
  if (seeCards) {
    animateCards(false);
  }
  contactContainer.style.height = 0;
  const percComplete = (scrollPerc - 0.5) * numberOfViews;
  const proportionalHeight = height * percComplete;

  employmentContainer.style.height = `${proportionalHeight}px`;
};

const changeFourthView = scrollPerc => {
  // change the 4th view to more of an optional overlay - that way it won't screw up the employment section
  employmentContainer.style.height = `${height}px`;
  const percComplete = (scrollPerc - 0.75) * numberOfViews;
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

    if (scrollPerc <= 1 / numberOfViews) {
      changeFirstView(scrollPerc);
    }
    if (scrollPerc > 1 / numberOfViews && scrollPerc <= 2 / numberOfViews) {
      changeSecondView();
    }
    if (scrollPerc > 2 / numberOfViews && scrollPerc <= 3 / numberOfViews) {
      changeThirdView(scrollPerc);
    }
    if (scrollPerc > 3 / numberOfViews) {
      changeFourthView(scrollPerc);
    }
  },
  false
);

nextButton.addEventListener("click", () => {
  scrollTo(document.documentElement, 0, 1000);
});
