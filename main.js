// variable en donde se almacena los dos numeros de la suma

var num1, num2;

// variabñe para guardar el resultado de la suma

var respuesta;

// variable para cargar la opcion correcta

var indiceOpCorrecta;

//elementos que se van a manipulas de la pagina

txt_suma = document.getElementById("suma");
op1 = document.getElementById("op1");
op2 = document.getElementById("op2");
op3 = document.getElementById("op3");
txt_msj = document.getElementById("msj");
txt_resultado = document.getElementById("resultado");

function comenzar() {
    //cada vez que se inicia se limpia el campo
    txt_resultado.innerHTML = "?";
    txt_msj.innerHTML = "";

    //se genera la suma aleatoria entre 0 y 99
    num1 = Math.round(Math.random()*99);
    num2 = Math.round(Math.random()*99);
    resultado = num1 + num2;

    //aca se asigna la suma para que sea visible
    txt_suma.innerHTML = num1 + "+" + num2 + "=";

    //genero un numero entre 0 y 3 para colocar la opcion correcta
    indiceOpCorrecta = Math.round(Math.random()*3);
    if(indiceOpCorrecta==0){ // se coloca la opcion correcta en la primera posición
        op1.innerHTML = resultado;
        //al resto se les da números cercanos a la respuesta correcta
        op2.innerHTML = resultado +4;
        op3.innerHTML = resultado -5;
    }
        if(indiceOpCorrecta==1){ // se coloca la opcion correcta en la segunda posición
            op2.innerHTML = resultado;
            //al resto se les da números cercanos a la respuesta correcta
            op1.innerHTML = resultado +3;
            op3.innerHTML = resultado -1;
        }

        if(indiceOpCorrecta==2){ // se coloca la opcion correcta en la tercera posición
            op3.innerHTML = resultado;
            //al resto se les da números cercanos a la respuesta correcta
            op1.innerHTML = resultado +7;
            op2.innerHTML = resultado -3;
        }   

}

// función para chequera la respuesta del usuario

function controlarResultado(opcionElegida) {
    txt_resultado.innerHTML = opcionElegida.innerHTML;

    //se controla si es correcto el resultado

    if(resultado == opcionElegida.innerHTML) {
        txt_msj.innerHTML = "Es Correcto!!";
        txt_msj.style.color = "black";
        //se espera unos segundos y se vuelve a llamar a la función
        setTimeout(comenzar, 2000);
    }else{
        txt_msj.innerHTML = "Volve a intentarlo!!";
        txt_msj.style.color = "red";

        // esperamos dos segundos y se vuelve a cargar otra operacion
        setTimeout(limpiar, 2000);
    }

}

comenzar();