import { Col } from "react-bootstrap"
export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
   return (
      <Col sm={6} md={4}>
         <div className="proj-imgbx">
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
               <img src={imgUrl} alt="project" className="project-image" />
            </a>
            <div className="proj-txtx">
               <h4>{title}</h4>
               <span>{description}</span>
               <a
                  className="navbar-text"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={projectUrl}
               >
                  <h6 style={projectUrl ? { display: "body" } : { display: "none" }}>Check It Out</h6>
               </a>
            </div>
         </div>
      </Col>
   )
}
