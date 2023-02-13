import "./style.css";
import DisplayController from "./displayController";
import { displayHomePage } from "./home";
import { displayMenuPage } from "./menu";
import { displayContactPage } from "./contact";

const pageContetContainer = DisplayController.loadContent();
displayHomePage(pageContetContainer, handleTabChange);

let currentPage = "home";

function handleTabChange(event) {
  const pageName = event.target.dataset.page;
  if (!pageName) return;
  if (currentPage === pageName) return;

  pageContetContainer.innerHTML = "";
  if (pageName === "home") {
    displayHomePage(pageContetContainer, handleTabChange);
  } else if (pageName === "menu") {
    displayMenuPage(pageContetContainer);
  } else {
    displayContactPage(pageContetContainer);
  }
  currentPage = pageName;
}

DisplayController.addTabBtnListener(handleTabChange);
