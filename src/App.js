import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Form from "./components/pages/form/Form";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
