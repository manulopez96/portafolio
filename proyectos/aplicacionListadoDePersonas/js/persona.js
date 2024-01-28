console.log('Clase de personas');

class Persona{

    constructor(nombre, apellido/*, correo*/){
        this._nombre = nombre;
        this._apellido = apellido;
        // this._correo = correo;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
}