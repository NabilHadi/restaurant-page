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

  contactPageContainer.appendChild(
    createElement({
      tag: "img",
      classNames: ["contact-img"],
      attributes: {
        src: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
    })
  );

  pageContent.appendChild(contactPageContainer);
}

export { displayContactPage };
