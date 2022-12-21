function Write() {
    const display = document.getElementsByClassName("informationDisplay");

    if (texto.value !== '') {
        for (let i = 0; i < display.length; i++) {
            display[i].classList.add("active");
        }
    }
    else {
        for (let i = 0; i < display.length; i++) {
            display[i].classList.remove("active");
        }
    }
}

function Crypt() { console.log("crypt") }

function desCrypt() { console.log("desCript") }
