import { Routes, Route } from "react-router-dom";
import Details from "./pages/details";
import Main from "./pages/main";
import Form from "./pages/form";
import Edit from "./pages/edit";
import Login from "./components/login";
import Register from "./components/register";
import NavBar from "./components/navBar";

function App() {
  return (
    <fieldset>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pirates" element={<Form />} />
        <Route path="/pirates/:pirate_id" element={<Details />} />
        <Route path="/authors/edit/:pirate_id" element={<Edit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </fieldset>
  );
}

export default App;
