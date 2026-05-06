import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ArchitectureModel from './ArchitectureModel.jsx';

export default function Experience() {
  const [imgError, setImgError] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [imageNameToDisplay, setImageNameToDisplay] = React.useState("");
  const assetBase = import.meta.env.BASE_URL;

  const [imageName, setimageName] = React.useState("");
  
      const onClickImage =(imageName)=>{
        setimageName(imageName);
        setModalShow(true);
        setImageNameToDisplay("System Architecture")
      }

  return (
    <section className="section-card" id="experience">
      <h3>Experience</h3>
      <div className="experience-grid">
        <div className="experience-text">
          <p>
            <strong className="highlight">Tata Consultancy Services</strong> — <em>Systems Engineer</em> (Oct 2023 – Present)
          </p>
          <ul>
            <li>Engineered core banking modules (e.g., Customer Enquiry) using Java and Spring Boot to support high-volume transactional workflows while complying with SBI standards.</li>
            <li>Designed and delivered scalable RESTful APIs integrated with web/mobile channels and backend microservices, handling concurrent requests at scale with low-latency responses (under <strong className="highlight">200 ms</strong>).</li>
            <li>Built a Transaction Reversal Scheduler using multithreading, PostgreSQL views, and Kafka for real-time transaction rectification — improved processing speed by <strong className="highlight">~40%</strong> and reduced manual reconciliation by <strong className="highlight">~60%</strong>.</li>
            <li>Optimized SQL queries, indexing, and caching strategies to reduce query execution time by <strong className="highlight">30%+</strong> and improve overall system throughput.</li>
            <li>Implemented Kafka-based asynchronous processing to handle high-throughput event streams, reducing event processing delay by <strong className="highlight">50%+</strong> and increasing system reliability.</li>
            <li>Ensured data consistency and fault tolerance across distributed microservices for real-time financial transaction processing.</li>
          </ul>
        </div>
        <div className="experience-media">
          {!imgError ? (
            <img
              src={`${assetBase}diagram.png`}
              alt="System architecture diagram"
              className="experience-diagram"
              onError={() => setImgError(true)}
              onClick={() => onClickImage("diagram.png")}
            />
          ) : (
            <div className="image-fallback">
              <p>Diagram not loaded. <a href={`${assetBase}diagram.png`} target="_blank" rel="noreferrer">Open image</a></p>
            </div>
          )}
          {/* <p className="caption">UI - TMF - UPP Architecture</p> */}
        </div>
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
