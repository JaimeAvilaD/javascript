console.log("***************************");
console.log("BIENVENIDO AL BANCO PILARES");
console.log("***************************");


console.log("1. Registrar nuevo usuario");
console.log("2. Consultar los usuarios registrados");


//var usuarios = Array();

do{
    var op = prompt("Seleccione la opción que desea realizar");
    if(op==1){
        var nombre = prompt("Ingrese su nombre completo");
        var contraseña = prompt("Ingrese una contraeña");
        var alcaldia = prompt("Ingrese la alcaldia donde vive");
    }else if(op==2){
        for(var i=0; i<3; i++);
    }else{

}

}while(op>0 && op<3);


/*
var info = Array();

for(x=0; x<4; x++){
info[x] = prompt("Ingresa los valores");

console.log(info);
}
*/