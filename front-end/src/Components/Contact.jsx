

function Contact() {


  return (
    <div className="bg-light text-dark pb-20 min-h-screen">
      <div className="text-center mb-20">
        <p className="font-bold text-3xl">Get In Touch</p>
        <p className="text-sm">Contact Me</p>
      </div>
      <div className=" max-w-4xl mx-auto flex flex-col md:flex-row justify-around">
        <div className="p-5 flex flex-wrap max-md:justify-around md:flex-col">
          <div className="mx-2 bg-gray-100 border-2 my-4 p-5 rounded-lg w-40 object-contain hover:shadow-lg hover:border-gray-300">
          <svg className="w-6 h-6 mb-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
            <p className="font-bold text-md">E-mail</p>
            <p className="text-xs">ysuthar8055@gmail.com</p>
          </div>
          <div className="mx-2 bg-gray-100 border-2 my-4 p-5 rounded-lg w-40 object-contain hover:shadow-lg hover:border-gray-300">
          <svg className="w-6 h-6 mb-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
            <p className="font-bold text-md">Twitter</p>
            <p className="text-xs">@yash__dev</p>
          </div>
          <div className="mx-2 bg-gray-100 border-2 my-4 p-5 rounded-lg w-40 object-contain hover:shadow-lg hover:border-gray-300">
          <svg className="w-6 h-6 mb-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
            <p className="font-bold text-md">GitHub</p>
            <p className="text-xs">@Yash636261</p>
          </div>
        </div>
        <div className="md:w-96">
          <p className="text-center text-lg font-semibold my-5">Write Me</p>
          <div className="px-5 w-full ">
            <div>
              <label
                htmlFor="website-admin"
                className="block mb-2 font-semibold text-base text-gray-900 dark:text-dark"
              >
                Name
              </label>
                <input
                  type="text"
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

              <button  className=" flex items-center my-5 bg-moderate text-light py-2 px-4 text-sm font-semibold border rounded-md hover:shadow-lg">
                <span className="mr-2">Send</span>
                 <span className={`pr-3 transition duration-1000 hover:translate-x-5`}>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
