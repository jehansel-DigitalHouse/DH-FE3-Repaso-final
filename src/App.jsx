import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Favs from "./Pages/Favs";
import Detail from "./Pages/Detail";
import Layout from "./Layouts/Layout";
import { ToastContainer } from "react-toastify";
import ErrorBoundary from "./ErrorBoundary";
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/favs" element={<Favs />} />
					<Route path="/detail/:id" element={<Detail />} />
				</Route>
			</Routes>
			<ToastContainer />
		</>
	);
}

export default App;
