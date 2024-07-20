import { Routes, Route } from "react-router-dom";
import "./App.css";
import PagesOutlet from "./pages/PagesOutlet/PagesOutlet";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import MainPage from "./pages/MainPage/MainPage";

function App() {
	return (
		<main className="w-full h-full">
			<Routes>
				<Route path="/" element={<PagesOutlet />}>
					<Route path="/" element={<MainPage />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
				</Route>
			</Routes>
		</main>
	);
}

export default App;
