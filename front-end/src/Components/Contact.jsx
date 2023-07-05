import { useState } from "react";

function Contact() {

  const [Animate , setAnimate]= useState(false);

  const transit=()=>{
    setAnimate(!Animate);
  }

  return (
    <div className="bg-light text-dark pb-20 min-h-screen">
      <div className="text-center mb-20">
        <p className="font-bold text-3xl">Get In Touch</p>
        <p className="text-sm">Contact Me</p>
      </div>
      <div>
        <div>
          <p className="text-center text-lg font-semibold my-5">Write Me</p>
          <div className="px-5 mx-auto w-full lg:max-w-2xl">
            <div>
              <label
                htmlFor="website-admin"
                className="block mb-2 font-semibold text-base text-gray-900 dark:text-dark"
              >
                Name
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm bg-gray-100  border-gray-300 text-dark placeholder-dark border border-r-0 rounded-l-md ">
                  @
                </span>
                <input
                  type="text"
                  id="website-admin"
                  className="rounded-none rounded-r-lg bg-gray-100 border border-gray-300 text-dark placeholder-dark focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  "
                  placeholder="Enter Your Name"
                />
              </div>
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
                rows="4"
                className="block p-2.5 w-full text-sm bg-gray-100 border-gray-300 text-dark placeholder-dark rounded-lg border focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Leave a comment..."
              ></textarea>

              <button onClick={transit} className="flex items-center my-5 bg-moderate text-light py-2 px-4 text-sm font-semibold border rounded-md hover:shadow-lg">
                <span className="mr-2">Send</span>
                 <span className={`pr-3 transition duration-1000 hover:translate-x-5`}> {/* ${Animate ? "transition duration-1000 translate-x-96" : ""} */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentcolor"
                  className="h-6 w-6 y-5"
                >
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>

                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
