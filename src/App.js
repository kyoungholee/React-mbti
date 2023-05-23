import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./components/testing/Inspect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/test" element={<Test />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
