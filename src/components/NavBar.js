import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import LinkedIn from "../assets/img/linkedin.svg"
import Github from "../assets/img/github.svg"
import logo from "../assets/img/logo.png"
import { useState, useEffect } from "react"

function NavBar() {
   const [scrolled, setScrolled] = useState(false)

   useEffect(() => {
      const onScroll = () => {
         if (window.scrollY > 50) {
            setScrolled(true)
         } else {
            setScrolled(false)
         }
      }

      window.addEventListener("scroll", onScroll)

      return () => window.removeEventListener("scroll", onScroll)
   }, [setScrolled])


   const onButtonClick = () => {
      const rawURL = "Ossama_Elhelali.pdf";

      fetch(rawURL).then((response) => {
         response.blob().then((blob) => {
            const fileURL = window.URL.createObjectURL(blob);

            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "Ossama_Elhelali.pdf";
            alink.click();
         });
      });
   };
   return (
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
         <Container>
            <Navbar.Brand href="#home">
               <img src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
               <span className="navbar-toggler-icon "></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
               <span className="navbar-text">
                  <div className="social-icon">
                     <a href="https://www.linkedin.com/in/ossamaelhelali/">
                        <img src={LinkedIn} alt="Description" />
                     </a>
                     <a href="https://github.com/Ossama-E">
                        <img src={Github} alt="Description" />
                     </a>
                  </div>
                  <button className="link-btn" onClick={onButtonClick}>Download My Resume :)</button>
               </span>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}

export default NavBar
