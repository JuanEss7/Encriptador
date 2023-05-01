let encriptar = document.getElementById("btn-encriptar");
let desencriptar = document.getElementById("btn-desencriptar");

encriptar.addEventListener("click",function(){
    let txt = document.getElementById("texto").value;
    let img = document.getElementById("imagen");
    let txtencriptado = txt
    .replace(/a/gi,"bcn")
    .replace(/e/gi,"bynn")
    .replace(/i/gi,"bdn")
    .replace(/o/gi,"bfn")
    .replace(/u/gi,"byn")
    if (txt.lenght !== 0){
        document.getElementById("texto").value = txtencriptado;
        img.setAttribute("src", "hecho.png");
        document.getElementById("texto1").textContent = "Texto encriptado con exito";
        alert("Texto encriptado con exito");
    }
    else{
        img.setAttribute("src", "mal.png")
        alert("Ingrese un texto")
    }
});
desencriptar.addEventListener("click",function(){
    let txt = document.getElementById("texto").value;
    let txtdesencriptado = txt
    .replace(/bcn/gi,"a")
    .replace(/bynn/gi,"e")
    .replace(/bdn/gi,"i")
    .replace(/bfn/gi,"o")
    .replace(/byn/gi,"u")
    if (txt.lenght !==0){
        document.getElementById("texto").value = txtdesencriptado;
        document.getElementById("texto1").textContent = "Texto desencriptado con exito";
        alert("Texto desencriptado con exito");
    }
    else{
        alert("Ingrese un texto")
    }
});