import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import "./App.css";
import Explorer from "./Components/Explorer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explorer" element={<Explorer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
