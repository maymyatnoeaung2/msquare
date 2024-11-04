const parentTag = document.querySelector(".parent");

const openToastAlert = () => {
  // This child for parentTag
  const toastAlertContainerTag = document.createElement("div");
  toastAlertContainerTag.classList.add("toastAlertContainerTag");

  // Tis parent is toastAlertContainerTag
  const toastAlertTextTag = document.createElement("div");
  toastAlertTextTag.classList.add("toastAlertTextTag");
  toastAlertTextTag.append(
    "We use cookies. Your continued use of our site implies you agree to this. See details."
  );

  // Tis parent is toastAlertContainerTag
  const closeButtonTag = document.createElement("div");
  closeButtonTag.append("Close");
  closeButtonTag.classList.add("btn", "btn-light");

  toastAlertContainerTag.append(toastAlertTextTag, closeButtonTag);
  parentTag.append(toastAlertContainerTag);

  toastAlertContainerTag.style.bottom = `-${toastAlertContainerTag.offsetHeight}px`;

  setTimeout(() => {
    toastAlertContainerTag.style.bottom = `0px`;
  }, 100);

  closeButtonTag.addEventListener("click", () => {
    toastAlertContainerTag.style.bottom = `-${toastAlertContainerTag.offsetHeight}px`;
    localStorage.setItem("accepted", "1");
  });
};

window.addEventListener("load", () => {
  const accepted = localStorage.getItem("accepted");

  if (accepted !== "1") {
    openToastAlert();
  }
});
