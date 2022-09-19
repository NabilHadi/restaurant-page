// Root content Element
const rootDiv = document.querySelector("#content");

// Tabs elements
const tabsUl = document.createElement("ul");
const homeTabLi = document.createElement("li");
const menuTabLi = document.createElement("li");
const contactTabLi = document.createElement("li");

homeTabLi.textContent = "Home";
menuTabLi.textContent = "Menu";
contactTabLi.textContent = "Contact";

tabsUl.appendChild(homeTabLi);
tabsUl.appendChild(menuTabLi);
tabsUl.appendChild(contactTabLi);

rootDiv.append(tabsUl);

// Page Content div
const pageContent = document.createElement("div");
pageContent.textContent = "Page content";

rootDiv.append(pageContent);
