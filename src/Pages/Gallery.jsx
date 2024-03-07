import React, { useState } from "react";
import dataGallery from "../assets/dataGallery.json";
import FeatherIcon from "feather-icons-react";

const Gallery = () => {
  console.log(dataGallery);
  return (
    <>
      {/* Start Home */}
      <section
        className="relative md:py-56 py-44 bg-[url('../../assets/images/photography/photographer.jpg')] bg-cover jarallax"
        data-jarallax=""
        data-speed="0.5"
        id="aboutme"
      >
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t to-transparent via-white/80 dark:via-slate-900/80 from-white dark:from-slate-900" />
        <div className="absolute text-center p-6 bottom-0 start-0 end-0">
          <h3 className="md:text-3xl md:leading-normal text-2xl leading-normal font-bold">
            Gallery
          </h3>
        </div>
      </section>
      {/*end section*/}
      {/* End Home */}
      {/* Start Section*/}
      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid grid-cols-1 items-center gap-[30px]">
            <div className="filters-group-wrap text-center">
              <div className="filters-group">
                <ul className="mb-0 list-none container-filter-border-bottom filter-options space-x-3">
                  <li
                    className="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500 active"
                    data-group="all"
                  >
                    All
                  </li>
                  <li
                    className="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500"
                    data-group="branding"
                  >
                    Branding
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*grid*/}
          <div id="grid" className="md:flex justify-center mx-auto mt-4">
            {dataGallery.map((datas, index) => {
              return (
                <div
                  className="lg:w-1/4 md:w-1/3 p-1 picture-item"
                  data-groups='["branding"]'
                >
                  <div className="group relative block overflow-hidden rounded-md duration-500">
                    <img src={datas.imageUrl} className="" alt={datas.description} />
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                      <a
                        href={datas.imageUrl} 
                        className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"
                      >
                        <FeatherIcon icon="camera" />
                        {/* <i className="uil uil-camera" /> */}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/*end grid*/}
          <div className="grid grid-cols-1 mt-8">
            <div className="text-center">
              <a
                href="photography-portfolio.html"
                className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-slate-400 dark:text-white/70 dark:hover:text-white hover:text-indigo-600 after:bg-indigo-600 dark:after:bg-white duration-500 ease-in-out"
              >
                See More <i className="uil uil-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
    </>
  );
};

export default Gallery;
