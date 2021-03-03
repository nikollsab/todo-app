
export class Todo {

    constructor( tarea ){

        this.tarea = tarea;

        this.id = new Date().getTime(); //hira, minuto, milisegundo
        this.completado = false;
        this.creado = new Date();
    }
}