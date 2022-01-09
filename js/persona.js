class Persona{

    constructor(nombre, apellido){
        this.nombre_ = nombre;
        this.apellido_ = apellido;
    }

    get nombre(){
        return this.nombre_;
    }

    get apellido(){
        return this.apellido_;
    }

    set nombre(nombre){
        this.nombre_ = nombre;
    }

    set apellido(apellido){
        this.apellido_ = apellido;
    }
}