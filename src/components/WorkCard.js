import { Col } from "react-bootstrap"
import { Calendar, GeoAlt } from "react-bootstrap-icons"

export const WorkCard = ({ companyName, jobTitle, jobDescription, companyLogo, fromDate, toDate, location, technologies }) => {
   return (
      <Col xs={12} sm={12} md={6} lg={4}>
         <div className="work-exp-card">
            <div className="work-exp-header">
               <div className="company-info">
                  <img src={companyLogo} alt={`${companyName} logo`} className="company-logo" />
                  <div className="job-details">
                     <h3 className="job-title">{jobTitle}</h3>
                     <h4 className="company-name">{companyName}</h4>
                     <div className="job-meta">
                        <span className="duration">
                           <Calendar size={14} />
                           {fromDate} - {toDate}
                        </span>
                        {location && (
                           <span className="location">
                              <GeoAlt size={14} />
                              {location}
                           </span>
                        )}
                     </div>
                  </div>
               </div>
            </div>
            <div className="work-exp-description">
               <ul>
                  {jobDescription.map((point, index) => (
                     <li key={index}>{point}</li>
                  ))}
               </ul>
            </div>
            {technologies && (
               <div className="technologies">
                  <h5>Technologies Used:</h5>
                  <div className="tech-tags">
                     {technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                     ))}
                  </div>
               </div>
            )}
         </div>
      </Col>
   )
}
