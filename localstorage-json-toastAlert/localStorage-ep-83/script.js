const button = document.querySelector("#button");
const comment = document.querySelector("#comment");
const inputContainer = document.querySelector(".input-container");
const template = document.querySelector("#template");
let value = 0;

const buttonHandler = () => {
  const clone = template.content.cloneNode(true);

  if (comment.value.length > 0) {
    // localStorage.setItem("text", "1");

    const textInput = clone.querySelector("#textInput");

    textInput.value = comment.value;
    value += 1
    localStorage.setItem(parseInt(value),textInput.value);


    inputContainer.append(clone);
    comment.value = "";
  } else {
    Swal.fire({
      title: "Fill Comment",
      text: "Please,fill some comment.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I'll fill it!",
    });
  }
};

button.addEventListener("click", buttonHandler);

window.addEventListener("load", () => {
  const clone = template.content.cloneNode(true);
  const textInput = clone.querySelector("#textInput");

  // const toGetItem = localStorage.getItem(value);
  console.log(value);

  // if (getItem == value) {

  //   // localStorage.setItem("text", "1");

  //   textInput.value = comment.value;
  //   inputContainer.append(clone);
  //   comment.value = "";
  // }
});


console.log(value);
