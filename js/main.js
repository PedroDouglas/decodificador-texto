const inputTexto = document.querySelector(".input-texto");
const outputTexto = document.querySelector(".output-texto");

function botaoEncriptar() {
    const textoEncriptado= encriptar(inputTexto.value);
    outputTexto.value = textoEncriptado;
    outputTexto.style.backgroundImage="none";

}
function botaoDescriptar(){
	outputTexto.style.backgroundImage="none";

    if(outputTexto.length>0){
        const textoEncriptado = descriptar(outputTexto.value);
        outputTexto.value = textoEncriptado;
    }else{
        textoEncriptado = descriptar(inputTexto.value);
        outputTexto.value = textoEncriptado;

        
    }
}

function botaoCopiar(){
   const textoCopiado = document.querySelector(".output-texto");
   console.log(textoCopiado);
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("O texto copiado com sucesso");   

}

function encriptar(stringEncriptada) {
    let matrizAleracao =[["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];

    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizAleracao.length; i++) {
        if(stringEncriptada.includes(matrizAleracao[i][0]));
        stringEncriptada = stringEncriptada.replaceAll(matrizAleracao[i][0],matrizAleracao[i][1]);

    }

    return stringEncriptada;
}

function descriptar(stringEncriptada) {
    let matrizAleracao =[["ai","a"],["enter","e"],["imes","i",],["ober","o"],["ufat","u"]];

    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizAleracao.length; i++) {
        if(stringEncriptada.includes(matrizAleracao[i][0]));
        stringEncriptada = stringEncriptada.replaceAll(matrizAleracao[i][0],matrizAleracao[i][1]);
    }

    return stringEncriptada;
}