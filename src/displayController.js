import { createElement } from "./utils";
import mainImageSrc from "./images/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg";

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
  dataset: {
    page: "home",
  },
});
const menuBtn = createElement({
  tag: "button",
  classNames: ["tab-btn"],
  textContent: "Menu",
  attributes: {
    id: "menu-btn",
  },
  dataset: {
    page: "menu",
  },
});
const contactBtn = createElement({
  tag: "button",
  classNames: ["tab-btn"],
  textContent: "Contact",
  attributes: {
    id: "contact-btn",
  },
  dataset: {
    page: "contact",
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
const mainImage = createElement({
  tag: "img",
  attributes: {
    id: "main-img",
    src: mainImageSrc,
  },
});

const tabBtnsListeners = [];

function handleTabBtnClick(event) {
  tabBtnsListeners.forEach((lis) => {
    lis(event);
  });
}

function loadContent() {
  headerNav.append(homeBtn, menuBtn, contactBtn);
  mainContainer.append(headerNav);
  mainContainer.append(pageContent);
  mainContainer.append(mainImage);
  content.append(mainContainer);

  homeBtn.addEventListener("click", handleTabBtnClick);
  menuBtn.addEventListener("click", handleTabBtnClick);
  contactBtn.addEventListener("click", handleTabBtnClick);

  return pageContent;
}

function addTabBtnListener(func) {
  tabBtnsListeners.push(func);
}

export { loadContent, addTabBtnListener };
