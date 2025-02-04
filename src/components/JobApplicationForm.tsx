 import React, { useState } from "react";

const JobApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    resumeLink: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback("");

    const dataToSend = {
      ...formData,
      timestamp: new Date().toISOString(),
    };

    try {
      await fetch(
        "AKfycbwMpUwGmzJZ7MZXyB9fBx0D6--BlylDe5vbAeSQROJcVK-NLEH5U65CrAdHruEdGUz4",
        {
          method: "POST",
          body: JSON.stringify(dataToSend),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setFeedback("Application submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        resumeLink: "",
        message: "",
      });
    } catch (error) {
      setFeedback("Failed to submit the application. Please try again.");
      console.log(error)
    } finally {
      setIsSubmitting(false);
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

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="e.g., John"
                value={formData.firstName}
                onChange={handleChange}
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
                value={formData.lastName}
                onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.jobTitle}
              onChange={handleChange}
              required
              className="mt-1 block w-full bg-black text-white border border-gray-700 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-lime-400"
            >
              <option value="">Select a job...</option>
              <option value="Product Designer">Product Designer</option>
              <option value="Marketing Specialist">Marketing Specialist</option>
              <option value="Branding Expert">Branding Expert</option>
              <option value="Data Analyst">Data Analyst</option>
              <option value="Sales Representative">Sales Representative</option>
              <option value="Full-Stack Developer">Full-Stack Developer</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400">
              Resume Link
            </label>
            <input
              type="url"
              name="resumeLink"
              placeholder="e.g., https://example.com/resume.pdf"
              value={formData.resumeLink}
              onChange={handleChange}
              required
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
              value={formData.message}
              onChange={handleChange}
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
