import React from 'react';
import ArchitectureModel from './ArchitectureModel.jsx';

export default function Projects() {
    const [modalShow, setModalShow] = React.useState(false);
    const [imageName, setimageName] = React.useState("");
     const [imageNameToDisplay, setImageNameToDisplay] = React.useState("");

    const onClickImage =(imageName)=>{
      setimageName(imageName);
      setModalShow(true);
    }

  return (
    <section className="section-card" id="projects">
      <h3>Projects</h3>

      <div className="project-card">
        <div className="project-card-header">
          <div>
            <h4>User Authentication & Authorization System</h4>
            <p className="project-eyebrow">Java 17 · Spring Boot · ReactJS · MySQL · JWT</p>
          </div>
          <span className="project-pill">Security</span>
        </div>
        <p className="project-summary">
          Built a resilient authentication experience that protects sessions, enforces role-based access, and keeps the frontend and backend in sync with secure session state.
        </p>
        <div className="project-media">
          <img src="/theCVNayan/JWT_security_flow.png" alt="JWT flow diagram" onClick={()=>onClickImage("JWT_security_flow.png")}/>
          <img src="/theCVNayan/JWT_security_flow_1.png" alt="JWT sequence" onClick={()=>onClickImage("JWT_security_flow_1.png")}/>
        </div>
        <ul className="project-details">
          <li>Implemented JWT authentication with HttpOnly cookies and CSRF protection for safe, seamless user sessions.</li>
          <li>Built backend role enforcement with Spring Security and frontend protected routes for access control.</li>
          <li>Created a <code>/user/me</code> endpoint and Redux-based state persistence to preserve secure session context across refreshes.</li>
        </ul>
      </div>
       <ArchitectureModel
              show={modalShow}
              onHide={() => setModalShow(false)}
              imageToLoad={imageName}
              imageNameToDisplay={imageNameToDisplay}
        />
    </section>
  );
}
