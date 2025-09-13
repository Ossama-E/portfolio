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
               <h5 style={{ marginBottom: '15px', color: '#fff', fontSize: '16px' }}>Relevant Coursework</h5>
               <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                  gap: '8px',
                  marginTop: '10px'
               }}>
                  {relevantCourses.map((course, index) => (
                     <div key={index} style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        fontSize: '14px',
                        color: '#fff',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                     }}>
                        {course}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </Col>
   )
}
