const inputTag = document.getElementsByClassName("inputTag")[0];
const orderListTag = document.getElementsByClassName("orderlist")[0];

const handleChange = (event) => {
    const inputValue = event.target.value;
    const ListItem = document.createElement("li");
    // ListItem.classList.add("listItemName")
    ListItem.append(inputValue);
    orderListTag.append(ListItem);
    inputTag.value ="";
};
inputTag.addEventListener("change", handleChange);