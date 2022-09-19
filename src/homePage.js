import { createElement } from "./utils";

function loadHomePage(container) {
  const homePageContainer = createElement({
    classNames: ["home-page-container"],
  });

  homePageContainer.appendChild(
    createElement({
      tag: "h1",
      textContent: "Greatest Restaurant of all time",
    })
  );

  homePageContainer.appendChild(
    createElement({
      textContent: "Why?",
    })
  );

  homePageContainer.appendChild(
    createElement({
      tag: "p",
      textContent: "Because I said so.",
    })
  );

  container.appendChild(homePageContainer);
}

export { loadHomePage };
