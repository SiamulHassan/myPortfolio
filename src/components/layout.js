import React from "react";
import Navbar from "./Navbar/NavigationMenu";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
