const ingresos = [
    new Ingreso('Sueldo', 2100.00),
    new Ingreso('venta coche', 1150.00),
];

const egresos = [
    new Egreso('Alquiler', 900.00),
    new Egreso('Ropa', 190.00)
];

let cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

let totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos = () => {
    let totalEgreso = 0;
    for (let egreso of egresos){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

let cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

const formatoMoneda = (valor) => {
    return valor.toLocaleString('en-US',{style:'currency', currency:'USD', minimumFractionDigits:2});
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('en-US',{style:'percent', minimumFractionDigits:2});
}

const cargarIngresos = () => {
    let ingresosHTML = '';
    for (let ingreso of ingresos){
        ingresosHTML += crearIngresosHTML(ingreso);
    }
    document.getElementById('listaIngresos').innerHTML = ingresosHTML;
}

const crearIngresosHTML = (ingreso) => {
    let ingresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elementoDescripcion">${ingreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elementoValor">+ ${formatoMoneda(ingreso.valor)}</div>
                <div class="elementoEliminar">
                    <button class="elementoEliminar--btn">
                        <ion-icon name="trash-outline"
                        onclick='eliminarIngreso(${ingreso.id})'></ion-icon>                                               
                    </button>
                </div>
            </div>
        </div>
    `;
    console.log(ingresoHTML);
    return ingresoHTML;
}

const eliminarIngreso = (id) => {
    let indiceEliminar = ingresos.findIndex( ingreso => {ingreso.id === id});
    ingresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarIngresos();

}

const cargarEgresos = () => {
    let egresosHTML = '';
    for (let Egreso of egresos){
        egresosHTML += crearEgresosHTML(Egreso);
    }
    document.getElementById('listaEgresos').innerHTML = egresosHTML;
}

const crearEgresosHTML = (egreso) => {
    let egresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elementoDescripcion">${egreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elementoValor">+ ${formatoMoneda(egreso.valor)}</div>
                <div class="elementoPorcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
                <div class="elementoEliminar">
                    <button class="elementoEliminar--btn">
                        <ion-icon name="trash-outline"
                        onclick = 'eliminarEgreso(${egreso.id})'></ion-icon>                                               
                    </button>
                </div>
            </div>
        </div>
    `;
    console.log(egresoHTML);
    return egresoHTML;
}

const eliminarEgreso = (id) => {
    let indiceEliminar = egresos.findIndex( egreso => {egreso.id === id});
    egresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarEgresos();

}

let agregarDato = () => {
    let forma = document.forms['forma'];
    let tipo = forma['tipo'];
    let descripcion = forma['descripcion'];
    let valor = forma['valor'];
    if(descripcion.value !== '' && valor.value !== ''){
        if(tipo.value === 'ingreso'){
            ingresos.push(new Ingreso(descripcion.value, +(valor.value)));// + lo hace numerico
            cargarCabecero();
            cargarIngresos();
        }
        else{
            egresos.push(new Egreso(descripcion.value, +(valor.value)));// + lo hace numerico
            cargarCabecero();
            cargarEgresos();
        }
    }

}