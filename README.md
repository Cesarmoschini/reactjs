## INICIALIZACIÓN DEL PROYECTO
En Git Bash, seleccionamos la carpeta app_capsulas a través del comando 'cd app_capsulas'
Luego, ponemos npm start y esperamos al que el web compile exitosamente

## DETALLE DE ROUTES

La route [http://localhost:3000/] muestra la página principal de la web con todos los productos

La route [http://localhost:3000/category/:categoryId] muestra el ItemListContainer filtrado por categoría (Clásicos, Suaves e Intensos)

La route [http://localhost:3000/detail/:productId] muestra el ItemDetailContainer filtrado por cápsulas

Cualquier otra route, muestra el texto '404 NOT FOUND'

## FUNCIONAMIENTO
