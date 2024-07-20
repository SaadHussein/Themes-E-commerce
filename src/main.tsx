import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { store, persistor } from "./app/Store.ts";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
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
