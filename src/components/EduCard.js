import { Col } from "react-bootstrap"

export const EduCard = ({ name, program, schoolLogo, fromDate, toDate, relevantCourses }) => {
   return (
      <Col xs={12} sm={12} md={12}>
         <div className="work-exp-card">
            <div className="work-exp-header">
               <img src={schoolLogo} alt={`${schoolLogo} logo`} className="company-logo" />
               <h3>{name}</h3>
               <h4>{program}</h4>
               <h6>
                  {fromDate} - {toDate}
               </h6>
            </div>
            <div className="work-exp-description">
               <ul>
                  {relevantCourses.map((point, index) => (
                     <li key={index}>{point}</li>
                  ))}
               </ul>
            </div>
         </div>
      </Col>
   )
}
