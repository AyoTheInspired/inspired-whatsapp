import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

function App() {
	return (
		<div className="App">
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
		</div>
	);
}

export default App;
