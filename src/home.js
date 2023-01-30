import { createElement } from "./utils";

function displayHomePage(pageContent, menuBtnClickListener) {
  const titleDiv = createElement({
    tag: "h1",
    textContent: "Cafe Lattétude",
    classNames: ["restaurant-title"],
  });
  const descriptionDiv = createElement({
    tag: "p",
    textContent:
      "If you have been looking to experience a cafe with a sincere commitment to quality – you have found it in Cafe Lattétude.",
    classNames: ["restaurant-desc"],
  });

  const menuBtn = createElement({
    tag: "button",
    textContent: "Check Menu",
    classNames: ["check-menu-btn"],
    eventHandlers: {
      click: menuBtnClickListener,
    },
  });

  pageContent.append(titleDiv, descriptionDiv, menuBtn);
}

export { displayHomePage };
