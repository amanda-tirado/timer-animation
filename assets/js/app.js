'use strict';

function everyNumber(parametro, numeroMaximo, timin ){
    let nodoNumero = document.querySelector( parametro );
    let count = 0;
    
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

everyNumber('#numeroUno', 56, (3000 / 56));
everyNumber('#numeroDos', 35, (3000 / 35));
everyNumber('#numeroTres', 33, (3000 / 33));
everyNumber('#numeroCuatro', 69, (3000 / 69));

