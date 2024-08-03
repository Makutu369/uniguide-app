// import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Algorithm from "./pages/mainSchools/components/Algorithm";
import SchoolsPublic from "./pages/Schools/SchoolsPublic";
import Ai from "./pages/mainSchools/components/Ai";
import Verified from "./pages/Verified/Verified";
import Sign from "./pages/SignPage/Sign";
import Reset from "./pages/reset-pass/Reset";
import Details from "./pages/userDetails/Details";
import Dashboard from "./pages/dashboard/Dashboard";
import Findschools from "./pages/mainSchools/page";
import "@radix-ui/themes/styles.css";
import FAQPage from "./pages/Faq/faqPage";
import { createBrowserRouter } from "react-router-dom";
// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/verified" element={<Verified />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/universities/" element={<SchoolsPublic />} />
//         <Route path="/register" element={<Sign />} />
//         <Route path="/" element={<Home />} />
//         <Route path="/user/info" element={<Details />} />
//         <Route path="/user/universities" element={<Findschools />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/reset-password" element={<Reset />} />
//         <Route path="/faqs" element={<FAQPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: (
    //   <div className="w-full h-screen font-montserrat text-7xl font-bold flex justify-center items-center">
    //     Page Not found 404
    //   </div>
    // ),
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/universities",
    element: <SchoolsPublic />,
  },
  { path: "/verified", element: <Verified /> },
  { path: "/register", element: <Sign /> },
  { path: "/user/info", element: <Details /> },
  { path: "/reset-password", element: <Reset /> },
  {
    path: "/user/universities",
    element: <Findschools />,
    children: [
      {
        path: "/user/universities/:id",
        element: <Ai />,
      },
      {
        path: "/user/universities/algorithm",
        element: <Algorithm />,
      },
    ],
  },
  { path: "/faqs", element: <FAQPage /> },
]);

export default router;
