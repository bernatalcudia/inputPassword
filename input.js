const inputBox = document.getElementById('input-box');
const h3 = document.createElement('h3');

function passwordRequired() {
    const lengthPassword = inputBox.value.length
    if (lengthPassword > 10) {
        h3.style.color = 'green';
        h3.innerText = 'The password is save'
    } if (lengthPassword > 8 && lengthPassword == 10) {
        h3.style.color = 'yellow';
        h3.innerText = 'The password is not save'
    } if (lengthPassword < 8) {
        h3.style.color = 'red';
        h3.innerText = 'The password is to short'
    }

    document.body.appendChild(h3)
}

inputBox.addEventListener('keydown', passwordRequired);
