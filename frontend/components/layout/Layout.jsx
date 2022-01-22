import React from "react";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";

const Layout = ({children}) => {
  return (
    <div className="bg-monaco-dark">
      <NavBar />
      <main className="mt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
