// import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Algorithm from "./pages/mainSchools/components/Algorithm";
import SchoolsPublic from "./pages/Schools/SchoolsPublic";
import Test from "./components/Test";
import Ai from "./pages/mainSchools/components/Ai";
import Verified from "./pages/Verified/Verified";
import Sign from "./pages/SignPage/Sign";
import Tour from "./pages/Tour/Tour";
import Reset from "./pages/reset-pass/Reset";
import Details from "./pages/userDetails/Details";
import Dashboard from "./pages/dashboard/Dashboard";
import Findschools from "./pages/mainSchools/page";
import "@radix-ui/themes/styles.css";
import FAQPage from "./pages/Faq/faqPage";
import { createBrowserRouter, Link } from "react-router-dom";
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
    errorElement: (
      <div className="w-full p-4 text-xl md:text-6xl flex-col h-screen font-montserrat gap-y-5  font-bold flex justify-center items-center">
        <div className="flex gap-x-3">
         <span className="text-red-400">{ 404 }</span>
         <span>Page Not found</span>
        </div>
        <Link className="btn text-xs md:text-lg border rounded-full flex justify-center items-center text-sky-400 ">Back to home</Link>
      </div>
    ),
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
  { path: "/test", element: <Test /> },
  { path: "/faqs", element: <FAQPage /> },
  {
    path: "/tour",
    element: <Tour />,
    children: [
      {
        path: "/tour/:id",
        element: <Tour />,
      },
    ],
  },
]);

export default router;
