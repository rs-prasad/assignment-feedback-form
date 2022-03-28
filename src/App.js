import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Form from "./components/pages/form/Form";
import Error from "./components/pages/error/Error";
import Greeting from "./components/pages/greeting/Greeting";
import Table from "./components/pages/table/Table";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Form />} />
        <Route path="/table" element={<Table />} />
        <Route path="/greeting" element={<Greeting />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
