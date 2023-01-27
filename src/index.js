import "./style.css";
import { loadContent, addTabBtnListener } from "./displayController";
import { displayHomePage } from "./home";
import { displayMenuPage } from "./menu";
import { displayContactPage } from "./contact";

const pageContetContainer = loadContent();
displayHomePage(pageContetContainer);

let currentPage = "home";

function handleTabBtnClick(event) {
  const pageName = event.target.dataset.page;
  if (!pageName) return;
  if (currentPage === pageName) return;

  pageContetContainer.innerHTML = "";
  if (pageName === "home") {
    displayHomePage(pageContetContainer);
  } else if (pageName === "menu") {
    displayMenuPage(pageContetContainer);
  } else {
    displayContactPage(pageContetContainer);
  }
  currentPage = pageName;
}

addTabBtnListener(handleTabBtnClick);
