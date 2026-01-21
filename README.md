# Prueba Técnica - Facultad de Ingeniería (UNAL)

Este repositorio contiene la solución a las pruebas técnicas de Front-End y SQL para el proceso de selección de la Facultad de Ingeniería.

---

## Información Personal
* **Nombre:** Juan David Ardila Diaz
* **Documento de Identidad (CC):** 1034778286
* **Repositorio:** `prueba-tecnica-uapa`

---

## Estructura del Proyecto

El repositorio está organizado de la siguiente manera:

- `prueba-uapa/`: Proyecto Front-End desarrollado en React.
- `database.sql`: Script SQL que contiene el diseño de la base de datos y las consultas solicitadas.

---

## Prueba 1: Front-End (React)

Se realizó la maquetación de una Landing Page siguiendo el diseño proporcionado, asegurando que sea responsiva tanto para **Mobile** como para **Desktop**.

### Requisitos previos
* [Node.js](https://nodejs.org/) (versión 16 o superior recomendada)
* npm o yarn

### Instrucciones para ejecutar
1.  Navegar a la carpeta del proyecto:
    ```bash
    cd prueba-uapa
    ```
2.  Instalar las dependencias:
    ```bash
    npm install
    ```
3.  Iniciar el servidor de desarrollo:
    ```bash
    npm start
    ```
    *Nota: Si el proyecto fue inicializado con Vite, usa `npm run dev`.*

4.  Abrir el navegador en `http://localhost:3000` (o el puerto indicado en la terminal).

---

## Prueba 2: SQL (MySQL / MariaDB)

Se diseñó una base de datos relacional para la gestión de la Facultad de Ingeniería. El archivo `database.sql` incluye la creación de tablas, inserción de datos de prueba y las consultas necesarias para responder a los requerimientos.

### Contenido del Script SQL
El script da solución a las siguientes interrogantes:
1.  **Conteo de docentes activos:** Consulta filtrada por estado.
2.  **Cursos por periodo:** Selección de cursos basada en un rango o identificador de periodo.
3.  **Lista de estudiantes:** Listado de alumnos matriculados en el periodo actual.
4.  **Promedio de calificaciones:** Cálculo de promedios de los últimos 5 años para un curso específico.
5.  **Procedimiento almacenado:** Lógica para la creación de un nuevo curso y la asignación automática de un docente.

### Cómo ejecutar el script
1.  Abrir su gestor de base de datos preferido (MySQL Workbench, phpMyAdmin, DBeaver, o terminal).
2.  Crear una nueva base de datos (opcional):
    ```sql
    CREATE DATABASE facultad_ingenieria;
    USE facultad_ingenieria;
    ```
3.  Importar el archivo `database.sql`:
    ```bash
    mysql -u tu_usuario -p facultad_ingenieria < database.sql
    ```
4.  Las consultas de respuesta se encuentran al final del archivo debidamente comentadas.

---

## 🛠️ Herramientas utilizadas
* **Front-End:** React, CSS/SASS (o la librería que hayas usado).
* **Base de Datos:** MySQL / MariaDB.
* **Control de Versiones:** Git & GitHub.