# ShortcutApp


ShortcutApp es una aplicación bastante sencilla que me permite acortar urls en urls más pequeñas.

El funcionamiento de la misma es bastante práctico. En parte porque no tuve mucho tiempo de refactorizar, y también porque considero que no es necesario hacer un sistema super elaborado para una idea simple

### Ideas simples === Soluciones simples

## Arquitectura del sistema


- src:
-   controllers: Contiene la lógica de la aplicación que va a ser ejecutada en routes    
-   models: Contiene la configuración de Moongose, donde esta el esquema de Url
-   routes: Las rutas que se van a ejecutar cuando usemos la aplicación
-   views: La interfaz de la App

## Framework

Estoy usando Express, es de los más usados en el mercado. Cualquier persona que trabaje con Node conoce dicho Framework.

## Compilador

Estoy usando Nodemon, que me permite realizar cambios mientras estoy corriendo la aplicación. Personalmente encuentro esta herramienta muy útil

## Interfaz

-¿Una interfaz web en un proyecto BackEnd? Estas despedido 
-Para despedirme primero tiene que contratarme <3

Si bien el reto especificaba que no necesito una interfaz gráfica, pienso que un proyecto no puede no tener una interfaz para que el cliente vea lo que hicimos

Pero, ¿Por que no usaste Swagger o algo similar?

Pensé en usar Swagger, pero conocía la existencia de un paquete que tenía muchas ganas de probar, que se llama **ejs**

¿Ajá, y que es Ejs?

ejs (Embedded JavaScript Templating) es un template que me permite poner HTML en Javascript

Podrías haber creado un proyecto en React o Angular

Si, pero no es el objetivo que buscaba, además no me daba el tiempo

### Ideas simples === Soluciones simples

## Base de datos

Creé una BD en Mongo Db, que esta subida a un Cluster en AWS. Le di permiso para que cualquier IP pueda manipularla, la idea de esto es que cualquier persona la pueda usar

Como ODM opté por Mongoose. Es de los más utilizados en el mercado, si en un futuro se suma otra persona a trabajar en el repo, es más probable que conozca Mongoose a que un ODM marca pepito.

## Rutas

Podría haber hecho todo sin ellas (solo tengo 3 url), pero que algo sea simple no significa que tenga que tener una base arquitectónica decente

## Controladores

En primer instancia iba a ser el pasamanos entre las rutas y una capa de servicios, pero no me dió el tiempo para crear la capa de servicios.
Así que la lógica esta en controladores.

## Ejecución
- npm install
- npm run devStart


## Bibliografía

- [EJS](https://ejs.co/)
- [Mongoose](https://mongoosejs.com/docs/)
- [Express](http://expressjs.com/)
- [Nodemon](https://www.npmjs.com/package/nodemon)


Juan, estuvo muy bueno el challange. Me divertí haciendolo, y te quiero agradecer por ello

