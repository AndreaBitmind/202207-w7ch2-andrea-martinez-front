#COMPONENTES
-App
Recibe: Nada
Muestra: Una lista de cards, un botón getAll y dos formularios (uno para get by ID y otro para post&update)
Estado: Nada
Acción del usuario: Cuando presiona el boton getAll obtenga todos los robots

-Card
Recibe: Datos del robot (imagen, nombre, velocidad, resistencia y fecha de creacion)
Muestra: Muestra una card con la foto del robot, sus datos y un botón para eliminar
Estado: Nada // Actualizar los datos mostrados en caso de que se modifiquen
Acción del usuario: Cuando rpesione en el botón de eliminar, que se elimine el robot de la capa de datos

-CardList
Recibe: El array de robots del back?
Muestra: Una lista de cards (tantas cards como robots haya en el array)
Estado: Nada
Acción del usuario: Nada

-Button
Recibe: Una función y un texto
Muestra: Un boton con el texto recibido
Estado: Nada
Acción del usuario: Al clickarlo se ejecuta la funcion recibida
