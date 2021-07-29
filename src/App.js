import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";

function App() {
	const [user, setUser] = useState(null);

	return (
		<div className="App">
			{!user ? (
				<Login />
			) : (
				<div className="app__body">
					<Router>
						<Sidebar />
						<Switch>
							<Route path="/rooms/:roomId">
								<Chat />
							</Route>
							<Route path="/">
								<Chat />
							</Route>
						</Switch>
					</Router>
				</div>
			)}
		</div>
	);
}

export default App;
