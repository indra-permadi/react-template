import FeatherIcon from "feather-icons-react";
import { useEffect, useState } from "react";
import NavbarMain from "../Component/Navbar/NavbarMain";
import { Outlet } from "react-router-dom";
import FooterData from "../Component/Footer/Footer";
import NavbarCenter from "../Component/Navbar/NavbarCenter";

function Root() {
  return (
    <>
      <NavbarCenter />
      <section className="relative md:py-24 py-16">
        
        <Outlet />
      </section>
      <FooterData/>
    </>
  );
}

export default Root;
