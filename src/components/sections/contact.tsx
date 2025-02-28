import { ContactForm } from "@/forms/contact-form";
import React from "react";

const Contact = () => {
  return (
    <div className="scroll-mt-12 py-20" id="contact">
      <div className="mx-auto max-w-7xl sm:px-6">
        <h2 className="text-center text-3xl font-bold text-zinc-100 sm:text-4xl">
          Contact Us
        </h2>
        <div className="mx-auto w-full md:max-w-2xl">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
