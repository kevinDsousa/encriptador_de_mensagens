function Write() {
    /*verificar algo sobre contexto para que o site recarregue sempre*/
    const display = document.getElementsByClassName("informationDisplay");    
    let controle = 0;
    while(controle < display.length) {
        display[controle].className = "informationDisplay--active";
    }
}

function Crypt() {console.log("crypt")}

function desCrypt() {console.log("descripta")}
