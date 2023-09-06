import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/project-img1.png"

export const Projects = () => {
   const projects = [
      {
         title: "project1",
         description: "lorem ielkwjtlqwekj;ltwje[lijrt",
         imgUrl: projImg1,
         projectUrl: "test.com",
      },
      {
         title: "project2",
         description: "lorem ielkwjtlqwekj;ltwje[lijrt",
         imgUrl: projImg1,
         projectUrl: "test.com",
      },
      {
         title: "project3",
         description: "lorem ielkwjtlqwekj;ltwje[lijrt",
         imgUrl: projImg1,
         projectUrl: "test.com",
      },
      {
         title: "project4",
         description: "lorem ielkwjtlqwekj;ltwje[lijrt",
         imgUrl: projImg1,
         projectUrl: "test.com",
      },
   ]

   return (
      <section className="project" id="project">
         <Container>
            <Row>
               <Col>
                  <h2>My Projects</h2>
                  <p>lorem ipsum</p>
                  <Tab.Container id="projects-tab" defaultActiveKey="first">
                     <Nav
                        variant="pills"
                        className="nav-pills mb-5 justify-content-center align-items-center"
                        id="pills-tab"
                     >
                        <Nav.Item>
                           <Nav.Link eventKey="first">tab one</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                           <Nav.Link eventKey="second">tab two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                           <Nav.Link eventKey="third">tab three</Nav.Link>
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
                        <Tab.Pane eventKey="second">Text 1</Tab.Pane>
                        <Tab.Pane eventKey="third">Text 2</Tab.Pane>
                     </Tab.Content>
                  </Tab.Container>
               </Col>
            </Row>
         </Container>
         <img className="background-image-right" src={colorSharp2} alt="background-color"></img>
      </section>
   )
}
