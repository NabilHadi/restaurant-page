export default function loadMainPage(containerDiv) {
  const h1 = document.createElement("h1");
  h1.textContent = "Greatest Restaurant of all time";
  containerDiv.append(h1);

  const shortP = document.createElement("p");
  shortP.textContent =
    "Cupcake ipsum dolor sit amet dessert macaroon candy oat cake. Cake sweet gingerbread gummies muffin cake sesame snaps lollipop lemon drops. Pastry caramels cotton candy macaroon tart cotton candy. Danish donut cheesecake cookie shortbread donut powder bonbon chocolate cake.";
  containerDiv.append(shortP);
}
