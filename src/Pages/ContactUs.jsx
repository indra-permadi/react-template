import React from "react";
import SvgImageLogo from "../assets/images/contact.svg";
import { Cardbox } from "../Component/Card/Cardbox";

const ContactUs = () => {
  return (
    <>
      {/* Start Hero */}
      <section className="relative table w-full py-36 bg-[url('../../assets/images/company/aboutus.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-black opacity-75" />
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">
              Contact Us
            </h3>
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-block">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <a href="index.html">Techwind</a>
            </li>
            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <i className="uil uil-angle-right-b" />
            </li>
            <li
              className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              Contact Us
            </li>
          </ul>
        </div>
      </section>
      {/*end section*/}
      <div className="relative">
        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
          <svg
            className="w-full h-auto scale-[2.0] origin-top"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      {/* End Hero */}
      {/* Start Section*/}
      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
            <Cardbox cardName="Phone" cardValue="+152 534-468-854" cardDesc="The phrasal sequence of the is now so that many campaign and benefit" />
            <Cardbox cardName="Email" cardValue="contact@example.com" cardDesc="The phrasal sequence of the is now so that many campaign and benefit" />
            <Cardbox cardName="Location" cardValue="View on Google map" cardDesc="C/54 Northwest Freeway, Suite 558, Houston, USA 485" />
            
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-7 md:col-span-6">
              <img src={SvgImageLogo} alt="" />
            </div>
            <div className="lg:col-span-5 md:col-span-6">
              <div className="lg:ms-5">
                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
                  <h3 className="mb-6 text-2xl leading-normal font-medium">
                    Get in touch !
                  </h3>
                  <form
                    method="post"
                    name="myForm"
                    id="myForm"
                    // onsubmit="return validateForm()"
                  >
                    <p className="mb-0" id="error-msg" />
                    <div id="simple-msg" />
                    <div className="grid lg:grid-cols-12 lg:gap-6">
                      <div className="lg:col-span-6 mb-5">
                        <div className="text-start">
                          <label htmlFor="name" className="font-semibold">
                            Your Name:
                          </label>
                          <div className="form-icon relative mt-2">
                            <i
                              data-feather="user"
                              className="w-4 h-4 absolute top-3 start-4"
                            />
                            <input
                              name="name"
                              id="name"
                              type="text"
                              className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                              placeholder="Name :"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="lg:col-span-6 mb-5">
                        <div className="text-start">
                          <label htmlFor="email" className="font-semibold">
                            Your Email:
                          </label>
                          <div className="form-icon relative mt-2">
                            <i
                              data-feather="mail"
                              className="w-4 h-4 absolute top-3 start-4"
                            />
                            <input
                              name="email"
                              id="email"
                              type="email"
                              className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                              placeholder="Email :"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1">
                      <div className="mb-5">
                        <div className="text-start">
                          <label htmlFor="subject" className="font-semibold">
                            Your Question:
                          </label>
                          <div className="form-icon relative mt-2">
                            <i
                              data-feather="book"
                              className="w-4 h-4 absolute top-3 start-4"
                            />
                            <input
                              name="subject"
                              id="subject"
                              className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                              placeholder="Subject :"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-5">
                        <div className="text-start">
                          <label htmlFor="comments" className="font-semibold">
                            Your Comment:
                          </label>
                          <div className="form-icon relative mt-2">
                            <i
                              data-feather="message-circle"
                              className="w-4 h-4 absolute top-3 start-4"
                            />
                            <textarea
                              name="comments"
                              id="comments"
                              className="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                              placeholder="Message :"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      id="submit"
                      name="send"
                      className="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md justify-center flex items-center"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End Section*/}
    </>
  );
};

export default ContactUs;
