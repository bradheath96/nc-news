import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./components/User_Context";
import "./css/app.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<UserProvider>
			<App />
		</UserProvider>
	</BrowserRouter>
);
