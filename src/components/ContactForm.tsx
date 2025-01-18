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

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID!;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY!;

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
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 dark:bg-[#1c1c1c] dark:text-white">
      <h1 className="text-3xl font-bold text-center mb-6">
        Message Us Directly
      </h1>
      <p className="text-center text-gray-600 mb-8 dark:text-gray-400">
        We will get back to you within{" "}
        <span className="font-bold dark:text-lime-500">24 hours</span>
      </p>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="e.g., John"
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
              placeholder="e.g., Doe"
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
            placeholder="e.g., example@gmail.com"
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
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto bg-lime-500 text-black py-2 px-6 rounded-full hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            {isSubmitting ? "Sending..." : "Submit Now"}
          </button>
        </div>
        {feedback && (
          <p className="text-center mt-4 text-sm font-medium">{feedback}</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
