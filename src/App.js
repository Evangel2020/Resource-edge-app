import Landingpage from "./pages/landing-page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Screens/Login/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} index />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
