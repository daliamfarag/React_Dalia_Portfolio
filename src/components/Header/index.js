
import React, { useState } from "react";
import About from "../../components/About";
import Nav from "../../components/Nav";
import Portfolio from "../../components/Portfolio";
import ContactForm from "../../components/Contact";
import Resume from "../../components/Resume";

function Header() {
  // state of current page
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
    // switch statement that will return the appropriate component of the 'currentPage'
    switch (currentPage) {
      case "about":
        return <About></About>;
      case "contact":
        return <ContactForm></ContactForm>;
      case "portfolio":
        return <Portfolio></Portfolio>;
      case "resume":
        return <Resume></Resume>;
      default:
        return <About></About>;
    }
  };

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {// Render the component returned by 'renderPage()'
        renderPage()}
      </div>
    </div>
  );
}

export default Header;
