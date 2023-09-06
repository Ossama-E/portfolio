import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"
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
   return (
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
         <Container>
            <Navbar.Brand href="#home">OE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
               <span className="navbar-toggler-icon "></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  <Nav.Link
                     href="#home"
                     className={activeLink === "home" ? "active  navbar-link" : "navbar-link"}
                     onClick={() => onUpdateActiveLink("home")}
                  >
                     Home
                  </Nav.Link>
                  <Nav.Link
                     href="#projects"
                     className={activeLink === "projects" ? "active  navbar-link" : "navbar-link"}
                     onClick={() => onUpdateActiveLink("projects")}
                  >
                     Projects
                  </Nav.Link>
                  <Nav.Link
                     href="#exp"
                     className={activeLink === "experience" ? "active  navbar-link" : "navbar-link"}
                     onClick={() => onUpdateActiveLink("experience")}
                  >
                     Experience
                  </Nav.Link>
               </Nav>
               <span className="navbar-text">
                  <div className="social-icon">
                     <a href="#home">
                        <img src={navIcon1} alt="Description" />
                     </a>
                     <a>
                        <img src={navIcon2} alt="Description" />
                     </a>
                     <a>
                        <img src={navIcon3} alt="Description" />
                     </a>
                  </div>
                  <button className="vvd" onClick={() => console.log("connect")}></button>
               </span>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}

export default NavBar
