import { createElement } from "./utils";

function loadHomePage(container) {
  container.appendChild(
    createElement({
      tag: "h1",
      textContent: "Greatest Restaurant of all time",
    })
  );

  container.appendChild(
    createElement({
      textContent: "Why?",
    })
  );

  container.appendChild(
    createElement({
      tag: "p",
      textContent: "Because I said so.",
    })
  );
}

export { loadHomePage };
