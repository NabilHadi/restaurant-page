import "./style.css";

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

  tabsUl.appendChild(homeTabLi);
  tabsUl.appendChild(menuTabLi);
  tabsUl.appendChild(contactTabLi);
  return tabsUl;
}

function onPageLoad() {
  // Root content Element
  const rootDiv = document.querySelector("#content");
  // Add tabs
  rootDiv.append(createTabs());

  // Page Content div
  const pageContentContainer = document.createElement("div");
  pageContentContainer.id = "page-content-container";
  pageContentContainer.textContent = "Page content";
  // Add page content container
  rootDiv.append(pageContentContainer);
}

window.addEventListener("load", onPageLoad);
