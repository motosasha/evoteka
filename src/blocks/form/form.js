import ready from "../../js/utils/documentReady.js";

ready(function () {
  // form checker
  const form = document.querySelector("#registration-form");

  if (form) {
    const userNameField = form.querySelector("[name='user-name']");
    const userContactField = form.querySelector("[name='user-contact']");
    const userPlaceField = form.querySelector("[name='user-place']");
    const userCategoryField = form.querySelector("[name='user-category']");
    const formButton = form.querySelector("button");

    userNameField.addEventListener("input", () => {
      formCheck(form, formButton);
    });

    userContactField.addEventListener("input", () => {
      formCheck(form, formButton);
    });

    userPlaceField.addEventListener("change", () => {
      formCheck(form, formButton);
    });

    userCategoryField.addEventListener("change", () => {
      formCheck(form, formButton);
    });
  }
});

function formCheck(form, submit) {
  const userNameValue = form.querySelector("[name='user-name']").value;
  const userContactValue = form.querySelector("[name='user-contact']").value;
  const userPlaceValue = form.querySelector("[name='user-place']").value;
  const userCategoryValue = form.querySelector("[name='user-category']").value;

  const noEmptyValues =
    !!userNameValue &&
    !!userContactValue &&
    userPlaceValue !== "Выберите должность" &&
    userCategoryValue !== "Выберите категорию бизнеса";

  noEmptyValues ? submit.removeAttribute("disabled") : submit.setAttribute("disabled", "true");
}
