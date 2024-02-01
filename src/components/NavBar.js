import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import LinkedIn from "../assets/img/linkedin.svg"
import Github from "../assets/img/github.svg"
import logo from "../assets/img/logo.png"
import { useState, useEffect } from "react"

function NavBar() {
   const [activeLink, setActiveLink] = useState("home")
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

   const onUpdateActiveLink = (value) => {
      setActiveLink(value)
   }

   const onButtonClick = () => {
      const rawURL = "https://raw.githubusercontent.com/Ossama-E/portfolio/master/Ossama_Elhelali.pdf";

      fetch(rawURL).then((response) => {
         response.blob().then((blob) => {
            const fileURL = window.URL.createObjectURL(blob);

            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "SamplePDF.pdf";
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
                  {/* <a className="link-btn" href="https://www.linkedin.com/in/ossamaelhelali">
                     <button className="vvd">Contact Me!</button>
                  </a> */}
                  <a className="link-btn" onClick={onButtonClick}>
                     <button className="vvd">Download My Resume :)</button>
                  </a>
               </span>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}

export default NavBar
