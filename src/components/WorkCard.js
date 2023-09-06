import { Col } from "react-bootstrap"

export const WorkCard = ({ companyName, jobTitle, jobDescription, companyLogo, fromDate, toDate }) => {
   return (
      <Col xs={12} sm={12} md={12}>
         <div className="work-exp-card">
            <div className="work-exp-header">
               <img src={companyLogo} alt={`${companyName} logo`} className="company-logo" />
               <h3>{companyName}</h3>
               <h4>{jobTitle}</h4>
               <h6>
                  {fromDate} - {toDate}
               </h6>
            </div>
            <div className="work-exp-description">
               <ul>
                  {jobDescription.map((point, index) => (
                     <li key={index}>{point}</li>
                  ))}
               </ul>
            </div>
         </div>
      </Col>
   )
}
