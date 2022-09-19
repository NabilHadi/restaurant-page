import { createElement } from "./utils";
import cardImageSRC from "./f7942fe85567788a5ca6.jpg";

function loadMenuPage(container) {
  const gridContainer = createElement({ classNames: ["menu-container"] });

  for (let i = 1; i < 7; i++) {
    const card = createElement({ classNames: ["grid-card"] });

    const cardImage = createElement({ tag: "img" });
    cardImage.src = cardImageSRC;
    card.appendChild(cardImage);

    card.appendChild(createElement({ tag: "h4", textContent: "Dish #" + i }));
    card.appendChild(
      createElement({
        textContent: "A very long detailed description of the dish",
      })
    );

    gridContainer.appendChild(card);
  }

  container.appendChild(gridContainer);
}

export { loadMenuPage };
