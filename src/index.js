import "./style.css";
import { loadContent, addTabBtnListener } from "./displayController";
import { displayHomePage } from "./home";

const pageContetContainer = loadContent();
displayHomePage(pageContetContainer);

function handleTabBtnClick(event) {
  const pageName = event.target.dataset.page;
  if (!pageName) return;
  console.log(pageName);
}

addTabBtnListener(handleTabBtnClick);
