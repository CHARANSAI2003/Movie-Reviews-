let textmovietitle = document.getElementById("titleInput");
let textmoviereview = document.getElementById("reviewTextarea");
let userinuputvalue = document.getElementById("reviewsContainer");

addBtn.onclick = function() {
    let userEnteredText1 = textmovietitle.value;
    localStorage.setItem("userEnteredText1", userEnteredText1);
    let userEnteredText2 = textmoviereview.value;
    localStorage.setItem("userEnteredText1", userEnteredText2);
    let createlement = document.createElement("h3");
    userinuputvalue.appendChild(createlement);
    createlement.textContent = " Movie Title: " + userEnteredText1;
    let createlement1 = document.createElement("p");
    userinuputvalue.appendChild(createlement1);
    createlement1.textContent = " Review: " + userEnteredText2;
}