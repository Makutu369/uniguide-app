// src/pages/FAQPage/FAQPage.jsx

import { useState, useEffect } from "react";
import faqs from "../../assets/data.json";
import Navbar from "../../components/SignPage/Navbar";
import LoginBtn from "../Home/components/loginBtn";

const FAQPage = () => {
  const [faqList, setFaqList] = useState([]);

  useEffect(() => {
    setFaqList(faqs);
  }, []);

  return (
    <div className="font-boldm w-full ">
      <div className="w-full h-14">
        <Navbar route={"/"}>
          <LoginBtn />
        </Navbar>
      </div>
      <div className="mx-auto font-montserrat font-bold text-lg w-[60%] gap-2 mt-9  flex justify-center items-center flex-col">
        <h1>Help</h1>
        <h2> Need Assitance? Check out some Frequently Asked Questions!</h2>
      </div>
      <div className="text-white/90 mx-auto w-[70%]">
        {faqList.map((faq, index) => (
          <div key={index} className="collapse mb-4 bg-neutral-800">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title  ">
              <h3>{faq.question}</h3>
            </div>
            <div className="collapse-content text-white/70">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
