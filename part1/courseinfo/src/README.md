# 📘 Anecdotes App

Este proyecto consiste en una aplicación hecha con **React** que muestra anécdotas de al azar, permitiendo a los usuarios votar por sus favoritas y mostrar la más votada.

---

## 🚀 Funcionalidad

La aplicación permite:

### ✅ Mostrar una anécdota aleatoria

Cada vez que el usuario hace clic en **"Next Anecdote"**, se selecciona una anécdota distinta al azar.

### ✅ Votar anécdotas

Cada anécdota tiene un contador de votos.  
Al presionar **"Vote"**, la aplicación incrementa en 1 el contador de votos de la anécdota seleccionada.

### ✅ Mostrar la anécdota con más votos

En la segunda sección, la app identifica automáticamente cuál es la anécdota con mayor cantidad de votos y la muestra junto con su total.

---

## 🧠 ¿Cómo funciona?

- Las anécdotas se almacenan en un array de strings.
- Los votos están almacenados en un objeto con claves numéricas (`{0: 0, 1: 0, ... }`).
- Cada vez que se vota:
  - Se hace una copia del objeto de votos.
  - Se incrementa el voto de la anécdota seleccionada.
  - Se actualiza el estado de React con el nuevo objeto.
- Para encontrar la más votada, se convierte el objeto de votos en un arreglo con `Object.entries()` y se recorre buscando la mayor cantidad.

---

## 🧩 Componentes principales

- **App** → Componente principal que maneja el estado y la lógica.
- **Header** → Muestra los títulos de cada sección.
- **Button** → Botón reutilizable con callback.
- **DisplayVotes** → Muestra la cantidad de votos de una anécdota.
- **MostVoted** → Calcula y muestra la anécdota con más votos.

---

## 🛠 Tecnologías utilizadas

- **React**
- **useState**
- **JavaScript ES6+**
- **Vite**
