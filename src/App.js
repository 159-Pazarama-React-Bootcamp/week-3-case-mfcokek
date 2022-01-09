import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Home from "./views/Home";
import Login from './views/Login'
import Logout from "./views/Logout";
import Register from "./views/Register";

function App() {
  const user_email = localStorage.getItem("@user_email")
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />}></Route>
        {
          //daha önce giriş yaptıysayı kontrol ediyor giriş varsa login ve register'a yönlendirmiyor
          //onun yerine dashboard'a yönlendiriyor
          user_email ? (
            <>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/logout" element={<Logout />}></Route>
            </>
          ): (
            <>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
            </>
          )
        }
        <Route path="*" element={<Navigate to="/dashboard" />}
    />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
