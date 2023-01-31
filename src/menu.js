import { createElement } from "./utils";
import coffee_late from "./images/late_coffee-removebg-preview.png";
import coffee_black from "./images/black-coffee-benefits-removebg-preview.png";
import coffee_turkish from "./images/turkish_coffee.png";
import coffee_espresso from "./images/espresso-removebg-preview.png";

function createMenuItem(itemName, price, imgSrc, desc) {
  // Menu Item
  const menuItem = createElement({
    tag: "li",
    classNames: ["menu-item"],
  });

  // Item Image
  menuItem.appendChild(
    createElement({
      tag: "img",
      classNames: ["menu-item-img"],
      attributes: {
        src: imgSrc,
      },
    })
  );

  // Item text content container
  const menuItemContent = createElement({
    tag: "div",
    classNames: ["menu-item-content"],
  });
  // Item name header
  const menuItemHeader = createElement({
    tag: "h5",
    classNames: ["menu-item-name"],
    textContent: itemName,
  });
  // Item price
  menuItemHeader.appendChild(
    createElement({
      tag: "span",
      classNames: ["menu-item-price"],
      textContent: price,
    })
  );
  menuItemContent.appendChild(menuItemHeader);

  // Item desc
  menuItemContent.appendChild(
    createElement({
      tag: "p",
      textContent: desc,
      classNames: ["menu-item-desc"],
    })
  );

  menuItem.appendChild(menuItemContent);
  return menuItem;
}

function displayMenuPage(pageContent) {
  const titleDiv = createElement({
    textContent: "",
    classNames: ["menu-title"],
  });

  const menuItemList = createElement({
    tag: "ul",
    classNames: ["menu-item-list"],
  });

  menuItemList.append(createMenuItem("Late Coffee", "5.99", coffee_late));
  menuItemList.append(createMenuItem("Black Coffee", "2.50", coffee_black));
  menuItemList.append(createMenuItem("Turkish Coffee", "3.00", coffee_turkish));
  menuItemList.append(
    createMenuItem("Espresso Coffee", "4.20", coffee_espresso)
  );

  pageContent.append(titleDiv, menuItemList);
}

export { displayMenuPage };
