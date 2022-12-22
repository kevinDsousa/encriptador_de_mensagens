let text = document.getElementById("texto");
let showAside = document.querySelector("#content-aside");
let element = document.createElement('p');
element.setAttribute('id', 'text-cripto');

function criptografar() {
    let textoValor = text.value;

    let textoCriptografado = textoValor
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat')

    showAside.children[0].style.display = "none";
    showAside.children[1].style.display = "none";
    showAside.children[2].style.display = "none";
    element.innerHTML = textoCriptografado;
    showAside.appendChild(element);
    showAside.appendChild(copy);
    copy.style.visible = "visible";

    if (!textoCriptografado) {
        showAside.children[0].style.display = "initial";
        showAside.children[1].style.display = "initial";
        showAside.removeChild(element);
        showAside.removeChild(copy);
        copy.style.visibility = 'hidden'; 
    }
}

function descriptografar() {
    let textoValue = texto.value;

    let textoDescriptografado = textoValue
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u')

    showAside.children[0].style.display = "none";
    showAside.children[1].style.display = "none";
    element.innerHTML = textoDescriptografado;
    showAside.appendChild(element);
    showAside.appendChild(copy);
    copy.style.visibility = 'visible';

    if (!textoDescriptografado) {
        showAside.children[0].style.display = "initial";
        showAside.children[1].style.display = "initial";
        showAside.removeChild(element);
        showAside.removeChild(copy);
        copy.style.visibility = 'hidden'; 
    }
}

