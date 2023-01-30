import "./style.css";
import { loadContent, addTabBtnListener } from "./displayController";
import { displayHomePage } from "./home";
import { displayMenuPage } from "./menu";
import { displayContactPage } from "./contact";

function checkMenuBtnHandler(event) {
  console.log(event);
  handleTabBtnClick({ target: { dataset: { page: "menu" } } });
}

const pageContetContainer = loadContent();
displayHomePage(pageContetContainer, checkMenuBtnHandler);

let currentPage = "home";

function handleTabBtnClick(event) {
  const pageName = event.target.dataset.page;
  if (!pageName) return;
  if (currentPage === pageName) return;

  pageContetContainer.innerHTML = "";
  if (pageName === "home") {
    displayHomePage(pageContetContainer, checkMenuBtnHandler);
  } else if (pageName === "menu") {
    displayMenuPage(pageContetContainer);
  } else {
    displayContactPage(pageContetContainer);
  }
  currentPage = pageName;
}

addTabBtnListener(handleTabBtnClick);
