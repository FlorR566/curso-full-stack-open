import axios from "axios";
const baseUrl = "http://localhost:3001/api/notes";

const getAll = () => {
	const request = axios.get(baseUrl);
	return request.then((response) => response.data);
};

// NOTA: nonExisting es una nota inventada que no se guardó en el servidor, para probar que funciona la promesa
// const getAll = () => {
// 	const request = axios.get(baseUrl);
// 	const nonExisting = {
// 		id: 10000,
// 		content: "This note is not saved to server",
// 		important: true,
// 	};
// 	return request.then((response) => response.data.concat(nonExisting));
// };

const create = (newObject) => {
	const request = axios.post(baseUrl, newObject);
	return request.then((response) => response.data);
};

const update = (id, newObject) => {
	const request = axios.put(`${baseUrl}/${id}`, newObject);
	return request.then((response) => response.data);
};

export default {
	getAll,
	create,
	update,
};
// Este módulo devuelve un objeto que tiene tres funciones (getAll, create y update), como propiedades que se ocupan de las notas.
// Las funciones devuelven directamente las promesas devueltas por los métodos axios.
