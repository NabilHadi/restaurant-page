import { createElement } from "./utils";

function displayMenuPage(pageContent) {
  const titleDiv = createElement({
    textContent: "Menu",
    classNames: ["menu-title"],
  });

  const categoryDiv = createElement({
    textContent: "category",
    classNames: ["menu-category"],
  });
  const menuItemDiv = createElement({
    textContent: "menu item",
    classNames: ["menu-item"],
  });

  pageContent.append(titleDiv, categoryDiv, menuItemDiv);
}

export { displayMenuPage };
