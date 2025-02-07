const inputBox = document.getElementById("input-box");
const h3 = document.createElement("h3");
const inputName = document.getElementById("input-name");
const login = document.getElementById("butLog");

function passwordRequired() {
    const lengthPassword = inputBox.value.length;
    const lengthName = inputName.value.length;

    if (lengthPassword > 9) {
        h3.style.color = "green";
        h3.innerText = "The password is save";
        login.setAttribute("class", "butLogin");
        login.removeAttribute("disabled");
    }
    if (lengthPassword > 7 && lengthPassword < 9) {
        h3.style.color = "orange";
        h3.innerText = "The password is not save";
        login.removeAttribute("class", "butLogin");
        login.setAttribute("disabled", "true");
    }
    if (lengthPassword < 7) {
        h3.style.color = "red";
        h3.innerText = "The password is too short";
        login.removeAttribute("class", "butLogin");
        login.setAttribute("disabled", "true");
    }
    document.body.appendChild(h3);
}

function nameRequired() {
    if (inputName.value.length == 0) {
    }
}

inputBox.addEventListener("keydown", passwordRequired);
inputName.addEventListener("keydown", nameRequired);
