import { createElement } from "./utils";

function displayContactPage(pageContent) {
  const contactPageContainer = createElement({
    classNames: ["contact-page-container"],
  });
  contactPageContainer.appendChild(
    createElement({
      tag: "h1",
      textContent: "Contact Us If you liked the food!",
    })
  );

  contactPageContainer.appendChild(
    createElement({
      textContent: "555 555 555",
    })
  );

  contactPageContainer.appendChild(
    createElement({
      textContent: "Some place in earth",
    })
  );

  contactPageContainer.appendChild(
    createElement({
      textContent: "restaurant@greatest-restaurant.com",
    })
  );

  pageContent.appendChild(contactPageContainer);
}

export { displayContactPage };
