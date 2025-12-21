export function loadContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const contactTitle = document.createElement("h2");
  contactTitle.textContent = "Contact";

  const contactDetails = document.createElement("div");
  contactDetails.classList.add("contact-details");

  const phone = document.createElement("p");
  phone.textContent = "Phone: 123-456-7890";
  contactDetails.appendChild(phone);

  const email = document.createElement("p");
  email.textContent = "odin@odin.com";
  contactDetails.appendChild(email);

  contact.appendChild(contactTitle);
  contact.appendChild(contactDetails);

  return contact;
}
