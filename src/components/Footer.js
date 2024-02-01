import { Container, Row, Col } from "react-bootstrap"
import LinkedIn from "../assets/img/linkedin.svg"
import Github from "../assets/img/github.svg"
import logo from "../assets/img/logo.png"
export const Footer = () => {
   return (
      <footer className="footer">
         <Container>
            <Row className="align-item-center">
               <Col sm={6}>
                  <img className="" src={logo} alt="logo" />
               </Col>
               <Col sm={6} className="text-center text-sm-end">
                  <div className="social-icon mt-5">
                     <a href="https://www.linkedin.com/in/ossamaelhelali/">
                        <img src={LinkedIn} alt="icon"></img>
                     </a>
                     <a href="https://github.com/Ossama-E">
                        <img src={Github} alt="icon"></img>
                     </a>
                  </div>
                  <p>CopyRight 2024. All Rights Reserved</p>
               </Col>
            </Row>
         </Container>
      </footer>
   )
}
