const form = document.getElementById("form");
const myMessage = document.getElementById("my-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  alert(myMessage.value);
});

const lastMessage = document.querySelector(".messages");
lastMessage.lastElementChild.scrollIntoView();
