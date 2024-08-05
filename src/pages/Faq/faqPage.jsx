// src/pages/FAQPage/FAQPage.jsx
import { Accordion, AccordionItem } from "@nextui-org/react";
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
        <h2 className="flex flex-col justify-center items-center gap-2 w-full">
          {" "}
          <span className="">Need Assitance?</span>{" "}
          <span className="text-base font-normal">
            Check out some Frequently Asked Questions!
          </span>
        </h2>
      </div>
      <div className="text-white/90 mx-auto sm:w-[70%] w-[90%] ">
        <Accordion selectionMode="multiple ">
          {faqList.map((faq, index) => (
            <AccordionItem key={index} title={faq.question}>
              {faq.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQPage;
