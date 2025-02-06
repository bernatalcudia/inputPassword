const inputBox = document.getElementById('input-box');
const h3 = document.createElement('h3');

function passwordRequired(params) {
    const lengthPassword = Number(inputBox.value)
    if (lengthPassword < 10) {

    } if (lengthPassword < 8) {

    } else {

    }
    h3.innerText = 'The password is not save'
}

inputBox.addEventListener('keydown', passwordRequired);
