import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./views/Login";
import { Register } from "./views/Register";
import { Main } from "./views/Main";
import Add from "./views/Add";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Main />} path="/"></Route>

          {/* <Route element={<Login />} path="/"></Route> */}
          <Route element={<Register />} path="/register"></Route>
          <Route element={<Add />} path="/add"></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
