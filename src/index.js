import { loadContactPage } from "./contactPage";
import { loadHomePage } from "./homePage";
import { loadMenuPage } from "./menuPage";
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
  pageContentContainer.innerHTML = "";
  if (tabName === "home") {
    loadHomePage(pageContentContainer);
  } else if (tabName === "menu") {
    loadMenuPage(pageContentContainer);
  } else if (tabName === "contact") {
    loadContactPage(pageContentContainer);
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
  // Add page content container
  rootDiv.append(pageContentContainer);
  // Load Home Page
  loadHomePage(pageContentContainer);
}

window.addEventListener("load", onPageLoad);
