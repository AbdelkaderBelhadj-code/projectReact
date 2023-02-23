import logo from "./logo.svg";
import "./App.css";
import Products from "./components/Products";
import NotFound from "./components/NotFound";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="App">
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/product" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
