// src/pages/FAQPage/FAQPage.jsx

import { useState, useEffect } from 'react';
import './FAQPage.css';
import faqs from '../../assets/faqs.json';

const FAQPage = () => {
  const [faqList, setFaqList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    setFaqList(faqs);
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <h1>Help</h1>
      <h2> Need Assitance?  Check out some Frequently Asked Questions!</h2>
      <div className="faq-list">
        {faqList.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
