import ready from "../../js/utils/documentReady.js";

ready(function () {
  const contactsHost = document.querySelector(".contacts");

  if (contactsHost) {
    const contactsNameField = contactsHost.querySelector("[name='contacts-name']");
    const contactsContactField = contactsHost.querySelector("[name='contacts-contact']");
    const contactsMessageField = contactsHost.querySelector("[name='contacts-message']");
    const formButton = contactsHost.querySelector("button");

    contactsNameField.addEventListener("input", () => {
      formCheck(contactsHost, formButton);
    });

    contactsContactField.addEventListener("input", () => {
      formCheck(contactsHost, formButton);
    });

    contactsMessageField.addEventListener("input", () => {
      formCheck(contactsHost, formButton);
    });
  }
});

function formCheck(form, submit) {
  const contactsNameValue = form.querySelector("[name='contacts-name']").value;
  const contactsContactValue = form.querySelector("[name='contacts-contact']").value;
  const contactsPlaceValue = form.querySelector("[name='contacts-message']").value;

  const noEmptyValues = !!contactsNameValue && !!contactsContactValue && !!contactsPlaceValue;
  noEmptyValues ? submit.removeAttribute("disabled") : submit.setAttribute("disabled", "true");
}
