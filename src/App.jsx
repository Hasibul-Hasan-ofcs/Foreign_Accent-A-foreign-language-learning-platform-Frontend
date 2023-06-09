import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navigation/NavBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <NavBar></NavBar>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default App;
