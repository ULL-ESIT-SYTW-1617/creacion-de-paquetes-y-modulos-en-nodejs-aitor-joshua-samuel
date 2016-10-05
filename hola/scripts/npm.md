#NPM

NPM (node package manager) es el gestor de paquetes javascript de NODE.JS por excelencia. Gracias a él, tenemos casi cualquier librería disponible a tan solo una linea de comando de distancia, permitiéndonos utilizarla en cuestión de segundos.

NPM utiliza el archivo package.json para almacenar todos los datos relevantes a nuestra aplicación. Así que lo primero que tenemos que hacer es iniciar con el comando:

```she
npm init
```

Los comandos mas utilizados son:

```she
npm search [nombreDelPaquete]
```
La primera vez que realicemos la búsqueda, demorará en retornar los resultados, ya que primero descarga un indice de todos los paquetes disponibles. Luego de esto mostrara un listado con todas las coincidencias y su respectiva descripción.

```she
npm install [nombreDelPaquete]
```
Sin dudas, es el comando mas utilizado, ya que nos permite descargar e instalar la dependencia especificada.

Se puede utilizar 

```she
npm install nombreDelPaquete@version  
```
en “version” irá la version especificada, de lo contrario, si no se especifica, se instalará la ultima disponible.

Nota: si se desea que además de instalar el paquete, también se propague en el archivo package.json de debe colocar al final del comando --save para que guarde dicha dependencia o --save-dev para dependencias solo necesarias para desarrollar.

```she
npm install
```
Si no se especifica un paquete, se entiende que se desea verificar/instalar todas las dependencias dentro del archivo package.json. Esto es habitual, cuando se descargan proyectos o aplicaciones de github, ya que las dependencias deben ser instaladas luego de descargar el proyecto (por razones de tamaño).

```she
npm install -g [nombreDelPaquete]
```

Con la opción -g o --global se le está indicando a npm que debe instalar el paquete de manera Global, esto quiere decir que se va a poder utilizar desde cualquier directorio.

```she
npm uninstall [nombreDelPaquete]
```
De esta manera eliminaremos el paquete especificado dentro de nuestro proyecto. Aquí también aplica la opción -g que lo hará de manera global.