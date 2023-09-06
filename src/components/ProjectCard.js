import { Col } from "react-bootstrap"
export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
   return (
      <Col sm={6} md={4}>
         <div className="proj-imgbx">
            <img src={imgUrl} alt="project" />
            <div className="proj-txtx">
               <h4>{title}</h4>
               <span>{description}</span>
               <h6>{projectUrl}</h6>
            </div>
         </div>
      </Col>
   )
}
