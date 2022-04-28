import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./comoponents/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
