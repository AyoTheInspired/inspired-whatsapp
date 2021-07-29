import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<div className="App">
			<div className="app__body">
				<Sidebar />
			</div>
		</div>
	);
}

export default App;
