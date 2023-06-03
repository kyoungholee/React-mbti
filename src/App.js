import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./components/testing/Inspect";
import Countries from "./components/countries/countries";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/result/:nation" element={<Countries />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
