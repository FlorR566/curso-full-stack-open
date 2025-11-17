# 📘 Greetings App – React Basics

Este proyecto es una práctica introductoria de React donde se trabaja con:

- Componentes funcionales

- Props

- Expresiones dentro de JSX

- Uso básico de variables y valores calculados

---

## 🚀 Objetivo del ejercicio

El propósito es comprender cómo:

- Declarar componentes en React

- Pasar datos mediante props

- Renderizar valores dinámicos en JSX

- Escribir expresiones JavaScript dentro de llaves {}

---

## 🧩 Código principal

### Componente Hello

Este componente recibe name y age a través de las props y muestra un saludo personalizado:

```jsx
const Hello = (props) => {
	console.log(props);

	return (
		<div>
			<p>
				Hello {props.name}, you are {props.age} years old.
			</p>
		</div>
	);
};
```

### Componente App

En App se definen variables y se pasan como props a cada componente Hello:

```jsx
const App = () => {
	const name = "Peter";
	const age = 10;

	return (
		<>
			<h1>Greetings</h1>
			<Hello name="Florencia" age={26 + 10} />
			<Hello name={name} age={age} />
		</>
	);
};
```

- Se muestra como pasar props literales.
- Cómo usar expresiones dentro de JSX (26+10).
- Cómo aprovechar variables para propagar datos.
