/*document.querySelector("html").addEventListener("click", function () {
    alert("Ai! Pare de me cutucar!");
});*/
function setUserName(){
    const myName = prompt("Por favor, digite o seu nome:");
    if(!myName){ // Verificar se foi digitado algo na var(myName);
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Montanhas são legais, ${myName}!`;
    }
}

const myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/mountains-1761292_1920.jpg"){
        myImage.setAttribute("src", "images/mountains_necessary.jpg");
    }
};

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Montanhas são legais, ${storedName}`;
  }

myButton.onclick = () => {
    setUserName();
};