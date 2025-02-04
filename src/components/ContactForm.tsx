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
    <div className="bg-black flex justify-center">
      <div className=" mx-auto py-12   lg:px-8 bg-black text-white">
        <h1 className="text-4xl font-bold text-center mb-6">
          We'd Love to Hear From You
        </h1>
        <p className="text-center text-gray-600 mb-8 dark:text-gray-400">
          We will get back to you within{" "}
          <span className="font-bold dark:text-lime-500">24 hours</span>
        </p>
        <div className="flex flex-col md:flex-row gap-8 px-10 sm:px-12">
          <div>
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
              <div className="flex justify-start">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-lime-500 text-black py-2 px-6 rounded-full hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  {isSubmitting ? "Sending..." : "Submit Now"}
                </button>
              </div>
              {feedback && (
                <p className="text-center mt-4 text-sm font-medium">
                  {feedback}
                </p>
              )}
            </form>
          </div>
          <div className="bg-[#222222] rounded-xl p-3 w-full md:w-1/2">
            <div className="bg-[#1c1c1c] flex justify-between items-center p-5 rounded-xl mb-3">
              <div>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="black"
                    className="size-9 bg-lime-400 rounded-full p-1.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <div>
                    <h2 className="font-medium text-lg">
                      Find Our Representatives
                    </h2>
                    <p className="text-gray-400">Find on Map</p>
                  </div>
                </div>
              </div>
              <div>
                <button className="border border-lime-400 dark:text-lime-400  py-1 px-4 rounded-full dark:hover:bg-lime-400  dark:hover:text-black ">
                  Find
                </button>
              </div>
            </div>
            <div className="bg-[#1c1c1c] flex justify-between items-center p-5 rounded-xl mb-3">
              <div>
                <div className="flex gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="size-9 bg-lime-400 rounded-full p-1.5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.05 4.91005C18.1331 3.98416 17.0411 3.25002 15.8376 2.75042C14.634 2.25081 13.3431 1.99574 12.04 2.00005C6.58005 2.00005 2.13005 6.45005 2.13005 11.9101C2.13005 13.6601 2.59005 15.3601 3.45005 16.8601L2.05005 22.0001L7.30005 20.6201C8.75005 21.4101 10.38 21.8301 12.04 21.8301C17.5 21.8301 21.9501 17.3801 21.9501 11.9201C21.9501 9.27005 20.92 6.78005 19.05 4.91005ZM12.04 20.1501C10.56 20.1501 9.11005 19.7501 7.84005 19.0001L7.54005 18.8201L4.42005 19.6401L5.25005 16.6001L5.05005 16.2901C4.2276 14.9771 3.79097 13.4593 3.79005 11.9101C3.79005 7.37005 7.49005 3.67005 12.03 3.67005C14.23 3.67005 16.3 4.53005 17.85 6.09005C18.6177 6.85392 19.226 7.7626 19.6397 8.76338C20.0534 9.76417 20.2642 10.8371 20.26 11.9201C20.2801 16.4601 16.58 20.1501 12.04 20.1501ZM16.56 13.9901C16.31 13.8701 15.09 13.2701 14.87 13.1801C14.64 13.1001 14.48 13.0601 14.31 13.3001C14.14 13.5501 13.67 14.1101 13.53 14.2701C13.39 14.4401 13.24 14.4601 12.99 14.3301C12.74 14.2101 11.94 13.9401 11 13.1001C10.26 12.4401 9.77005 11.6301 9.62005 11.3801C9.48005 11.1301 9.60005 11.0001 9.73005 10.8701C9.84005 10.7601 9.98005 10.5801 10.1 10.4401C10.22 10.3001 10.27 10.1901 10.35 10.0301C10.43 9.86005 10.39 9.72005 10.33 9.60005C10.27 9.48005 9.77005 8.26005 9.57005 7.76005C9.37005 7.28005 9.16005 7.34005 9.01005 7.33005H8.53005C8.36005 7.33005 8.10005 7.39005 7.87005 7.64005C7.65005 7.89005 7.01005 8.49005 7.01005 9.71005C7.01005 10.9301 7.90005 12.1101 8.02005 12.2701C8.14005 12.4401 9.77005 14.9401 12.25 16.0101C12.84 16.2701 13.3 16.4201 13.66 16.5301C14.25 16.7201 14.79 16.6901 15.22 16.6301C15.7 16.5601 16.69 16.0301 16.89 15.4501C17.1 14.8701 17.1 14.3801 17.03 14.2701C16.96 14.1601 16.81 14.1101 16.56 13.9901Z"
                      fill="black"
                    />
                  </svg>

                  <div>
                    <h2 className="font-medium text-lg">Whatsapp</h2>
                    <p className="text-gray-400">+953 864 5789</p>
                  </div>
                </div>
              </div>
              <div>
                <button className="border border-lime-400 dark:text-lime-400  py-1 px-4 rounded-full dark:hover:bg-lime-400  dark:hover:text-black ">
                  Open
                </button>
              </div>
            </div>
            <div className="bg-[#1c1c1c] flex justify-between items-center p-5 rounded-xl mb-3">
              <div>
                <div className="flex gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="size-9 bg-lime-400 rounded-full p-1.5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.4701 2.00014H3.53006C3.33964 1.9975 3.15056 2.03239 2.97362 2.10282C2.79669 2.17326 2.63536 2.27786 2.49886 2.41065C2.36235 2.54344 2.25334 2.70182 2.17805 2.87675C2.10276 3.05167 2.06267 3.23972 2.06006 3.43014V20.5701C2.06267 20.7606 2.10276 20.9486 2.17805 21.1235C2.25334 21.2985 2.36235 21.4568 2.49886 21.5896C2.63536 21.7224 2.79669 21.827 2.97362 21.8975C3.15056 21.9679 3.33964 22.0028 3.53006 22.0001H20.4701C20.6605 22.0028 20.8496 21.9679 21.0265 21.8975C21.2034 21.827 21.3648 21.7224 21.5013 21.5896C21.6378 21.4568 21.7468 21.2985 21.8221 21.1235C21.8974 20.9486 21.9375 20.7606 21.9401 20.5701V3.43014C21.9375 3.23972 21.8974 3.05167 21.8221 2.87675C21.7468 2.70182 21.6378 2.54344 21.5013 2.41065C21.3648 2.27786 21.2034 2.17326 21.0265 2.10282C20.8496 2.03239 20.6605 1.9975 20.4701 2.00014ZM8.09006 18.7401H5.09006V9.74014H8.09006V18.7401ZM6.59006 8.48014C6.17632 8.48014 5.77953 8.31578 5.48697 8.02323C5.19442 7.73067 5.03006 7.33388 5.03006 6.92014C5.03006 6.5064 5.19442 6.10961 5.48697 5.81705C5.77953 5.5245 6.17632 5.36014 6.59006 5.36014C6.80975 5.33522 7.03224 5.35699 7.24293 5.42402C7.45363 5.49105 7.6478 5.60183 7.81272 5.7491C7.97763 5.89637 8.10958 6.07682 8.19993 6.27862C8.29028 6.48043 8.33698 6.69904 8.33698 6.92014C8.33698 7.14124 8.29028 7.35985 8.19993 7.56166C8.10958 7.76346 7.97763 7.94391 7.81272 8.09118C7.6478 8.23845 7.45363 8.34923 7.24293 8.41626C7.03224 8.48329 6.80975 8.50505 6.59006 8.48014ZM18.9101 18.7401H15.9101V13.9101C15.9101 12.7001 15.4801 11.9101 14.3901 11.9101C14.0527 11.9126 13.7242 12.0184 13.4489 12.2133C13.1735 12.4082 12.9645 12.6828 12.8501 13.0001C12.7718 13.2352 12.7379 13.4827 12.7501 13.7301V18.7301H9.75006V9.73014H12.7501V11.0001C13.0226 10.5272 13.419 10.1377 13.8965 9.87334C14.374 9.60902 14.9146 9.47999 15.4601 9.50014C17.4601 9.50014 18.9101 10.7901 18.9101 13.5601V18.7401Z"
                      fill="black"
                    />
                  </svg>

                  <div>
                    <h2 className="font-medium text-lg">LinkedIn</h2>
                    {/* <p className="text-gray-400">Find on Map</p> */}
                  </div>
                </div>
              </div>
              <div>
                <button className="border border-lime-400 dark:text-lime-400  py-1 px-4 rounded-full dark:hover:bg-lime-400  dark:hover:text-black ">
                  Open
                </button>
              </div>
            </div>
            <div className="bg-[#1c1c1c] flex justify-between items-center p-5 rounded-xl mb-3">
              <div>
                <div className="flex gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="size-9 bg-lime-400 rounded-full p-1.5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 5.45455C9.73557 5.45455 6.65128 5.64867 4.69268 5.79141C4.04222 5.83882 3.53846 6.35372 3.53846 6.98262V7.69328L11.3774 11.8107C11.7646 12.0141 12.2354 12.0141 12.6226 11.8107L20.4615 7.69328V6.98261C20.4615 6.35372 19.9578 5.83882 19.3073 5.79141C17.3487 5.64867 14.2644 5.45455 12 5.45455ZM20.4615 9.35722L13.3698 13.0822C12.5179 13.5296 11.4821 13.5296 10.6302 13.0822L3.53846 9.35722V17.0174C3.53846 17.6463 4.04222 18.1612 4.69268 18.2086C6.65128 18.3513 9.73557 18.5455 12 18.5455C14.2644 18.5455 17.3487 18.3513 19.3073 18.2086C19.9578 18.1612 20.4615 17.6463 20.4615 17.0174V9.35722ZM4.57444 4.34117C6.53421 4.19834 9.67068 4 12 4C14.3293 4 17.4658 4.19834 19.4256 4.34117C20.8902 4.44791 22 5.60588 22 6.98261V17.0174C22 18.3941 20.8902 19.5521 19.4256 19.6588C17.4658 19.8017 14.3293 20 12 20C9.67068 20 6.53421 19.8017 4.57444 19.6588C3.10982 19.5521 2 18.3941 2 17.0174V6.98262C2 5.60589 3.10982 4.44791 4.57444 4.34117Z"
                      fill="black"
                    />
                  </svg>

                  <div>
                    <h2 className="font-medium text-lg">Email</h2>
                    <p className="text-gray-400">hello@arevei.com</p>
                  </div>
                </div>
              </div>
              <div>
                <button className="border border-lime-400 dark:text-lime-400  py-1 px-4 rounded-full dark:hover:bg-lime-400  dark:hover:text-black ">
                  Open
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
