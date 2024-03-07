import React from "react";
import NavbarMain from "../Component/Navbar/NavbarMain";

const Home = () => {
  return (
    <>
      <div className="container relative">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
          <div className="md:col-span-6">
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-7">
                <div className="grid grid-cols-1 gap-4">
                  <img
                    src="assets/images/event/1.jpg"
                    className="shadow rounded-lg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-span-5">
                <div className="grid grid-cols-1 gap-4">
                  <img
                    src="assets/images/event/2.jpg"
                    className="shadow rounded-lg"
                    alt=""
                  />
                  <div className="w-28 h-28 bg-indigo-600/10 rounded-lg" />
                </div>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div className="md:col-span-6">
            <div className="lg:ms-5">
              <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
                Outpace Your Competition
              </h6>
              <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                Get access to the full <br /> conference experience.
              </h3>
              <p className="text-slate-400 max-w-xl mb-6">
                Get instant helpful resources about anything on the go, easily
                implement secure money transfer solutions, boost your daily
                efficiency, connect to other app users and create your own
                Techwind network, and much more with just a few taps. commodo
                consequat. Duis aute irure.
              </p>
              <div className="flex mt-6">
                <i className="uil uil-map-marker text-indigo-600 text-4xl me-4 mt-2" />
                <div className="">
                  <h5 className="text-xl font-semibold mb-0">Location</h5>
                  <p className="text-slate-400 mt-2">
                    C/54 Northwest Freeway, <br /> Suite 558, Houston, <br />{" "}
                    USA 485
                  </p>
                </div>
              </div>
              <div className="flex mt-6">
                <i className="uil uil-clock text-indigo-600 text-4xl me-4 mt-2" />
                <div className="">
                  <h5 className="text-xl font-semibold mb-0">Time</h5>
                  <p className="text-slate-400 mt-2">
                    October 11, 2022 <br /> 9:00A.M. - 12:00P.M.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end container*/}
      {/* Team */}
      <div className="container relative md:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
            Event Speakers
          </h6>
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Meet Our Speakers
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            Start working with Tailwind CSS that can provide everything you need
            to generate awareness, drive traffic, connect.
          </p>
        </div>
        {/*end grid*/}
        <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
          <div className="lg:col-span-3 md:col-span-6">
            <div className="group text-center">
              <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                <img src="assets/images/client/04.jpg" className="" alt="" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 duration-500" />
                <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                  <li className="inline">
                    <a
                      href=""
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"
                    >
                      <i data-feather="facebook" className="h-4 w-4" />
                    </a>
                  </li>
                  <li className="inline">
                    <a
                      href=""
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"
                    >
                      <i data-feather="instagram" className="h-4 w-4" />
                    </a>
                  </li>
                  <li className="inline">
                    <a
                      href=""
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"
                    >
                      <i data-feather="linkedin" className="h-4 w-4" />
                    </a>
                  </li>
                </ul>
                {/*end icon*/}
              </div>
              <div className="content mt-3">
                <a
                  href=""
                  className="text-lg font-semibold hover:text-indigo-600 duration-500"
                >
                  Jack John
                </a>
                <p className="text-slate-400">Speaker</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-6">
            <div className="group text-center">
              <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                <img src="assets/images/client/05.jpg" className="" alt="" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 duration-500" />
                <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                  <li className="inline">
                    <a
                      href=""
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"
                    >
                      <i data-feather="facebook" className="h-4 w-4" />
                    </a>
                  </li>
                  <li className="inline">
                    <a
                      href=""
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"
                    >
                      <i data-feather="instagram" className="h-4 w-4" />
                    </a>
                  </li>
                  <li className="inline">
                    <a
                      href=""
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"
                    >
                      <i data-feather="linkedin" className="h-4 w-4" />
                    </a>
                  </li>
                </ul>
                {/*end icon*/}
              </div>
              <div className="content mt-3">
                <a
                  href=""
                  className="text-lg font-semibold hover:text-indigo-600 duration-500"
                >
                  Krista John
                </a>
                <p className="text-slate-400">Speaker</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-6">
            <div className="group text-center">
              <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                <img src="assets/images/client/06.jpg" className="" alt="" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 duration-500" />
                <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                  <li className="inline">
                    <a
                      href=""
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"
                    >
                      <i data-feather="facebook" className="h-4 w-4" />
                    </a>
                  </li>
                  <li className="inline">
                    <a
                      href=""
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"
                    >
                      <i data-feather="instagram" className="h-4 w-4" />
                    </a>
                  </li>
                  <li className="inline">
                    <a
                      href=""
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"
                    >
                      <i data-feather="linkedin" className="h-4 w-4" />
                    </a>
                  </li>
                </ul>
                {/*end icon*/}
              </div>
              <div className="content mt-3">
                <a
                  href=""
                  className="text-lg font-semibold hover:text-indigo-600 duration-500"
                >
                  Roger Jackson
                </a>
                <p className="text-slate-400">Speaker</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-6">
            <div className="group text-center">
              <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                <img src="assets/images/client/07.jpg" className="" alt="" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 duration-500" />
                <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                  <li className="inline">
                    <a
                      href=""
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"
                    >
                      <i data-feather="facebook" className="h-4 w-4" />
                    </a>
                  </li>
                  <li className="inline">
                    <a
                      href=""
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"
                    >
                      <i data-feather="instagram" className="h-4 w-4" />
                    </a>
                  </li>
                  <li className="inline">
                    <a
                      href=""
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"
                    >
                      <i data-feather="linkedin" className="h-4 w-4" />
                    </a>
                  </li>
                </ul>
                {/*end icon*/}
              </div>
              <div className="content mt-3">
                <a
                  href=""
                  className="text-lg font-semibold hover:text-indigo-600 duration-500"
                >
                  Johnny English
                </a>
                <p className="text-slate-400">Speaker</p>
              </div>
            </div>
          </div>
        </div>
        {/*end grid*/}
      </div>
      {/*end container*/}
      {/* team */}
    </>
  );
};

export default Home;
