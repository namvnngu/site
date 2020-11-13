import React from "react";
import NavBar from "../components/Navbar";
import Social from "../components/Social";

const Contact = () => {
  return (
    <>
      <NavBar />
      <div className="contact">
        <h1 className="xin-chao has-text-grey">G'day!</h1>
        <Social />
      </div>
    </>
  );
};

export default Contact;
