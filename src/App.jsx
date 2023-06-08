import "./App.css";
import HelmetProvider from "./components/controllers/HelmetProvider";

function App() {
  return (
    <div>
      <HelmetProvider title="Home"></HelmetProvider>
      Welcome to app page
    </div>
  );
}

export default App;
