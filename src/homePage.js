import img from "./pexels-ella-olsson-1640777.jpg";

const rootDiv = document.querySelector("#content");

function appendImage() {
  const image = new Image();
  image.src = img;
  rootDiv.appendChild(image);
}

function loadHomePage() {}

export { appendImage };
