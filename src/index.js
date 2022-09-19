import { loadHomePage } from "./homePage";
import "./style.css";

let pageContentContainer;

// Create and return Tab elements
function createTabs() {
  const tabsUl = document.createElement("ul");
  tabsUl.classList.add("tabs-container");

  const homeTabLi = document.createElement("li");
  const menuTabLi = document.createElement("li");
  const contactTabLi = document.createElement("li");

  homeTabLi.textContent = "Home";
  menuTabLi.textContent = "Menu";
  contactTabLi.textContent = "Contact";

  homeTabLi.dataset.tab = "home";
  menuTabLi.dataset.tab = "menu";
  contactTabLi.dataset.tab = "contact";

  homeTabLi.addEventListener("click", handleTabClick);
  menuTabLi.addEventListener("click", handleTabClick);
  contactTabLi.addEventListener("click", handleTabClick);

  tabsUl.appendChild(homeTabLi);
  tabsUl.appendChild(menuTabLi);
  tabsUl.appendChild(contactTabLi);
  return tabsUl;
}

function handleTabClick({ target }) {
  if (!target.dataset.tab) return;

  const tabName = target.dataset.tab;
  if (tabName === "home") {
    loadHomePage(pageContentContainer);
  }
}

function onPageLoad() {
  // Root content Element
  const rootDiv = document.querySelector("#content");
  // Add tabs
  rootDiv.append(createTabs());

  // Page Content div
  pageContentContainer = document.createElement("div");
  pageContentContainer.id = "page-content-container";
  pageContentContainer.textContent = "Page content";
  // Add page content container
  rootDiv.append(pageContentContainer);
}

window.addEventListener("load", onPageLoad);
