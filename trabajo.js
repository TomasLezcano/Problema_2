var registro = prompt ("Ingrese su nombre de usuario","")
let Usuario = registro;
console.log(Usuario)

/*Primer Paso*/

var Numero_de_caracteres = 2
if(4<= Usuario.length){
    Numero_de_caracteres--
}else{
    alert ("Tu nombre debe tener al menos 4 digitos")
}

if(25>= Usuario.length){
    Numero_de_caracteres--
}else{alert ("Tu nombre debe tener menos de 26 digitos")}

console.log(Numero_de_caracteres)

/*Seegundo Paso*/

var primera_Letra = 11
if( "_" != Usuario.charAt(0)){
    primera_Letra-- 
}else{alert ("Lo sentimos solo se permiten letras para el primer digito")}
if( "1"!= Usuario.charAt(0)){
    primera_Letra--
}else{alert ("Lo sentimos solo se permiten letras para el primer digito")}
if("2"!= Usuario.charAt(0)){
    primera_Letra--
}else{alert ("Lo sentimos solo se permiten letras para el primer digito")}
if("3"!= Usuario.charAt(0)){
    primera_Letra--
}else{alert ("Lo sentimos solo se permiten letras para el primer digito")}
if("4"!= Usuario.charAt(0)){
    primera_Letra--
}else{alert ("Lo sentimos solo se permiten letras para el primer digito")}
if("5"!= Usuario.charAt(0)){
    primera_Letra--
}else{alert ("Lo sentimos solo se permiten letras para el primer digito")}
if("6"!= Usuario.charAt(0)){
    primera_Letra--
}else{alert ("Lo sentimos solo se permiten letras para el primer digito")}
if("7"!= Usuario.charAt(0)){
    primera_Letra--
}else{alert ("Lo sentimos solo se permiten letras para el primer digito")}
if("8"!= Usuario.charAt(0)){
    primera_Letra--
}else{alert ("Lo sentimos solo se permiten letras para el primer digito")}
if("9"!= Usuario.charAt(0)){
    primera_Letra--
}else{alert ("Lo sentimos solo se permiten letras para el primer digito")}
if("0"!= Usuario.charAt(0)){
    primera_Letra--
}else{alert ("Lo sentimos solo se permiten letras para el primer digito")}


console.log(primera_Letra) 

/*Tercer Paso*/

var validas = 0
var contador = Usuario.length
var validez = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "_"]
var n = 0

/*
for (var i = 0; i < contador-1;){
    if (Usuario.charAt(contador-1) == validez[n]){
        contador--
    }else n++
}


do{
    if (Usuario.charAt(contador - 1) == validez[n]){
        contador--
    }else n++
    if (n>38) {
        validez++
        contador = 0
        alert("Los digitos utilizados no son permitidos")
    }else break
}while(contador-1<0) 

console.log(validas)*/

/* cuarto paso*/

var ultima_letra = 1
var ultima = (Usuario.length)

if(Usuario.charAt(ultima-1) != "_"){
    ultima_letra--
}else{alert("Lo sentimos no se permiten guiones bajo en el ultimo digito")}

console.log (ultima_letra)

/* final*/
 var nombre_usuario = false
 var errores = Numero_de_caracteres + primera_Letra + ultima_letra

 if (Numero_de_caracteres + primera_Letra + ultima_letra == 0){
     nombre_usuario = true
 }else{alert("Nombre rechazado contiene " + errores + " errores")}
console.log (nombre_usuario)




