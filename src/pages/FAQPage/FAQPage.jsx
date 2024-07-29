// src/pages/FAQPage/FAQPage.jsx

import { useState, useEffect } from "react";
import faqs from "../../assets/faqs.json";
import Navbar from "../../components/SignPage/Navbar";

const FAQPage = () => {
  const [faqList, setFaqList] = useState([]);

  useEffect(() => {
    setFaqList(faqs);
  }, []);
  return (
    <div className="font-boldm w-full ">
      <div className="w-full h-14  border-b border-white/15">
        <Navbar></Navbar>
      </div>
      <div className="mx-auto text-lg w-[60%] gap-2 mt-9  flex justify-center items-center flex-col">
        <h1>Help</h1>
        <h2> Need Assitance? Check out some Frequently Asked Questions!</h2>
      </div>
      <div className=" mx-auto w-[70%]">
        {faqList.map((faq, index) => (
          <div key={index} className="collapse mb-2 bg-neutral-800">
            <inpu type="radio" name="my-accordion-2" />
            <div className="collapse-title">
              <h3>{faq.question}</h3>
            </div>
            <div className={`collapse-content`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
