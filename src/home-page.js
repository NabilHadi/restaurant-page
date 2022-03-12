export default function loadMainPage(containerDiv) {
  const h1 = document.createElement("h1");
  h1.textContent = "Greatest Restaurant of all time";
  h1.classList.add("mb-2");
  containerDiv.append(h1);

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card");
  containerDiv.append(cardContainer);

  const h2 = document.createElement("h2");
  h2.textContent = "Why?";
  cardContainer.append(h2);

  const p = document.createElement("p");
  p.textContent = "Beacuse I Said So.";
  cardContainer.append(p);
}
