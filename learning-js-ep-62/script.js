//<div>Welcome to Myanmar</div>
const divElement = document.createElement("div");
const textNode = document.createTextNode("Welcome to Myanmar")
divElement.appendChild(textNode);
const bodyElement = document.getElementsByTagName("body");
const textElement = bodyElement[0];
textElement.appendChild(divElement);
const haddingOne = document.getElementsByTagName("h1");
const haddingCollection =haddingOne[0];
const texting =document.createTextNode("Hello World");
haddingCollection.appendChild(texting);
const orderList = document.getElementsByTagName("ol");
 
//read 
console.log("Text inside h1 element is :",haddingCollection.textContent);

//update
haddingCollection.textContent ="Hello Everyone!";
console.log("Text element h1 element after update :",haddingCollection.textContent)

//delete

haddingCollection.remove();
