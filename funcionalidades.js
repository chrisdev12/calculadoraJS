//Escribir números por pantalla
var ejecucion = []; //Mostrar la operación que se está haciendo
var numeros = document.querySelector("#first"); //Texto que se muestra en pantalla
var operacion = document.querySelector("#operacion");
var total = document.querySelector("#showAll");
var execute = document.querySelector("#execute");




//Agregar y mostrar números/operadores en pantalla
var valoresIngresando = [] //Ir guardando los valores puestos;

const numerosPantalla = (event) => {
    
    let valores = event.target.innerText;
    valoresIngresando.push(valores);
      
    numeros.textContent = valoresIngresando.join('');
    showAll(valores);
}


//------------------------------------------------------------------


// Mostrar las operaciones realizandose

var valoresMostrandose = []; //Solo el valor que se está escribiendo | Agnóstico a otras operaciones o valores

const showAll = (datos) => {
    
    valoresMostrandose.push(datos);     
    total.textContent = valoresMostrandose.join('');
    
}


const borrarNumeros = () => {
    numeros.textContent = '0';
    valoresIngresando = [] 
}

// ----------------------------------------------------------------------


// Comportamiento de cuando se presiona una operación.number
// "Cuando se presiona el operando (-,+,X o %) es cuando se admite que el primer valor es el que se desea operar con otros".


var operacionFinal = [] //Aqui quedará un array que representa la operación final a hacerse

const establecerValor = (valoresRegistrados,operador) => {  //Mostrar operador (+,-,*,/) en pantalla
    
    // var lastIndex = valoresRegistrados.length - 1;
    operacionFinal.push(valoresRegistrados.join(''));
    operacionFinal.push(operador);   
}

const operadorPantalla = (event) => { //guardar un valor de más de dos digitos cuando se presiona un signo de operación
     
    let operandos = event.target.innerText;
    operacion.textContent = operandos;
    establecerValor(valoresIngresando, operandos); 
    showAll(operandos);
    borrarNumeros(); 
}
//-------------------------------------------------------------------------
     
//Ejecutar operación y mostrar resultado por pantalla


const resultado = () => {
    operacionFinal.push(numeros.innerText);
    
    
    var resultadoFinal = '';
        
    operacionFinal.forEach(element => { 
        resultadoFinal += element
    });
    
    resultadoFinal = eval(resultadoFinal); 
    
    numeros.textContent = `El resultado es: ${resultadoFinal}`;
}    



execute.addEventListener('click', resultado);

//-------------------------------------------------------------------------------


//Reinicar todo

var reset = document.querySelector("#reset");


const limpiarConsola = () => {

    borrarNumeros()
    total.textContent = 'Esperando nueva operación'
    operacion.textContent = 'Operación'
    valoresAOperar = [];
    accionOperacion = [];
    valoresIngresando = [];
    valoresMostrandose = [];
    operacionFinal = [];
}

reset.addEventListener('click', limpiarConsola);



//Eventos agregar números  y operadores mediante botones

var valores = document.querySelectorAll(".number");

valores.forEach(element => {
    element.addEventListener('click', numerosPantalla)
});

//Evento agregar operadores mediante botones

var operadores = document.querySelectorAll(".operador");


operadores.forEach(element => {
    element.addEventListener('click', operadorPantalla)
});


//-----------------------------------------------------------