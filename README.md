# cvReact V.1.0.0.0
Open Source Project to develop a CV in React

## Primera versión de un Proyecto Simple, para crear un CV online de código libre !

## Tecnologías utilizadas
* React (Hooks)
* Material UI
* Tailwind CSS

### Consideraciones (Para utilizar sin modificar código ni hacer un nuevo build):

* Para utilizar el CV online solo es necesario copiar los archivos que se encuentran en la carpeta "cv/build" en algún hosting y/o servidor (Previamente editar la información mencionada a continuación).

* Para personalizarlo es necesario editar el archivo "cv/build/cv.json" con la información propia.

  * - Tener en cuenta que el cv admite idioma español e inglés:

      <img width="66" alt="image" src="https://user-images.githubusercontent.com/3057950/179012976-d512be1e-0c73-4a80-bdc0-b67ad75cb28f.png">

      Por lo tanto el archivo **cv.json** consta con dos secciones para los idiomas: 
      	 "ES": {...},
        "EN": {...}
        
      **Editar ambas secciones con la información personal en cada uno de los idiomas.**
      

* Reemplazar en la carpeta "cv/build/img" el archivo photo.jpg con una foto propia (IMPORTANTE: colocarle a la foto el nombre "photo.jpg").

* La sección **Tecnologías Destacadas/Featured Technologies** muestra las tecnologías destacadas a partir de imagenes, para editarla:
  * Se debe incluír la imagen de la misma en la carpeta cv/build/img  EJ: **jquery.png** y agregar el nombre en "featuredTechnologies": ["jquery"]
  * Se puede ocultar esta sección solo con dejar la sección sin nungún dato EJ: **"featuredTechnologies": []**
  
### Consideraciones (Para utilizar realizando modificaciones en el código del proyecto):

* Copiar el proyecto del repositorio
* Realizar un *npm install* en la carpeta raíz del proyecto
* Se deben realizar las mismas modificaciones que en el apartado anterior teniendo en cuenta el cambio de ruta de los archivos:
  * Para personalizar la información -> **"cv/public/cv.json"** en lugar de "cv/build/cv.json"
  * Para personalizar la foto de perfil, incluír el archivo "photo.jpg" en -> **"cv/public/img"** en lugar de "cv/build/img"
  * Para perzonalizar las tecnologías destacadas, incluír las imagenes en -> **"cv/public/img"** en lugar de "cv/build/img"
  
* Modificar el código con lo que sea necesario
* Realizar un *npm run build* en la carpeta raíz del proyecto
* Copiar los que se generaron en la carpeta "cv/build" en algún hosting y/o servidor.

## Para ver el resultado del proyecto: http://cv.cimadesarrollo.com/
