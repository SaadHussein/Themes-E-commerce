import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { store, persistor } from "./app/Store.ts";
import { PersistGate } from "redux-persist/integration/react";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<React.StrictMode>
			<Router>
				<Provider store={store}>
					<PersistGate loading={"loading"} persistor={persistor}>
						<App />
					</PersistGate>
				</Provider>
			</Router>
		</React.StrictMode>
	);
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);
