
// const nameTag = document.createElement('h1');
// nameTag.textContent =  window.prompt("Enter Your Name");
// document.body.appendChild(nameTag);

// const myList = document.querySelector("#fruit");
// const listItem = document.createElement("li");

// listItem.textContent = "Mango";

// myList.append(listItem);
// myList.prepend(listItem);

// myList.insertBefore(listItem, myList.getElementsByTagName("li")[2]);

const myList = document.querySelector("#fruit");
const listItem = document.createElement("li");
listItem.textContent = "Mango";
// myList.append(listItem);
// myList.prepend(listItem);
myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]);