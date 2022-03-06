window.addEventListener("load", () => {
  registerSW();
});
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0]);
    displayUser(data);
  });
const cardContainer = document.getElementById("cardContainer");

function displayUser(data) {
  data.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const cardBody = `
       <div class="card">
     
        <div class="cardText">
          <div class="name">Name : ${element.name}</div>
          <div class="userName">User Name :${element?.username}</div>
          <div class="email">Email : ${element?.email}</div>
        </div>
      </div>`;
    card.innerHTML = cardBody;
    cardContainer.appendChild(card);
  });
}

function htmlElement(id) {
  return document.getElementById(id);
}

async function registerSW() {
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("./sw.js");
    } catch (e) {
      console.warn("sw registration failed");
    }
  }
}
