# todolist-vanilla-js

_En el mundo de la programación hay ejercicios que se consideran los mejores para que se expongan en nuestro portfolio y de esta manera demostrar nuestros conocimientos. El To Do List es uno de los preferidos, así que lo vamos a realizar el día de hoy._

_Vamos a iniciar con clonar la plantilla que te proporciona PDTC para este fin, ya que queremos que te concentres en la lógica y no en la estética:_

```
git clone [link-de-este-repositorio]
```

### Instrucciones 📋

* **Declaraciones:** Vamos a realizar todas las declaraciones que necesitamos para nuestro To Do List.

    - Declará un array vacío que se llame listaDeTareas.
    - Declará 3 variables inputTarea, inputPrioridad y ul. Obtené los elementos del DOM para cada variable creada.
    - Declará un class que se llame Tarea y que tenga como propiedad nombre y prioridad y un método agregarTarea, que tenga como parámetro un array. 

**Nota:** El método agregarTarea() debe hacer push del array recibido como parámetro y pushear un nuevo objeto tarea. 

* **Mostrando la lista de tareas:** Creá un función mostrarLista() que limpie lo que se encuentre dentro del elemento ul y que luego recorra el array listaDeTareas.

* **Creando la lista de tareas:** Creá una función todoList() que instancie un nuevo objeto tarea que tenga como valores los datos que se ingresan en los campos tarea y prioridad. También dentro de la misma función todoList, agregá la nueva tarea llamando al método agregarTarea. Una vez agregada la nueva tarea invoca la función mostrarList para que se vea la lista de tareas en el DOM.

* **Eliminando tareas:** Creá la función eliminar() esta función debe eliminar del array listaDetareas el ítem donde se haya hecho click.
