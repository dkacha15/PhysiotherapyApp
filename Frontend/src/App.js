import {BrowserRouter,Route,Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import SignUp from "./Sign Up/SignUp";
import Login from "./Login/Login";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

function App() {
  return (
    <Routing/>
  );
}

export default App;
