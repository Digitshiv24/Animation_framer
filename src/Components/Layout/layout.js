import React from "react";
import Header from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
// import FilterAnimation from '../FilterAnimation/FilterAnimation'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
