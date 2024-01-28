console.log('Aplicacion generar numero aleatorio');

function randomIntegerTest(menor, mayor){
    let rango = mayor - menor +1;
    return Math.floor(Math.random() * rango) + menor;
}

console.log(randomIntegerTest(1, 150));

function randomInteger(){

    const menor = parseInt(document.getElementById('desde').value);   
    const mayor = parseInt(document.getElementById('hasta').value);   
    console.log(menor, mayor);
    
    let aux = 0;

    if(mayor > 0){
        if(mayor > menor){
            console.log('hasta meyor a cero');
            let rango = mayor - menor + 1;
            aux = Math.floor(Math.random() * rango) + menor;
            console.log(`resultado: ${aux}`);

        }
        else{
            aux = 'El valor superior debe ser mayor al inferior';
        }
    }
    else{
        aux = 'El valor superior debe ser mayor a 0';
    }
    document.getElementById('resultado').innerHTML = `${aux}`;   
}