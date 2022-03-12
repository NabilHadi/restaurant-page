import dishImage from "./dish.jpg";

// Photo by <a href="https://unsplash.com/@widenka?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Martin Widenka</a> on <a href="https://unsplash.com/s/photos/dish?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

export default function loadMenuPage(containerDiv) {
  const h1 = document.createElement("h1");
  h1.textContent = "Restaurant Menu!!";
  h1.classList.add("mb-2");
  containerDiv.append(h1);

  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");
  containerDiv.append(gridContainer);

  for (let i = 0; i < 6; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item", "card");
    gridContainer.append(gridItem);

    const gridItemImage = document.createElement("img");
    gridItemImage.classList.add("grid-item-img");
    gridItemImage.setAttribute("src", dishImage);
    gridItem.append(gridItemImage);

    const gridItemTitle = document.createElement("h3");
    gridItemTitle.classList.add("grid-item-title");
    gridItemTitle.textContent = `Dish #${i + 1}`;
    gridItem.append(gridItemTitle);

    const gridItemDesc = document.createElement("p");
    gridItemDesc.classList.add("grid-item-desc");
    gridItemDesc.textContent = `Our finest Meal`;
    gridItem.append(gridItemDesc);
  }
}
