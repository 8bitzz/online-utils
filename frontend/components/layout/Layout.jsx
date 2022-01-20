import React from "react";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";

const Layout = ({children}) => {
  return (
    <div>
      <NavBar />
      <main className="mt-14 container mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
