import { Route, Routes, BrowserRouter } from "react-router-dom";
import Sign from "./pages/Sign";
import Home from "./pages/Home";
import SchoolsPublic from "./pages/SchoolsPublic";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login/:id" element={<Sign />} />
        <Route path="/home" element={<Home />} />
        <Route path="/universities/:id" element={<SchoolsPublic />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
