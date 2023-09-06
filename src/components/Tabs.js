import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import { WorkCard } from "./WorkCard.js"
import { EduCard } from "./EduCard.js"
import colorSharp2 from "../assets/img/color-sharp2.png"
import NeighBoard from "../assets/img/NeighBoard.png"
import LCHints from "../assets/img/LCHints.png"
import FundFlow from "../assets/img/FundFlow.png"
import Sortify from "../assets/img/Sortify.png"

export const Projects = () => {
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
         companyName: "MuslimDo",
         jobTitle: "SWE Intern",
         companyLogo: NeighBoard,
         jobDescription: [
            `Engineered multiple CRUD systems, enabling efficient communications with backend services, and enhancing overall application performance.`,
            `Utilized user behavior analytics tools to systematically improve UX, resulting in more intuitive navigation and user flow on the company’s app and website.`,
            `Selected as MuslimDo's inaugural intern due to proactive initiative and dedicated outreach.`,
         ],
         fromDate: "May 2023",
         toDate: "Aug 2023",
      },
      {
         companyName: "Seeds of Leadership",
         jobTitle: "Motion Graphics Designer",
         companyLogo: NeighBoard,
         jobDescription: [
            `Led a team of 3 designers to produce promotional animated videos to attract youth aged 14-19 using Adobe After Effects.`,
            `Developed and pitched storyboards and timelines for assigned projects.`,
            `Managed the entire video production process from brainstorming to providing feedback on other designers’ work.`,
         ],
         fromDate: "Jul 2022",
         toDate: "Sep 2022",
      },
      {
         companyName: "Thomas A. Blakelock",
         jobTitle: "Math Tutor",
         companyLogo: NeighBoard,
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
         program: "Bachelor's of Computer Science",
         fromDate: "Sep 2022",
         toDate: "Apr 2027",
         schoolLogo: "",
         relevantCourses: ["Algorithm Design and Data Abstraction", "Tools and Techniques for Software Development", "Object-Oriented Software Development"],
      },
      {
         name: "Wilfrid Lauirer University",
         program: "Bachelor's of Business Administration",
         fromDate: "Sep 2022",
         toDate: "Apr 2027",
         schoolLogo: "",
         relevantCourses: [],
      },
   ]

   return (
      <section className="project" id="project">
         <Container>
            <Row>
               <Col>
                  <h2 className="pb-5">Projects and Experience</h2>
                  <Tab.Container id="projects-tab" defaultActiveKey="first">
                     <Nav className="nav-pills mb-5 justify-content-center align-items-center">
                        <Nav.Item>
                           <Nav.Link eventKey="first">Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                           <Nav.Link eventKey="second">Experience</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                           <Nav.Link eventKey="third">Education</Nav.Link>
                        </Nav.Item>
                     </Nav>
                     <Tab.Content>
                        <Tab.Pane eventKey="first">
                           <Row>
                              {projects.map((project, index) => {
                                 return <ProjectCard key={index} {...project} />
                              })}
                           </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                           <Row>
                              {experience.map((experience, index) => {
                                 return <WorkCard key={index} {...experience} />
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
