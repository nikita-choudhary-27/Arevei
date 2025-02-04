import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const JobApplicationForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY!;

    if (formRef.current) {
      emailjs
        .sendForm(serviceId, templateId, formRef.current, publicKey)
        .then(() => {
          setFeedback("Application submitted successfully!");
          formRef.current?.reset(); 
        })
        .catch(() => {
          setFeedback("Failed to send the application. Please try again.");
        })
        .finally(() => setIsSubmitting(false));
    }
  };

  return (
    <div className="bg-black flex justify-center min-h-screen p-8">
      <div className="mx-auto py-12 lg:px-8 bg-black text-white w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-6">
          Excited for AREVEI Job Opportunities?
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Submit your details, and we’ll get back to you within{" "}
          <span className="font-bold text-lime-500">24 hours</span>.
        </p>

        <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="e.g., John"
                required
                className="mt-1 block w-full bg-black text-white border border-gray-700 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="e.g., Doe"
                required
                className="mt-1 block w-full bg-black text-white border border-gray-700 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="e.g., example@gmail.com"
              required
              className="mt-1 block w-full bg-black text-white border border-gray-700 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400">
              Pick a Job
            </label>
            <select
              name="jobTitle"
              required
              className="mt-1 block w-full bg-black text-white border border-gray-700 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-lime-400"
            >
              <option value="">Select a job...</option>
              <option value="Full-Stack Developer">Full-Stack Developer</option>
              <option value="Product Designer">Product Designer</option>
              <option value="Marketing Specialist">Marketing Specialist</option>
              <option value="Branding Expert">Branding Expert</option>
              <option value="Data Analyst">Data Analyst</option>
              <option value="Sales Representative">Sales Representative</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400">
              Attach Your Resume
            </label>
            <input
              type="file"
              name="resume"
              className="mt-1 block w-full bg-black text-white border border-gray-700 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400">
              Your Message
            </label>
            <textarea
              name="message"
              placeholder="Write here..."
              required
              className="mt-1 block w-full bg-black text-white border border-gray-700 rounded-lg py-4 px-3 focus:outline-none focus:ring-2 focus:ring-lime-400"
              rows={5}
            ></textarea>
          </div>

          <div className="flex justify-start">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-lime-500 text-black py-2 px-6 rounded-full hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500"
            >
              {isSubmitting ? "Sending..." : "Submit Now"}
            </button>
          </div>

          {feedback && (
            <p className="text-center mt-4 text-sm font-medium">{feedback}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
