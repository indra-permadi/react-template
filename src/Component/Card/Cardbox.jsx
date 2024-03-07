import React from "react";

export const Cardbox = (props) => {
    
  return (
    <>
      <div className="text-center px-6 mt-6">
        <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
          <i className="uil uil-phone" />
        </div>
        <div className="content mt-7">
          <h5 className="title h5 text-xl font-medium">{props.cardName}</h5>
          <p className="text-slate-400 mt-3">
            {props.cardDesc}
          </p>
          <div className="mt-5">
            <a
              href="tel:+152534-468-854"
              className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
            >
              {props.cardValue}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
