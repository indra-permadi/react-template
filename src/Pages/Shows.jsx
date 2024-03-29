import React from "react";

const Shows = () => {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center text-center bg-[url('../../assets/images/utility.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
        <div className="container relative">
          <div className="grid grid-cols-1">
            <img
              src="assets/images/logo-light.png"
              className="mx-auto"
              alt=""
            />
            <h1 className="text-white mb-6 mt-8 md:text-5xl text-3xl font-bold">
              We Are Back Soon...
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Start working with Techwind that can provide everything you need
              to generate awareness, drive traffic, connect.
            </p>
          </div>
          {/*end grid*/}
          <div className="grid grid-cols-1 mt-10">
            <div className="text-center">
              <span
                id="maintenance"
                className="timer text-white text-[56px] tracking-[1px]"
              />
              <span className="block text-base font-semibold uppercase text-white">
                Minutes
              </span>
            </div>
          </div>
          {/*end grid*/}
          <div className="grid grid-cols-1 mt-6">
            <div className="text-center subcribe-form">
              <form className="relative mx-auto max-w-xl">
                <input
                  type="email"
                  id="subemail"
                  name="name"
                  className="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border border-gray-100 dark:border-gray-700"
                  placeholder="Enter your email id.."
                />
                <button
                  type="submit"
                  className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full"
                >
                  Subcribe Now
                </button>
              </form>
              {/*end form*/}
            </div>
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      <div className="fixed bottom-3 end-3">
        <a
          href=""
          className="back-button h-9 w-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"
        >
          <i data-feather="arrow-left" className="h-4 w-4" />
        </a>
      </div>
    </>
  );
};

export default Shows;
