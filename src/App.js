import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

function App() {
	return (
		<div className="App">
			<div className="app__body">
				<Sidebar />
				<Chat />
			</div>
		</div>
	);
}

export default App;
