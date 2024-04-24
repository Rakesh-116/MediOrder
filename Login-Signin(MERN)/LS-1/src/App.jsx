import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/signup';
import Login from './components/login';
import Home from './components/home';
import About from './components/about';
import Profile from './components/profile';
import Medicine from './components/medicine';
import Hazards from './components/hazards';
import Payment from './components/payment';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/medicine" element={<Medicine />}></Route>
        <Route path="/hazards" element={<Hazards />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
