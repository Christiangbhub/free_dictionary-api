// alert("greetings fam");

const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

var displayText = document.querySelector("#output");
var userInput = document.querySelector("#userInput");
console.log(displayText);

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
