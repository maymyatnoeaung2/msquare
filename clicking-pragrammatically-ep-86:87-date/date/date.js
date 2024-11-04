const date = document.querySelector("#date");
const addBtn = document.querySelector("#addBtn");
const cancelBtn = document.querySelector("#cancelBtn");
const template = document.querySelector("#template");
const container = document.querySelector(".container");
const recordContainer = document.querySelector("#recordContainer");

// const isAllowedToCancel = (date) => {
//   const currentDate = new Date();
//   console.log(currentDate);
//   console.log(currentDate.getHours());
//   console.log(date);
// };

// cancelBtn.addEventListener("click", () => {
//   const dateValue = date.value;
// console.dir(dateValue);

//   // isAllowedToCancel(dateValue);
// });

const isAllowedToCancel = (date) => {
  const currentDate = new Date();
  const newCurrentDate = currentDate.setHours(currentDate.getHours() + 24);
  // console.log(currentDate.getTime());
  // console.log(date)
  // const currentExpireDate = date.getTime();

  if (newCurrentDate < date) {
    const deleteAll = recordContainer.querySelectorAll(".addRecord");
    // console.log(deleteAll);
    if (window.confirm("Are you sure want to Delete?")) {
      deleteAll.forEach((element) => {
        element.remove();
      });
    }
  } else {
    alert("Sorry,you can't cancel...");
  }
};

// const expireDate = new Date(2024, 6, 18);
// isAllowedToCancel(expireDate);
// console.log(expireDate.getTime());

cancelBtn.addEventListener("click", () => {
  const dateValue = new Date(date.value);
  const customerServiceDate = dateValue.getTime();
  isAllowedToCancel(customerServiceDate);
});

addBtn.addEventListener("click", () => {
  const dateValue = new Date(date.value);
  const customerServiceDate = dateValue.getTime();

  if (customerServiceDate > new Date().getTime()) {
    const templateClone = template.content.cloneNode(true);
    const addRecord = templateClone.querySelector(".addRecord");
    const recordRow = templateClone.querySelector(".recordRow");
    const appointmentDate = templateClone.querySelector(".appointmentDate");

    appointmentDate.innerText = date.value;
    recordContainer.append(addRecord);
  } else {
    alert("Please, don't fill old date 🙄");
  }
});

const cancelBtnFun = (rowId) => {
  console.log(rowId);
  // const recordRow =document.querySelector('[row-id=`${rowId}`]') ;
// document.querySelector(`#${rowId}`).remove();
// console.log(document.querySelector(`#${rowId}`));
}

const recordContainerHandler = (event) => {
  const addRecord = event.target.closest(".addRecord");
  const cancelBtn = event.target.classList.contains("cancelTime");
  // addRecord.setAttribute = ("row-id", Date.now());
  addRecord.id =Date.now()

  if (cancelBtn) {
    // addRecord.id=Date.now();
    // cancelBtnFun(addRecord.getAttribute("row-id"));
    // console.log(addRecord.getAttribute("row-id"));
  console.log(addRecord);

    // const forId = addRecord.getAttribute("row-id");
    // console.log(forId);
    // console.log(addRecord);

    cancelBtnFun(addRecord.id)
    // const recordRow =recordContainer.querySelector(`[row-id=${forId}]`) ;
    console.log(addRecord.id);
  }
};

recordContainer.addEventListener("click", recordContainerHandler);
