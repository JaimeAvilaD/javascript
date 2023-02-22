console.log("++++++++++++++++++++++++++++++++++++++");
console.log("SISTEMA PARA CAPTURA DE CALIFICACIONES");
console.log("++++++++++++++++++++++++++++++++++++++");

var nombre = prompt("Escriba el nombre del alumno: ");
console.log("*Alumno dentro de sistema*\n");

console.log("MATERIAS:");
console.log("1.Español");
console.log("2.Matematicas");
console.log("3.Ciencias Naturales\n");

do{
    var materia = prompt("Seleccione la materia que desee ingresar calificación: ");
    console.log("\n ");
    if(materia==1){
        var califEsp = prompt("Ingrese la calificación de la materia ESPAÑOL: ");
        if(califEsp>6 && califEsp<=10){
        console.log("¡Calificación capturada Exitosamente! \n");
        console.log("¿Desea ingresar otra calificación?");
            var continuar = prompt("Selecione S para SI o N para NO: ");
            if(continuar=="S" || continuar=="s"){
            
            }else if(continuar=="N" || continuar=="n"){
                console.log("Cerrando sesión. Hasta pronto.");
                break;
            }else{
                console.log("Opción no valida.");
                break;
            }  
        }else{
            console.log("La calificación esta fuera de rango.");
            break;
        }
          
            
    }else if(materia==2){
        var califMat = prompt("Ingrese la calificación de la materia MATEMATICAS: ");
        if(califMat>6 && califMat<=10){
        console.log("¡Calificación capturada Exitosamente! \n");
        console.log("¿Desea ingresar otra calificación?");
            var continuar = prompt("Selecione S para SI o N para NO: ");
            if(continuar=="S" || continuar=="s"){
            
            }else if(continuar=="N" || continuar=="n"){
                console.log("Cerrando sesión. Hasta pronto.");
                break;
            }else{
                console.log("Opción no valida.");
                break;
            }  
        }else{
            console.log("La calificación esta fuera de rango.");
            break;
        }
    }else if(materia==3){
        var califCn = prompt("Ingrese la calificación de la materia CIENCIAS NATURALES: ");
        if(califCn>6 && califCn<=10){
        console.log("¡Calificación capturada Exitosamente! \n");
        console.log("¿Desea ingresar otra calificación?");
            var continuar = prompt("Selecione S para SI o N para NO: ");
            if(continuar=="S" || continuar=="s"){
            
            }else if(continuar=="N" || continuar=="n"){
                console.log("Cerrando sesión. Hasta pronto.");
                break;
            }else{
                console.log("Opción no valida.");
                break;
            }  
        }else{
            console.log("La calificación esta fuera de rango.");
            break;
        }  
    }else{
        console.log("___________________________________________________________________");
        console.log("ALERTA: La materia seleccionada no es correcta. Intente nuevamente");
        console.log("___________________________________________________________________");
    }

}while(materia>0 && materia<=3);