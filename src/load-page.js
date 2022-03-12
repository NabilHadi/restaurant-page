import "./style.css";

export default function loadPage() {
  const contentDiv = document.querySelector("#content");

  const h1 = document.createElement("h1");
  h1.textContent = "Restaurant Title";
  contentDiv.append(h1);

  const shortP = document.createElement("p");
  shortP.textContent =
    "Cupcake ipsum dolor sit amet dessert macaroon candy oat cake. Cake sweet gingerbread gummies muffin cake sesame snaps lollipop lemon drops. Pastry caramels cotton candy macaroon tart cotton candy. Danish donut cheesecake cookie shortbread donut powder bonbon chocolate cake.";
  contentDiv.append(shortP);
}
