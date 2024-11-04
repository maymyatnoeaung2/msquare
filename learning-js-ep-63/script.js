
/*
const bodyElement=document.getElementsByTagName("body")[0];
//console.log("Body Element : ",bodyElement);
const parentDiv = document.getElementsByClassName("parent")[0];
//console.log(parentDiv)
//parentDiv.innerHTML="";
const divWithId =document.getElementById("myId");


//console.log("div with id",divWithId)
*/

/*
<div class="parent">
<div class="child">child one</div>
<div class="child">child two</div>
</div> 
*/
const bodyElement = document.getElementsByTagName("body")[0];
const parentDiv = document.createElement("div");
parentDiv.classList.add("parent" ,"testClass");
//parentDiv.classList.remove("testClass","parent")

const childDivOne = document.createElement("div");
childDivOne.append("child one");
childDivOne.classList.add("child");

const childDivTwo = document.createElement("div");
childDivTwo.append("child two");
childDivTwo.classList.add("child");


parentDiv.append(childDivOne , childDivTwo);
bodyElement.appendChild(parentDiv);

const styleTestDiv =document.getElementsByClassName("styleTest")[0];

console.log("styleTestDiv's width",getComputedStyle(styleTestDiv).width);
console.log("styleTestDiv's height",getComputedStyle(styleTestDiv).height);
console.log("styleTestDiv's backgroundColor",getComputedStyle(styleTestDiv).backgroundColor);
