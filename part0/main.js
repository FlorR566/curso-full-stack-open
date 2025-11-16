var xhttp = new XMLHttpRequest();

// controlador de eventos
xhttp.onreadystatechange = function () {
	// código que se encarga de la respuesta del servidor
	if (this.readyState == 4 && this.status == 200) {
		const data = JSON.parse(this.responseText);
		console.log(data);

		var ul = document.createElement("ul");
		ul.setAttribute("class", "notes");

		data.forEach(function (note) {
			var li = document.createElement("li");

			ul.appendChild(li);
			li.appendChild(document.createTextNode(note.content));
		});

		document.getElementById("notes").appendChild(ul); // conecta la rama árbol de la variable 'ul'
	}
};

xhttp.open("GET", "/exampleapp/data.json", true);
xhttp.send();
