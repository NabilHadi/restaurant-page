export default function loadContactPage(containerDiv) {
  const h1 = document.createElement("h1");
  h1.textContent = "Contact Us If you liked the food! or don't, idc.";
  h1.classList.add("mb-2");
  containerDiv.append(h1);

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card");
  containerDiv.append(cardContainer);

  const h2 = document.createElement("h2");
  h2.textContent = "555 555 555";
  cardContainer.append(h2);

  const h31 = document.createElement("h3");
  h31.textContent = "Some place in earth";
  cardContainer.append(h31);

  const h32 = document.createElement("h3");
  h32.textContent = "restaurant@greatest-restaurant.com";
  cardContainer.append(h32);

  const h6 = document.createElement("h5");
  h6.textContent =
    "This font is obnoxious, but it is too late to change it now";
  cardContainer.append(h6);

  const a = document.createElement("a");
  a.textContent = "Github";
  a.setAttribute("href", "https://github.com/NabilHadi");
  cardContainer.append(a);
}
