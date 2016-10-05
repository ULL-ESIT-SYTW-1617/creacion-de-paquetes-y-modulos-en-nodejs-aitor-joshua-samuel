#Despliege GitBook 

Para desplegar Gitbook haremos uso de los siguientes comandos.

```
$ npm install -g gitbook-cli --save
```

```she
$ gitbook init
``` 
Hay que crear ficheros como SUMMMARY.md que es el indice de nuestro Gitbook y ademas el fichero README.md

Para crear los html usamos el siguiente comando

```she
$ gitbook build
``` 

Luego para testear que todo funciona correctamente hacemos un 


```she
$ gitbook serve
``` 