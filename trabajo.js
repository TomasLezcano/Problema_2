var registro = prompt ("Nombre de usuario","")
let Usuario = registro;
console.log(Usuario)

/*Primer Paso*/

var Numero_de_caracteres = 2
if(4< Usuario.length){
    Numero_de_caracteres--
}

if(25> Usuario.length){
    Numero_de_caracteres--
}

console.log(Numero_de_caracteres)

/*Seegundo Paso*/

var Primera_Letra = 11
if( "_" != Usuario.charAt(0)){
    Primera_Letra-- 
}
if( "1"!= Usuario.charAt(0)){
    Primera_Letra--
}
if("2"!= Usuario.charAt(0)){
    Primera_Letra--
}
if("3"!= Usuario.charAt(0)){
    Primera_Letra--
}
if("4"!= Usuario.charAt(0)){
    Primera_Letra--
}
if("5"!= Usuario.charAt(0)){
    Primera_Letra--
}
if("6"!= Usuario.charAt(0)){
    Primera_Letra--
}
if("7"!= Usuario.charAt(0)){
    Primera_Letra--
}
if("8"!= Usuario.charAt(0)){
    Primera_Letra--
}
if("9"!= Usuario.charAt(0)){
    Primera_Letra--
}
if("0"!= Usuario.charAt(0)){
    Primera_Letra--
}


console.log(Primera_Letra) 
/*Seegundo Paso*/

/*Tercer Paso

var validas = 0
var contador = Usuario.length
var opciones = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "_"]

for (var i = 0; i <= contador;){
    var n = 0
    if (Usuario.charAt(contador) == opciones[n]){
        contador--
    }else n++
    if(n == 38){
        contador == 0
        validas ++
    }
}

console.log(validas)*/










