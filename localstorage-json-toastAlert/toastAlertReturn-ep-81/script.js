const clickBtn = document.querySelector(".click-btn");
const parent = document.querySelector(".parent");

const openToastAlert = () => {
  parent.innerHTML = "";
  // create toast alert tag container
  const toastAlertContainerTag = document.createElement("div");
  toastAlertContainerTag.classList.add("toastAlertContainer");

    // create toast alert tag
  const toastAlertTag = document.createElement("div");
  toastAlertTag.append(
    "We use cookies. Your continued use of our site implies your agree to this.See details."
  );
 
  // Create closeButtonTag
  const closetButtonTag = document.createElement("div");
  closetButtonTag.append("Close");
  closetButtonTag.classList.add("btn","btn-light");

  // append toastAlertContainer to Parent
  toastAlertContainerTag.append(toastAlertTag,closetButtonTag)
  parent.append(toastAlertContainerTag);

  toastAlertContainerTag.style.bottom = `-${toastAlertContainerTag.offsetHeight}px`;

  setTimeout(() => {
    toastAlertContainerTag.style.bottom = 0 + "px";
  }, 100);

  // setTimeout(() => {
  //   toastAlertContainerTag.style.bottom = `-${toastAlertContainerTag.offsetHeight}px`;
  // }, 5000);


closetButtonTag.addEventListener("click",() =>{
  toastAlertContainerTag.style.bottom=`-${toastAlertContainerTag.offsetHeight}px`;
  localStorage.setItem("accepted","1")
})

};

window.addEventListener("load", () => {
  const accepted = localStorage.getItem("accepted");
  if(accepted!=="1"){
    openToastAlert();
  }
});
