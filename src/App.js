import Landingpage from "./pages/landing-page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Screens/Login/Login";
import Dashboard from "./Screens/Dashboard/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Landingpage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
