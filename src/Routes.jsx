import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import SchoolsPublic from "./pages/Schools/SchoolsPublic";
import Verified from "./pages/Verified/Verified";
import Sign from "./pages/SignPage/Sign";
import Details from "./pages/userDetails/Details";
import Dashboard from "./pages/dashboard/Dashboard";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/verified" element={<Verified />} />
        <Route path="/home" element={<Home />} />
        <Route path="/universities/" element={<SchoolsPublic />} />
        <Route path="/register" element={<Sign />} />
        <Route path="/" element={<Home />} />
        <Route path="/user-info" element={<Details />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
