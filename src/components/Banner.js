import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"
import { useCallback } from "react"

const toRotate = ["Web Developer", "Problem-solver", "Learner", "Soccer player"]
export const Banner = () => {
   const [currTitle, setCurrTitle] = useState(0)
   const [isDeleting, setIsDeleting] = useState(false)
   const [text, setText] = useState("")
   const [delta, setDelta] = useState(300 - Math.random() * 100)
   const period = 700

   const tick = useCallback(() => {
      let i = currTitle % toRotate.length
      let fullText = toRotate[i]
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
      setText(updatedText)

      if (isDeleting) {
         setDelta((prevDelta) => prevDelta / 2)
      }
      if (!isDeleting && updatedText === fullText) {
         setIsDeleting(true)
         setDelta(period)
      } else if (isDeleting && updatedText === "") {
         setIsDeleting(false)
         setCurrTitle(currTitle + 1)
         setDelta(500)
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
            <Row class="align-items-center">
               <Col xs={12} md={6} xl={7}>
                  <span className="tagline"> Welcome To My Portfolio</span>
                  <h1>
                     Hello, I'm a <span className="wrap">{text}</span>
                  </h1>
                  <p>I'm also Ossama</p>
                  <a className="link-btn" href="https://www.linkedin.com/in/ossamaelhelali">
                     <button>
                        Let's Connect
                        <ArrowRightCircle size={25} />
                     </button>
                  </a>
               </Col>
               <Col xs={12} md={6} xl={5}>
                  <img src={headerImg} alt="Header Img" />
               </Col>
            </Row>
         </Container>
      </section>
   )
}
