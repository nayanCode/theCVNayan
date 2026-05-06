import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ArchitectureModel(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        {props.imageNameToDisplay}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="architecture-image-wrapper">
          <img
            src={`/theCVNayan/${props.imageToLoad}`}
            alt={props.imageToLoad}
            className="architecture-image"
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}