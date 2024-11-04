const buttonTag = document.querySelector(".btn");
const parentTag = document.querySelector(".parent");

const openToastAlertTag = () => {
  parentTag.innerHTML = "";
  const toastAlert = document.createElement("div");
  toastAlert.classList.add("toastAlert");
  toastAlert.append("Your file is successfully uploaded");
  parentTag.append(toastAlert);
  toastAlert.style.top = `-${toastAlert.offsetHeight}px`;
  setTimeout(() => {
    toastAlert.style.top = `0px`;
  }, 100);

  setTimeout(() => {
    toastAlert.style.top = `-${toastAlert.offsetHeight}px`;
  }, 3000);
};

buttonTag.addEventListener("click", () => {
  openToastAlertTag();
});
