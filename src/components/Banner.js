import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Download, Envelope } from "react-bootstrap-icons"
import headerImg from "../assets/img/headShot.jpeg"
import { useCallback } from "react"
import resume from "../assets/pdf/Ossama_Elhelali_Resume.pdf"

const toRotate = ["Full-Stack Developer", "ML Engineer", "Problem Solver", "Team Player", "Innovator"]
export const Banner = () => {
   const [currTitle, setCurrTitle] = useState(0)
   const [isDeleting, setIsDeleting] = useState(false)
   const [text, setText] = useState("")
   const [delta, setDelta] = useState(50)
   const period = 700

   const tick = useCallback(() => {
      let i = currTitle % toRotate.length
      let fullText = toRotate[i]
      let updatedText = isDeleting ? fullText.substring(0, text.length - 2) : fullText.substring(0, text.length + 1)
      setText(updatedText)

      if (isDeleting) {
         setDelta((prevDelta) => prevDelta / 1.8)
      }
      if (!isDeleting && updatedText === fullText) {
         setIsDeleting(true)
         setDelta(period)
      } else if (isDeleting && updatedText === "") {
         setIsDeleting(false)
         setCurrTitle(currTitle + 1)
         setDelta(100)
      }
   }, [text, isDeleting, currTitle])

   useEffect(() => {
      let ticker = setInterval(() => {
         tick()
      }, delta)
      return () => {
         clearInterval(ticker)
      }
   }, [text, delta, tick])

   return (
      <section className="banner" id="home">
         <Container>
            <Row className="align-items-center">
               <Col xs={12} md={6} xl={7} className="welcome-container">
                  <span className="tagline">Computer Science Student at University of Waterloo</span>
                  <h1>
                     Hi, I'm <span className="highlight">Ossama Elhelali</span>
                  </h1>
                  <h2 className="subtitle">
                     A passionate <span className="wrap">{text}</span>
                  </h2>
                  <p className="summary">
                     Computer Science student with 2+ years of experience building scalable applications. 
                     Currently interning at MedSender, where I've reduced system latency by 90%+ and 
                     achieved 99.3% accuracy in ML models. Passionate about full-stack development, 
                     machine learning, and creating impactful solutions.
                  </p>
                  <div className="banner-buttons">
                     <a className="link-btn" href={resume} download="OssamaElhelaliResume">
                        <button className="primary-btn">
                           <Download size={20} />
                           Download Resume
                        </button>
                     </a>
                     <a className="link-btn" href="https://www.linkedin.com/in/ossamaelhelali" target="_blank" rel="noopener noreferrer">
                        <button className="secondary-btn">
                           <Envelope size={20} />
                           Connect on LinkedIn
                        </button>
                     </a>
                  </div>
                  <div className="quick-stats">
                     <div className="stat">
                        <span className="stat-number">2+</span>
                        <span className="stat-label">Years Experience</span>
                     </div>
                     <div className="stat">
                        <span className="stat-number">10+</span>
                        <span className="stat-label">Projects Built</span>
                     </div>
                     <div className="stat">
                        <span className="stat-number">5</span>
                        <span className="stat-label">Internships</span>
                     </div>
                  </div>
               </Col>
               <Col xs={12} md={6} xl={5} className="profile-image-container">
                  <div className="profile-image-wrapper">
                     <img className="profile-image" src={headerImg} alt="Ossama Elhelali" />
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   )
}
