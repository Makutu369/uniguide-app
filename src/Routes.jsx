import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import SchoolsPublic from "./pages/Schools/SchoolsPublic";
import Verified from "./pages/Verified/Verified";
import Sign from "./pages/SignPage/Sign";
import Details from "./pages/userDetails/Details";
import Dashboard from "./pages/dashboard/Dashboard";
import Findschools from "./pages/mainSchools/page";
import Reset from "./pages/resetPassword/Reset";
import "@radix-ui/themes/styles.css";
import FAQPage from "./pages/Faq/faqPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/verified" element={<Verified />} />
        <Route path="/home" element={<Home />} />
        <Route path="/universities/" element={<SchoolsPublic />} />
        <Route path="/register" element={<Sign />} />
        <Route path="/" element={<Home />} />
        <Route path="/user/info" element={<Details />} />
        <Route path="/user/universities" element={<Findschools />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reset-password" element={<Reset />} />
        <Route path="/faqs" element={<FAQPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
