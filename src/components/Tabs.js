import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import { WorkCard } from "./WorkCard.js"
import { EduCard } from "./EduCard.js"
import colorSharp2 from "../assets/img/color-sharp2.png"
import NeighBoard from "../assets/img/NeighBoard.png"
import LCHints from "../assets/img/LCHints.png"
import FundFlow from "../assets/img/FundFlow.png"
import Sortify from "../assets/img/SortifyAI.png"
import Chess from "../assets/img/chess.png"
import LinkedPin from "../assets/img/LinkedPin.jpg"
import MD from "../assets/img/MD2.png"
import Kenna from "../assets/img/Kenna.png"
import IIC from "../assets/img/IICUwaterloo.png"
import CCG from "../assets/img/CCG.png"
import MedSender from "../assets/img/medsender.jpeg"
import tabLogo from "../assets/img/tab.png"
import Uw from "../assets/img/uw.png"
import Wlu from "../assets/img/wlu.png"

export const Info = () => {
   const projects = [
      {
         title: "LinkedPin",
         description: "On the chrome store soon: An AI-powered Chrome extension that summarizes and automates reminders for saved LinkedIn posts, built with React frontend and Java/Spring Boot backend with PostgreSQL database.",
         imgUrl: LinkedPin,
         projectUrl: "https://github.com/Ossama-E/LinkedPin",
      },
      {
         title: "Chess",
         description: "A a full chess game in C++ using advanced OOP, implemented features like checkmate, castling, and more.",
         imgUrl: Chess,
      },
      {
         title: "Sortify.AI",
         description: "An ML-powered app for real-time waste sorting, featured at UTM's 2023 DeerHacks Hackathon.",
         imgUrl: Sortify,
         projectUrl: "https://github.com/Ossama-E/Sortify.AI",
      },
      {
         title: "LCHints",
         description: "An AI-assisted LeetCode help platform using OpenAI's GPT-3.5 engine",
         imgUrl: LCHints,
         projectUrl: "https://lchints-web.herokuapp.com/",
      },
      {
         title: "NeighBoard",
         description: "A Vue.js-based community platform for sharing neighbourhood activities and reports.",
         imgUrl: NeighBoard,
         projectUrl: "https://neighboard.netlify.app/#/",
      },
      {
         title: "FundFlow",
         description: "An efficient web-based banking app for real-time account management and transactions.",
         imgUrl: FundFlow,
         projectUrl: "https://ossama-e.github.io/FundFlow/index.html",
      }

   ]
   const experience = [
      {
         companyName: "MedSender",
         jobTitle: "Software Engineer",
         companyLogo: MedSender,
         jobDescription: [
            'Reduced developer onboarding time by 90% by Dockerizing the web app and integrating SQL, Redis, and ELK.',
            'Implemented a scalable number lookup service with RESTful APIs and robust error handling.',
            'Optimized a 2FA service with enhanced authentication protocols for secure user onboarding.',
         ],
         fromDate: "Jan 2025",
         toDate: "Present",
      },
      {
         companyName: "IIC UWaterloo",
         jobTitle: "Software Engineer",
         companyLogo: IIC,
         jobDescription: [
            'Accelerated search results by 20% by implementing a dynamic filter to remove outdated and empty records',
            'Cut email manual errors by 30 % through automated email workflows using Google App Script',
            `Developed multiple sponsor pages that curated to each clients' highlights and benefits`
         ],
         fromDate: "May 2024",
         toDate: "Aug 2024",
      },
      {
         companyName: "Kenna Technologies",
         jobTitle: "Full Stack Developer Intern",
         companyLogo: Kenna,
         jobDescription: [
            'Led the migration from Lotus Notes, HTML, and CSS to a full-stack Typescript, React, Node, and SQL service',
            'Reduced API overhead by 87.5 % through deep analysis of workflows and callbacks, improving overall performance',
            'Created SQL backend and middleware agents to represent data in a visually appealing format on the frontend',
         ],
         fromDate: "Jan 2024",
         toDate: "Apr 2024",
      },
      {
         companyName: "Coach Chihab Group",
         jobTitle: "Software Engineer",
         companyLogo: CCG,
         jobDescription: [
            `Implemented a Vue.JS-based check-in platform, cutting check-in time by 95% and managing over 50 attendees`,
            `Utilized Firebase Real-time Database API for dynamic attendee check-in monitoring and visualization`,
            `Analyzed 5+ CMS and headless CMS platforms based on user profiles and integration capabilities`,
         ],
         fromDate: "Aug 2023",
         toDate: "Dec 2023",
      },
      {
         companyName: "MuslimDo",
         jobTitle: "Software Engineer Intern",
         companyLogo: MD,
         jobDescription: [
            `Reduced API overhead by 34% through payload size reduction and lazy loading implementation`,
            `Cut drop-off rates by 12% by streamlining the signup and data collection process`,
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
         toDate: "Present",
         schoolLogo: Uw,
         relevantCourses: ["Algorithm Design and Data Abstraction", "Object-Oriented Software Development", "Intro to Optimization", "Data Structures and Data Management"],
      },
      {
         name: "Wilfrid Lauirer University",
         program: "Bachelor of Business Administration",
         fromDate: "Sep 2022",
         toDate: "Present",
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
                           <Nav.Link eventKey="second">Some Projects</Nav.Link>
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
