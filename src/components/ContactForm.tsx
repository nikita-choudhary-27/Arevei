import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY!;

    console.log("object", serviceId, templateId, publicKey);
    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then(() => {
        setFeedback("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      })
      .catch(() => {
        setFeedback("Failed to send the message. Please try again.");
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4 dark:bg-[#1c1c1c] dark:text-white">
      <h1 className="text-3xl font-bold text-center mb-4">
        Message Us Directly
      </h1>
      <p className="text-center text-gray-600 mb-8 dark:text-gray-400">
        We will get back to you within{" "}
        <span className="font-bold dark:text-lime-500">24 hours</span>
      </p>
      <form className="space-y-6 mb-9" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="eg. John"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="dark:bg-[#222222] dark:border-0 mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-100 focus:border-green-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="eg. Doe"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="dark:bg-[#222222] dark:border-0 mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-100 focus:border-green-300"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="eg. example@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="dark:bg-[#222222] dark:border-0 mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-100 focus:border-green-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Your Message
          </label>
          <textarea
            name="message"
            placeholder="Write here..."
            value={formData.message}
            onChange={handleChange}
            required
            className="dark:bg-[#222222] dark:border-0 mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-4 px-3 focus:outline-none focus:ring-2 focus:ring-green-100 focus:border-green-300"
            rows={5}
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-30 bg-lime-500 text-black py-2 px-4 rounded-full hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            {isSubmitting ? "Sending..." : "Submit Now"}
          </button>
        </div>
        {feedback && <p className="text-center mt-4">{feedback}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
