import { createElement } from "./utils";

function displayHomePage(pageContent) {
  const titleDiv = createElement({
    textContent: "My Restaurant",
    classNames: ["restaurant-title"],
  });
  const descriptionDiv = createElement({
    textContent: "description of my restaurant",
    classNames: ["restaurant-description"],
  });
  const hoursDiv = createElement({
    textContent: "hours of my restaurant",
    classNames: ["restaurant-hours"],
  });

  pageContent.append(titleDiv, descriptionDiv, hoursDiv);
}

export { displayHomePage };
