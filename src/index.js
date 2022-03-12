import "./style.css";
import loadMainPage from "./home-page";
import loadMenuPage from "./menu-page";
import loadContactPage from "./contact-page";

const RenderPage = () => {
  const contentDiv = document.querySelector("#content");

  const navbar = document.createElement("div");
  navbar.classList.add("navbar");
  contentDiv.append(navbar);

  const navbarTabs = document.createElement("ul");
  navbarTabs.classList.add("tabs-ul");
  navbar.append(navbarTabs);

  const mainTab = document.createElement("li");
  mainTab.textContent = "Home";
  mainTab.classList.add("btn");
  navbarTabs.append(mainTab);

  const menuTab = document.createElement("li");
  menuTab.textContent = "Menu";
  menuTab.classList.add("btn");
  navbarTabs.append(menuTab);

  const contactTab = document.createElement("li");
  contactTab.textContent = "Contact";
  contactTab.classList.add("btn");
  navbarTabs.append(contactTab);

  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container");
  contentDiv.append(containerDiv);

  loadMainPage(containerDiv);

  const emptyContainer = () => {
    containerDiv.innerHTML = "";
  };

  mainTab.addEventListener("click", () => {
    emptyContainer();
    loadMainPage(containerDiv);
  });

  menuTab.addEventListener("click", () => {
    emptyContainer();
    loadMenuPage(containerDiv);
  });

  contactTab.addEventListener("click", () => {
    emptyContainer();
    loadContactPage(containerDiv);
  });
};

RenderPage();
