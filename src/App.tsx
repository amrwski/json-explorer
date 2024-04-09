import { JsonExplorer } from "./components";
import JsonFile from "./example.json";
import "./styles/styles.css";

const App = () => <JsonExplorer jsonData={JsonFile} />;

export default App;
