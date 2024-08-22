'use strict';

function everyNumber(parametro, numeroMaximo, duration ){
    let nodoNumero = document.querySelector( parametro );
    let count = 0;
    let timin;
    const totalDuration = duration; 
    timin = totalDuration / numeroMaximo;
    
    let ref_timeout = setInterval( function(){
        // Se ejecuta transcurrido X msegundos
        // Sólo se ejecuta una vez
        count++;
        console.log( count );
        if(count < numeroMaximo){  
            nodoNumero.innerHTML = count;
        }else{
            clearInterval(ref_timeout);   
        }
    
    } , timin );// mseg.

}
// everyNumber('#numeroUno', 56, 60);
// everyNumber('#numeroDos', 35, 100);
// everyNumber('#numeroTres', 33, 100);
// everyNumber('#numeroCuatro', 69, 46);

everyNumber('#numeroUno', 56, 2000);
everyNumber('#numeroDos', 35, 2000);
everyNumber('#numeroTres', 33, 2000);
everyNumber('#numeroCuatro', 69, 2000);

