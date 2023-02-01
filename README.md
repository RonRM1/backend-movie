Geekshubs Academy: FULL STACK DEVELOPER proyectyo realizado por [Ronny Rojas Melendez.](mailto:ronny3030@gmail.com)
## Movies API

Creacion de API rest simple para ejercicio de backend con base de datos local, utilizando Node js, Mongo y Postman.

#

### Configuracion

- Descargar e instalar Node.js.
- Descargar e instalar MongoDB.
- Clonar el repositorio utilizando el siguiente comando:

        git clone url

- Abre una ventana terminal y posicionate dentro de la carpeta raiz del proyecto, luego ejecuta el siguiente comando para instalar las dependencias.

        npm install

- De manera predeterminada la cadena de conexión a la base de datos sera:

        mongodb://localhost:27017/movie

  NOTA: Podrá cambiar este valor en el archivo de configuración **_.env_**, especificamente al asignar un nuevo valor a la variable **_MONGO_URI_**

- Para compilar e iniciar la aplicación ejecute el comando

        npm run dev

  De manera predeterminada, la URL de la aplicación será
  http://localhost:3000

  NOTA: para configurar un puerto diferente establezca un nuevo valor en la variable **_PORT_** que se encuentra dentro del archivo de configuración **_.env_**.

### Comprobación de APIs

- Descargar e instalar [Postman](https://www.postman.com/downloads/?utm_source=postman-home).

## Run

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/14151477-64e8f1ab-3816-4bba-be80-3850dba6777e?action=collection%2Ffork&collection-url=entityId%3D14151477-64e8f1ab-3816-4bba-be80-3850dba6777e%26entityType%3Dcollection%26workspaceId%3Dd94f2695-85ee-4aa5-9330-6bd80dab00e9#?env%5BMy%20Movies%5D=W3sia2V5IjoidXJsIiwidmFsdWUiOiJodHRwOi8vMTI3LjAuMC4xOjMwMDAiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6InRva2VuIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6ImlkIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6InVzZXJpZCIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZX1d)

Las credenciales del admin:

email: jhon@jhon.com
password: 123456

Las credenciales de usuario:

email: paula@paulaxsa   .com
password: 123456



## Endpoints

El formato de Body de solicitud admitido es JSON

Todos los Endpoints, excepto el inicio de sesión y el registro, requieren autenticación por JWT enviado en la solicitud a través de encabezados

### Auth

| Metodo | ruta            | descripcion       |
| ------ | --------------- | ----------------- |
| POST   | /authr/register | registrar usuario |

**POST** /auth/register

    {
        "name": <string>,
        "email": <string>,
        "password": <string>
    }

| Metodo | ruta        | descripcion      |
| ------ | ----------- | ---------------- |
| POST   | /auth/login | inicio de sesion |

**POST** /auth/login

    {
        "email": <string>,
        "password": <string>
    }

### Users

| Metodo | ruta             | descripcion            |
| ------ | ---------------- | ---------------------- |
| GET    | /users           | lista de usuarios      |
| GET    | /users/:id       | usuario por id         |
| PUT    | /users/:id       | actualizar usuario     |
| DELETE | /users/:id       | borrar usuario         |
| POST   | users/:id/movies | obtener peliculas alquiladas por un usuario|

### Movies

| Metodo | ruta              | descripcion     |
| ------ | ----------------- | --------------- |
| GET    | /movies           | lista de movies |
| GET    | /movies/:id       |   detalle de una pelicula              |
| POST   | /movies/:id/:rent | rentar pelicula                |



