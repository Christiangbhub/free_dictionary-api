// alert("greetings fam");

const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

var displayText = document.querySelector("#output");
var userInput = document.querySelector("#userInput");

const person = {
  name: "Chris",
  age: "22",
};

function fetchDefination(userInput) {
  const randomNum = Math.floor(Math.random() * 5);
  console.log(randomNum);

  if (userInput.trim() === "") {
    displayText.innerHTML = "input cannot be empty";
  } else {
    fetch(`${apiUrl + userInput}`)
      .then((response) => {
        if (!response.ok) {
          console.log("error here");
          displayText.innerHTML = "unknown word";
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data[0].meanings[0].definitions[0].definition);
        const definitionData = data[0].meanings[0].definitions[0].definition;
        displayText.innerHTML = definitionData;
      });
  }
}

function getDefination() {
  console.log(userInput.value);

  fetchDefination(userInput.value);
}

function clearInput() {
  userInput.value = "";
}

window.addEventListener("keypress", (e) => {
  console.log(`keypress event: ${e.key}`);

  if (e.key === "Enter") {
    getDefination();
  }
});

var userFieldDataName = document.querySelectorAll(".name");
var userFieldDataEmail = document.querySelectorAll(".email");
var userFieldDataGender = document.querySelectorAll(".gender");
var userFieldDataPhoneNum = document.querySelectorAll(".phoneNum");

async function getRandomUser() {
  const randomUserNum = Math.floor(Math.random() * 100);
  const module = await import("./randomuser.json", { with: { type: "json" } });

  console.log(module);

  const data = module.default;
  console.log(data[randomUserNum]);

  console.log("kajskdjfaskj");

  userFieldDataName.forEach((user) => {
    user.innerText = data[randomUserNum].first_name;
  });

  userFieldDataEmail.forEach((user) => {
    user.innerText = data[randomUserNum].email;
  });

  userFieldDataGender.forEach((user) => {
    user.innerText = data[randomUserNum].gender;
  });

  userFieldDataPhoneNum.forEach((user) => {
    user.innerText = data[randomUserNum].phone_number;
  });
}
