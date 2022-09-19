import img from "./pexels-ella-olsson-1640777.jpg";

function loadHomePage(container) {
  const image = new Image();
  image.src = img;
  container.textContent = "Home Page";
  container.appendChild(image);
}

export { loadHomePage };
