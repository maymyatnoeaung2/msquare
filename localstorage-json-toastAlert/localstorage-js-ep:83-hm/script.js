const commentInputContainer = document.querySelector(".commentInputContainer");
const commentInputTag = document.querySelector(".commentInput");
const buttonTag = document.querySelector(".btn");

const getCommentInputBox = (event)=>{
console.log(commentInputTag.event.target.value);
};

buttonTag.addEventListener("click",()=>{
    getCommentInputBox();
})