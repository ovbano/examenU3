Eventos y Reservas - Microservicios
Este proyecto consiste en dos microservicios: uno para gestionar eventos (/events) y otro para gestionar reservas (/bookings). Los microservicios están construidos con Node.js, Express, Sequelize y Postgres.

Requisitos del Proyecto
Funcionalidades Mínimas
Microservicio de Eventos (/events)
Crear un evento.

Obtener la lista de eventos.

Obtener un evento por ID.

Microservicio de Reservas (/bookings)
Crear una reserva asociada a un evento.

Obtener la lista de reservas.

Obtener las reservas de un evento específico.

Tecnologías Utilizadas
Node.js: Entorno de ejecución para JavaScript.

Express: Framework para construir aplicaciones web y APIs.

Sequelize: ORM para interactuar con la base de datos.

Postgres: Base de datos relacional.

Joi: Librería para validación de datos.

Postman: Herramienta para probar los endpoints de la API.

Instalación
Clona el repositorio:

bash
Copy
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
Instala las dependencias:

bash
Copy
npm install
Configura la base de datos:

Crea una base de datos en Postgres.

Configura las variables de entorno en un archivo .env:

env
Copy
DB_USER=tu-usuario
DB_PASSWORD=tu-contraseña
DB_HOST=localhost
DB_NAME=tu-base-de-datos
DB_PORT=5432
Ejecuta las migraciones para crear las tablas en la base de datos:

bash
Copy
npx sequelize-cli db:migrate
Inicia el servidor:

bash
Copy
npm start
Endpoints
Eventos (/events)
Crear un evento:

Método: POST

URL: /api/v1/events

Body (JSON):

json
Copy
{
  "name": "Concierto de Rock",
  "description": "Un concierto increíble con las mejores bandas de rock.",
  "date": "2023-12-15T20:00:00Z",
  "capacity": 1000
}
Obtener la lista de eventos:

Método: GET

URL: /api/v1/events

Obtener un evento por ID:

Método: GET

URL: /api/v1/events/:id

Reservas (/bookings)
Crear una reserva:

Método: POST

URL: /api/v1/bookings

Body (JSON):

json
Copy
{
  "eventId": "1",
  "userEmail": "usuario@example.com",
  "numTickets": 2
}
Obtener la lista de reservas:

Método: GET

URL: /api/v1/bookings

Obtener las reservas de un evento específico:

Método: GET

URL: /api/v1/events/:id/bookings

Pruebas con Postman
Importa la colección de Postman desde el archivo Eventos y Reservas.postman_collection.json.

Configura el entorno en Postman con la URL base: http://localhost:3000.

Ejecuta las solicitudes para probar los endpoints.
