/*Events*/

//emitter, listener or handler
//an event occurs, run some codes

const myButton = document.getElementById("myButton");
const image = document.getElementsByClassName("girl")[0];//HTML Collection
const originalImageSrc = image.src;
const imageArray = [
    "https://images.unsplash.com/photo-1610316526263-b811be6cd6d9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1690179756660-2ad2cd03bca1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1627213282611-c9b5097a5012?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1614495478443-94c9a92fb744?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1636634959169-c1145dba87c1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
]

let counter = 0;
const myFunction = () => {
    if (counter === 5) {
        image.src = originalImageSrc;
        counter = 0;
        return;
    }
    const imageLink = imageArray[counter];
    image.src = imageLink;
    counter += 1;
    console.log("Counter : ", counter)

};


myButton.addEventListener("click", myFunction);

/*

*/