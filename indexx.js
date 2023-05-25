let encriptar = document.getElementById("btn-encriptar");
let desencriptar = document.getElementById("btn-desencriptar");
let copiar = document.getElementById("btn-copiar");

encriptar.addEventListener("click",function(){
    let txt =(document.getElementById("texto").value);
    let img = document.getElementById("imagen");
    let txtencriptado = txt
    .replace(/a/gi,"bcn")
    .replace(/e/gi,"bynn")
    .replace(/i/gi,"bdn")
    .replace(/o/gi,"bfn")
    .replace(/u/gi,"byn")
    if (txt.length !== 0){
        img.style.display = "none";
        document.getElementById("btn-copiar").style.display = "block";
        document.getElementById("texto3").style.display = "block";
        document.getElementById("texto3").textContent = txtencriptado;
        document.getElementById("texto1").textContent = "";
        document.getElementById("texto2").textContent = "";
        document.getElementById("texto").value = "";
    }
    else{
        alert("Ingrese un texto")
    }
});
desencriptar.addEventListener("click",function(){
    let txt = document.getElementById("texto").value;
    let img = document.getElementById("imagen");
    let txtdesencriptado = txt
    .replace(/bcn/gi,"a")
    .replace(/bynn/gi,"e")
    .replace(/bdn/gi,"i")
    .replace(/bfn/gi,"o")
    .replace(/byn/gi,"u")
    if (txt.length !== 0){
        img.style.display = "none";
        document.getElementById("texto3").textContent = txtdesencriptado;
        document.getElementById("texto3").style.display = "block";
        document.getElementById("btn-copiar").style.display = "block";
        document.getElementById("texto1").textContent = "";
        document.getElementById("texto2").textContent = "";
        document.getElementById("texto").value = "";
    }
    else{
        alert("Ingrese un texto")
    }
});
copiar.addEventListener("click",function(){
    let txt =  document.getElementById("texto3").textContent;
    navigator.clipboard.writeText(txt)
    alert("Texto copiado correctamente");
})