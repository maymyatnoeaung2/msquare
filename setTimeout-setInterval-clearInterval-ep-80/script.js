// const boxElement = document.querySelector(".box");
// const buttonElement = document.querySelector(".btn-primary");

// buttonElement.addEventListener("click", () => {
//   boxElement.style.backgroundColor = "#007bff";

//   setTimeout(() => {
//     boxElement.style.backgroundColor = "#ffc107";
//   }, 3000);
// });

const boxElement = document.querySelector(".notivation");
const buttonElement = document.querySelector(".btn-primary");

buttonElement.addEventListener("click",()=>{
    boxElement.style.display="inline-block";
    setTimeout(()=>{
        boxElement.style.display="none";
    },3000)
})