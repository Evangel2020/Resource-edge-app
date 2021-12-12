import Landingpage from "./pages/landing-page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Screens/Login/Login";
import Dashboard from "./Screens/Dashboard/Dashboard";
import Reset from "./Screens/ResetPassword/Reset";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Landingpage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="reset" element={<Reset />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
