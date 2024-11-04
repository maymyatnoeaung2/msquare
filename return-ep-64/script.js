const myButton =document.getElementById("myButton");
const image = document.getElementsByClassName("animale")[0];
  
const imagePut ="https://images.unsplash.com/photo-1705723152875-a4ce262e5d45?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D";
const originalImageSrc = imagePut;

    const imageArray = [
    "https://images.unsplash.com/photo-1705418511673-786fc03b913c?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1706066555095-0e021d401e1b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1697637067277-f5a0446e1af1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1705179910410-023d32f4613b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1704998250995-37d969c80e03?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D"
];
 
let counter = 0;
const myFunction = () => {

    if( counter === 5){
        image.src = originalImageSrc;
        counter = 0;
        return
    }
    image.src = imageArray[counter];
  
    counter += 1;
    
}

myButton.addEventListener("click",myFunction)