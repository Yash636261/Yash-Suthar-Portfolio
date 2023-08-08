import { useState } from "react";
import axios from "axios";
import { Element } from "react-scroll/modules";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("triggered");

    try {
      // Send the form data to the server using Axios
      const response = await axios.post(
        "http://localhost:4000/api/formData",
        formData
      );
      console.log("Server Response:", response.data);

      // Optionally, handle any further actions after successful form submission
      // For example, show a success message, redirect the user, etc.

      // Reset the form after successful submission
      setFormData({
        name: "", // Reset to empty string
        email: "", // Reset to empty string
        message: "", // Reset to empty string
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Element id="contact-section" className="bg-light text-dark pb-20">
      <div className="text-center mb-20">
        <p className="font-bold text-3xl">Get In Touch</p>
        <p className="text-sm">Contact Me</p>
      </div>
      <div className=" max-w-5xl mx-auto flex flex-col sm:flex-row justify-around">
        <div className="p-5 mx-auto flex flex-wrap max-md:justify-around flex-col">
          <div className="mx-2 bg-gray-100 border-2 my-4 p-5 rounded-lg w-40 object-contain hover:shadow-lg hover:border-gray-300">
            <svg
              className="w-6 h-6 mb-2"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
            </svg>
            <p className="font-bold text-md">E-mail</p>
            <p className="text-xs">ysuthar8055@gmail.com</p>
          </div>
          <div className="mx-2 bg-gray-100 border-2 my-4 p-5 rounded-lg w-40 object-contain hover:shadow-lg hover:border-gray-300">
            <svg
              className="w-6 h-6 mb-2"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>
            <p className="font-bold text-md">Twitter</p>
            <p className="text-xs">@yash__dev</p>
          </div>
          <div className="mx-2 bg-gray-100 border-2 my-4 p-5 rounded-lg w-40 object-contain hover:shadow-lg hover:border-gray-300">
            <svg
              className="w-6 h-6 mb-2"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 496 512"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
            <p className="font-bold text-md">GitHub</p>
            <p className="text-xs">@Yash636261</p>
          </div>
        </div>
        <div className="sm:w-96">
          <p className="text-center text-lg font-semibold my-5">Write Me</p>
          <div className="px-5 w-full">
            <form>
              <div>
                <label
                  htmlFor="website-admin"
                  className="block mb-2 font-semibold text-base text-gray-900 dark:text-dark"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  id="website-admin"
                  className=" rounded-lg bg-gray-100 border border-gray-300 text-dark placeholder-dark focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  "
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mt-5">
                <label
                  htmlFor="email-address-icon"
                  className="block mb-2 font-semibold text-base text-dark"
                >
                  Your Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    id="email-address-icon"
                    className=" border text-sm rounded-lg block w-full pl-10 p-2.5 bg-gray-100 border-gray-300 text-dark placeholder-dark focus:ring-blue-500 focus:border-blue-500"
                    placeholder="name@mail.com"
                  />
                </div>
              </div>
              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="block mb-2 font-semibold text-base"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={handleChange}
                  rows="4"
                  className="block p-2.5 w-full text-sm bg-gray-100 border-gray-300 text-dark placeholder-dark rounded-lg border focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Leave a comment..."
                ></textarea>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  className=" flex items-center my-5 bg-moderate text-light py-2 px-4 text-sm font-semibold border rounded-md hover:shadow-lg"
                >
                  <span className="mr-2">Send</span>
                  <span
                    className={`pr-3 transition duration-1000 hover:translate-x-5`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentcolor"
                      className=" h-6 w-6 y-5"
                    >
                      <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Contact;
