Contexto y alcance

Se solicita desarrollar un mini-ecommerce, compuesto por:

● Backend: Node.js + Express, con persistencia en SQLite y Sequelize.

● Frontend: HTML, CSS y JavaScript. Comunicación con el backend mediante 
fetch.

Objetivos:

● Implementar CRUD completo con todos los métodos HTTP.

● Usar Sequelize para mapear entidades, manejar validaciones y 
transacciones.

● Aplicar middlewares en Express.

● Resolver una operación transaccional que involucre varias entidades en una
misma base de datos.

● Desarrollar un frontend en HTML/JS/CSS que consuma datos con fetch y actualice
dinámicamente la UI.

● Mantener una estructura clara y profesional de carpetas según se indica.

Backend – Estructura esperada de proyecto
/backend/
package.json
README.md
/src
app.js # arranque express
/config
db.js # conexión Sequelize
/models # modelos Sequelize
/routes # definición de rutas
/data
db.sqlite # archivo de base de datos
Frontend – Estructura esperada de proyecto
/frontend/
index.html
/css
styles.css
/js
app.js # punto de entrada
api.js # funciones fetch para backend
ui.js # render dinámico de vistas/tablas