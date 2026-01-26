# Full Stack Open — Parte 2 (Frontend) que se integra a la Parte 3(Backend)

### _Renderizado dinámico, formularios y comunicación con el servidor_

Este repositorio contiene los ejercicios correspondientes a la **Parte 2** del curso **Full Stack Open** dictado por la Universidad de Helsinki que se integran a la Parte 3 (Backend) del curso.
En esta sección se profundiza en conceptos clave de React, manejo de estado más avanzado y comunicación con APIs.

---

## Contenidos principales

### **1. Renderización de una colección de datos**

- Uso de `map()` para renderizar listas.
- Uso correcto de la prop `key`.
- División del código en componentes reutilizables.

### **2. Formularios en React**

- Inputs controlados con `useState`.
- Manejo de eventos en formularios.
- Actualización del estado según la interacción del usuario.

### **3. Comunicación con el servidor**

- Uso de **axios** para realizar peticiones HTTP.
- Operaciones CRUD (Create, Read, Update, Delete).
- Manejo de Promesas y estados de carga.

### **4. Servicios externos**

- Creación de archivos de servicio (ej: `services/persons.js`).
- Encapsulamiento de lógica HTTP.
- Código más modular y mantenible.

### **5. Ejercicio principal: Phonebook**

Incluye funcionalidades como:

- Agregar contactos.
- Evitar duplicados.
- Filtrar contactos por nombre.
- Eliminar registros.
- Mostrar mensajes de éxito o error.

---

## 📁 Estructura del proyecto

```
.
├── renderColections
│   ├── README.md
│   ├── db.json
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── src
│   │   ├── App.jsx
│   │   ├── App_2.01_courses.jsx
│   │   ├── App_2.02_courses.jsx
│   │   ├── App_2.04_courses.jsx
│   │   ├── App_2.06_agenda.jsx
│   │   ├── App_2.10_agenda.jsx
│   │   ├── App_2.16_agenda.jsx
│   │   ├── App_2.18_country_search.jsx
│   │   ├── App_2.19_country_search.jsx
│   │   ├── components
│   │   │   ├── Country.jsx
│   │   │   ├── CountryList.jsx
│   │   │   ├── CountryList_2.19.jsx
│   │   │   ├── Country_2.19.jsx
│   │   │   ├── Course_2.01.jsx
│   │   │   ├── Course_2.02.jsx
│   │   │   ├── Course_2.04.jsx
│   │   │   ├── Filter.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Note.jsx
│   │   │   ├── Notification.jsx
│   │   │   ├── PersonForm.jsx
│   │   │   └── PersonList.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── services
│   │       ├── notes.js
│   │       ├── persons.js
│   │       └── restcountries.js
│   └── vite.config.js
└── repasoJS.js
```

Cada archivo `App (notebook)`, `App_...(phonebook)`, `App_...(contry)` dentro de la carpeta `src` contiene ejercicios específicos de cada sección.

---

## Cómo ejecutar los ejercicios

```
1. Clonar este repositorio:
git clone <url-del-repo>

2. Entrar a la carpeta:
cd part2/phonebook

3. Instalar dependencias:
npm install

4. Ejecutar la aplicación:
npm run dev
```

> **Nota:** Para las secciones de la Agenda (Phonebook) a partir de la versión 2.16, se requiere que el servidor backend esté en ejecución para realizar las peticiones a la API.

## Tecnologías utilizadas

React

Vite

Axios

JavaScript ES6+
