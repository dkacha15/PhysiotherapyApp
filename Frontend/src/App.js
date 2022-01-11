import {BrowserRouter,Route,Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import SignUp from "./Sign Up/SignUp";
import Login from "./Login/Login";
import DoctorAppointment from "./Appointment Booking/DoctorAppointment";
import BookAppointment from "./Appointment Booking/BookAppointment";
  
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/bookAppointment/:doctor_id' element={<DoctorAppointment />} />
        <Route path='/bookAppointment' element={<BookAppointment/>} />
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
