import { createElement } from "./utils";

const content = document.querySelector("#content");
const headerNav = createElement({
  tag: "nav",
  classNames: ["header-nav"],
});
const homeBtn = createElement({
  tag: "button",
  classNames: ["tab-btn"],
  textContent: "Home",
  attributes: {
    id: "home-btn",
  },
});
const menuBtn = createElement({
  tag: "button",
  classNames: ["tab-btn"],
  textContent: "Menu",
  attributes: {
    id: "menu-btn",
  },
});
const contactBtn = createElement({
  tag: "button",
  classNames: ["tab-btn"],
  textContent: "Contact",
  attributes: {
    id: "contact-btn",
  },
});
const mainContainer = createElement({
  tag: "main",
  classNames: ["main-container"],
});
const pageContent = createElement({
  tag: "section",
  attributes: {
    id: "page-content",
  },
});

function displayHomePage() {
  const titleDiv = createElement({
    textContent: "My Restaurant",
    classNames: ["restaurant-title"],
  });
  const descriptionDiv = createElement({
    textContent: "description of my restaurant",
    classNames: ["restaurant-description"],
  });
  const hoursDiv = createElement({
    textContent: "hours of my restaurant",
    classNames: ["restaurant-hours"],
  });

  pageContent.append(titleDiv, descriptionDiv, hoursDiv);
}

function loadContent() {
  headerNav.append(homeBtn, menuBtn, contactBtn);
  mainContainer.append(pageContent);
  content.append(headerNav, mainContainer);
}

export { loadContent, displayHomePage };
