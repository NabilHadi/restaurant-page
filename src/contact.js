import { createElement } from "./utils";

function displayContactPage(pageContent) {
  pageContent.appendChild(
    createElement({
      tag: "h1",
      classNames: ["contact-header"],
      textContent: "Contact Us If you liked the food!",
    })
  );

  pageContent.appendChild(
    createElement({
      classNames: ["contact-number"],
      textContent: "Our Number: 555 555 555",
    })
  );

  pageContent.appendChild(
    createElement({
      classNames: ["contact-email"],
      textContent: "Email: restaurant@greatest-restaurant.com",
    })
  );

  //

  const contactLocation = createElement({
    tag: "div",
    classNames: ["contact-location"],
  });

  contactLocation.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d829.2246511955803!2d150.69014483175067!3d-33.76328593058059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b128f539428dcf9%3A0x72e1e792958148e8!2sRon%20Stonestreet%20Pavilion!5e0!3m2!1sen!2seg!4v1675162165100!5m2!1sen!2seg" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  pageContent.appendChild(contactLocation);
}

export { displayContactPage };
