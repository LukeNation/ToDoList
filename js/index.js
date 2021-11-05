// colocá las declaraciones acá

let listaTareas = []
let indexMayor = 0
let prioridades = ["Baja", "Media", "Alta"]
let inputTarea = document.getElementById("task")
let inputPrioridad = document.getElementById("prioridad")
let ul = document.getElementById("lista-de-tareas")
let btnAgregar = document.getElementById("agregar")
//declaramos el class Tarea

class Tarea {
    constructor(id, nombre, prioridad) {
        this.id = id
        this.nombre = nombre
        this.prioridad = prioridad
    }

    agregarTarea(array) {
        array.push(this)
    }
}

function mostrarLista() {
    ul.innerHTML = ""
    console.log(listaTareas)
    listaTareasImpresa = listaTareas
    listaTareasImpresa.sort((element1, element2) => {
        return prioridades.indexOf(element2.prioridad) - prioridades.indexOf(element1.prioridad)
    })
    console.log(listaTareasImpresa)
    listaTareasImpresa.forEach(
        element => {
            ul.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center" 
            id="task${element.id}">${element.nombre} - Prioridad: ${element.prioridad} 
            <i class="far fa-times-circle" onclick="eliminar(event)" id="taskI-${element.id}"></i></li>`
        }
    )
}

function todoList() {
    let task = inputTarea.value
    let prioridad = inputPrioridad.value
    if (task != "" && prioridad != "" && prioridad != "Prioridad") {
        let id = indexMayor
        indexMayor++
        let tarea = new Tarea(id, task, prioridad)
        tarea.agregarTarea(listaTareas)
        mostrarLista()
        inputPrioridad.value = ""
        inputTarea.value = ""
    }

}

function eliminar(e) {
    let idEliminado = e.target.id.split("-")[1]
    let idEliminar = listaTareas.findIndex(element => element.id == idEliminado)
    if ((indexMayor - 1) == idEliminado) {
        indexMayor--
    }
    console.log(indexMayor)
    console.log(idEliminado)
    listaTareas.splice(idEliminar, 1);
    mostrarLista()
}

btnAgregar.addEventListener("click", todoList)