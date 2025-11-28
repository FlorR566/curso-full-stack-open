import ReactDOM from "react-dom/client";
import axios from "axios";
import App from "./App";
import { StrictMode } from "react";

axios.get("http://localhost:3001/notes").then((response) => {
	const notes = response.data;
	console.log(notes);

	ReactDOM.createRoot(document.getElementById("root")).render(
		<StrictMode>
			<App notes={notes} />
		</StrictMode>
	);
});
