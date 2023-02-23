console.log("***************************");
console.log("BIENVENIDO AL BANCO PILARES");
console.log("***************************");


console.log("1. Registrar nuevo usuario");
console.log("2. Consultar los usuarios registrados\n");


//var usuarios = Array();

do{
    var op = prompt("\nSeleccione la opción que desea realizar: ");
    console.log("\n");
    
    if(op==1){
        var usuario = [];
        /*const salary = Number(prompt("ingrese el valor del salario del trabajador"));
        salaries.push(salary);*/
        var nombre = prompt("Ingrese su nombre completo: ");
        var genero = prompt("Ingrese su género: ");
        var contraseña = prompt("Ingrese una contraeña(4 caracteres): ");
        var alcaldia = prompt("Ingrese la alcaldia donde vive: ");
        console.log("Usuario registrado Satisfactoriamente\n");
        console.log("Su numero de cuenta es:" + alcaldia.slice(0,2)+genero.slice(0,1)+"A"+1);
        
    }else if(op==2){
        
            
    }else{
        console.log("Sesión Terminada");
}   
console.log("Opción invalida. Intente nuevamente.")
}while(op>0 && op<3);

/*
var info = Array();

for(x=0; x<4; x++){
info[x] = prompt("Ingresa los valores");

console.log(info);
}
*/