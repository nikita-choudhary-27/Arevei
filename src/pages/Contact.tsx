import React from "react";
import GetInTouch from "../components/GetInTouch";
import ContactForm from "../components/ContactForm";

const Contact: React.FC = () => {
  return (
    <div className=" min-h-screen bg-[#1c1c1c] dark:bg-[#1c1c1c]">
      <GetInTouch />
      <ContactForm />
    </div>
  );
};

export default Contact;
