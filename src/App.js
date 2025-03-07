import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import WorkHistory from "./pages/workhistory";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import "./app.css";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/workhistory" element={<WorkHistory />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
