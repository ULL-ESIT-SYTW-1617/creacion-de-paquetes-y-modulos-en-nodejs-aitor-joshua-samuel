##Scripts

#Contributors
Este script se encarga de generar el contenido del fichero MAINTAINERS desde los commit de git.

#Deploy gitbook

En primer lugar, en la variable REPO guardaremos la ruta que nos dará **node -e "console.log(require('./package.json').repository.url);"**

El segundo caso en este script hace un proceso similar al anterior lo que esta vez toma la variable REPO a la hora de ejecutar el comando y lo publicará.

#Deploy wiki#

En este script guardaremos en REPO el link de nuestro repositorio el cual usaremos en los comandos de git siguientes.

#Generate Gitbook#

Este script se encarga de montar los MD de ./txt en ./gh-pages

#Generate Wiki#

Este script toma el nombre del directorio donde se va a crear un fichero *generate-wiki.js*

El fichero generate-wiki.js hace un despliegue del libro.

*Losh, update-losh y version*

Estos tres script se encargan de mostrar por pantalla datos actuales.
