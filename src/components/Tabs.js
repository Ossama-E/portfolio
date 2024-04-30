import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import { WorkCard } from "./WorkCard.js"
import { EduCard } from "./EduCard.js"
import colorSharp2 from "../assets/img/color-sharp2.png"
import NeighBoard from "../assets/img/NeighBoard.png"
import LCHints from "../assets/img/LCHints.png"
import FundFlow from "../assets/img/FundFlow.png"
import Sortify from "../assets/img/SortifyAI.png"
import MD from "../assets/img/MD2.png"
import Kenna from "../assets/img/Kenna.png"
import CCG from "../assets/img/CCG.png"
import tabLogo from "../assets/img/tab.png"
import Uw from "../assets/img/uw.png"
import Wlu from "../assets/img/wlu.png"

export const Info = () => {
   const projects = [
      {
         title: "NeighBoard",
         description: "A Vue.js-based community platform for sharing neighbourhood activities and reports.",
         imgUrl: NeighBoard,
         projectUrl: "https://neighboard.netlify.app/#/",
      },
      {
         title: "LCHints",
         description: "An AI-assisted LeetCode help platform using OpenAI's GPT-3.5 engine",
         imgUrl: LCHints,
         projectUrl: "https://lchints-web.herokuapp.com/",
      },
      {
         title: "FundFlow",
         description: "An efficient web-based banking app for real-time account management and transactions.",
         imgUrl: FundFlow,
         projectUrl: "https://ossama-e.github.io/FundFlow/index.html",
      },
      {
         title: "Sortify.AI",
         description: "An ML-powered app for real-time waste sorting, featured at UTM's 2023 DeerHacks Hackathon.",
         imgUrl: Sortify,
         projectUrl: "test.com",
      },
   ]
   const experience = [
      {
         companyName: "Kenna",
         jobTitle: "Full Stack Developer Intern",
         companyLogo: Kenna,
         jobDescription: [
            `Winter2024 - Diving deeper into React, Node, and SQL.`,
         ],
         fromDate: "Jan 2024",
         toDate: "Present",
      },
      {
         companyName: "Coach Chihab Group - Part Time",
         jobTitle: "Software Engineer",
         companyLogo: CCG,
         jobDescription: [
            `Engineered a Vue.js-based check-in platform, reducing check-in time by 95% and processing over 50 attendees.`,
            `Utilized Firebase's Real-time Database API for dynamic monitoring and visualization of attendee check-in metrics.`,
            `Analyzed and compiled a dataset of 5+ LMSs according to attendees' profiles.`,
         ],
         fromDate: "Aug 2023",
         toDate: "Dec 2023",
      },
      {
         companyName: "MuslimDo",
         jobTitle: "Software Engineer Intern",
         companyLogo: MD,
         jobDescription: [
            `Engineered multiple CRUD systems, enabling efficient communications with backend services, and enhancing overall application performance.`,
            `Utilized user behavior analytics tools to systematically improve UX, resulting in more intuitive navigation and user flow on the company’s app and website.`,
            `Selected as MuslimDo's inaugural intern due to proactive initiative and dedicated outreach.`,
         ],
         fromDate: "May 2023",
         toDate: "Aug 2023",
      },
      {
         companyName: "Thomas A. Blakelock",
         jobTitle: "Math Tutor",
         companyLogo: tabLogo,
         jobDescription: [
            `Developed, implemented, and explained practice problems for students.`,
            `Assessed students' skills; guided growth in strengths and overcoming weaknesses.
         `,
         ],
         fromDate: "Dec 2021",
         toDate: "Mar 2022",
      },
   ]

   const education = [
      {
         name: "University of Waterloo",
         program: "Bachelor of Computer Science",
         fromDate: "Sep 2022",
         toDate: "Apr 2027",
         schoolLogo: Uw,
         relevantCourses: ["Algorithm Design and Data Abstraction", "Tools and Techniques for Software Development", "Object-Oriented Software Development"],
      },
      {
         name: "Wilfrid Lauirer University",
         program: "Bachelor of Business Administration",
         fromDate: "Sep 2022",
         toDate: "Apr 2027",
         schoolLogo: Wlu,
         relevantCourses: [],
      },
   ]

   return (
      <section className="project" id="project">
         <Container>
            <Row>
               <Col>
                  <h2 className="pb-5">More About Me</h2>
                  <Tab.Container className="tabs-content" id="projects-tab" defaultActiveKey="first" >
                     <Nav className="nav-pills mb-5 justify-content-center align-items-center">
                        <Nav.Item>
                           <Nav.Link eventKey="first">Experience</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                           <Nav.Link eventKey="second">Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                           <Nav.Link eventKey="third">Education</Nav.Link>
                        </Nav.Item>
                     </Nav>
                     <Tab.Content>
                        <Tab.Pane eventKey="first">
                           <Row>
                              {experience.map((experience, index) => {
                                 return <WorkCard key={index} {...experience} />
                              })}
                           </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                           <Row>
                              {projects.map((project, index) => {
                                 return <ProjectCard key={index} {...project} />
                              })}
                           </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                           <Row>
                              {education.map((school, index) => {
                                 return <EduCard key={index} {...school} />
                              })}
                           </Row>
                        </Tab.Pane>
                     </Tab.Content>
                  </Tab.Container>
               </Col>
            </Row>
         </Container>
         <img className="background-image-right" src={colorSharp2} alt="background-color"></img>
      </section>
   )
}
