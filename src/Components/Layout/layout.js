import React from "react";
import Header from "../Layout/Navbar/Navbar";
import Footer from "../Layout/Footer/Footer";
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
