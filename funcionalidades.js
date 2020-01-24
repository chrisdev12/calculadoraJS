//Escribir números por pantalla
var ejecucion = []; //Mostrar la operación que se está haciendo
var numeros = document.querySelector("#first"); //Texto que se muestra en pantalla
var operacion = document.querySelector("#operacion");
var total = document.querySelector("#showAll");
var execute = document.querySelector("#execute");



var infoMostrar = [];

const showAll = (operacionIngresando) => {
    
    infoMostrar.push(operacionIngresando);
    total.textContent = infoMostrar.join(' ');
    
}

const borrarNumeros = () => {
    numeros.textContent = '0';
}



//Agregar números y msotrarlos por pantalla
var valoresIngresando = [] //Ir guardando los valores puestos;

const numerosPantalla = async (event) => {
    
    var valores = await guardarValor(event);
    valoresIngresando.push(valores);
      
    numeros.textContent = valoresIngresando.join('');
}

const guardarValor = (event) => {
      
    var num = ""; //Lista de los números o valores a operar
    num = event.target.innerText;
    return num
}

//------------------------------------------------------------------


var valoresAOperar = []; //Guardar los valores en un array diferente para poder borrar en pantalla

const operadorPantalla = async (event) => {
    
    // Guardar valor en array, mostrarlo en segunda pantalla, y borrar para colocar nuevo valor.
    
    valoresAOperar.push(valoresIngresando.join(''));
    console.log(valoresAOperar)
    showAll(valoresIngresando.join(''))
    valoresIngresando = [] //limpia la lista para nuevos valores
    borrarNumeros() 
    
    //-----------------------------------
    
    
    //Mostrar operador (+,-,*,/) en pantalla
    let operador = await guardarOperador(event);
    showAll(operador) 
    operacion.textContent = operador;
}


var accionOperacion = []
const guardarOperador = (event) => {  //Operadores establecidos
    var operandos = ""  
    operandos = event.target.innerText;
    accionOperacion.push(operandos);
    
    return operandos
}



//Evento agregar números mediante botones
var valores = document.querySelectorAll(".number");

valores.forEach(element => {
    element.addEventListener('click', numerosPantalla)
});

//Evento agregar operadores mediante botoness

var operadores = document.querySelectorAll(".operador");

operadores.forEach(element => {
    element.addEventListener('click', operadorPantalla)
});


//Ejecutar operación y mostrar resultado por pantalla


const resultado = () => {
    
    valoresAOperar.push(valoresIngresando.join(''));
    showAll(valoresIngresando.join(''))
    
    
    let funcion = accionOperacion; //Simbolo de operacion
    var i = 0;
    var result = 0;
    
        
        if (funcion[0] === '/') {
        result += parseInt(valoresAOperar[0]) / parseInt(valoresAOperar[1]); 
    } else if (funcion[0] === '*') {
        result += parseInt(valoresAOperar[0]) * parseInt(valoresAOperar[1]);
    } else if (funcion[0] === '+') {
        result += parseInt(valoresAOperar[0]) + parseInt(valoresAOperar[1]);
    } else if (funcion[0] === '-') {
        result += parseInt(valoresAOperar[0]) - parseInt(valoresAOperar[1]);
    } else {
        result = "No fue seleccionada nignuna operacion";
    }
    
     numeros.textContent = `El resultado es: ${result}`;  
}  

execute.addEventListener('click', resultado);




//Reinicar todo

var reset = document.querySelector("#reset");


const limpiarConsola = () => {

    borrarNumeros()
    total.textContent = 'Esperando nueva operación'
    operacion.textContent = 'Operación'
    valoresAOperar = [];
    accionOperacion = [];
    valoresIngresando = [];
    infoMostrar = [];
}

reset.addEventListener('click', limpiarConsola);