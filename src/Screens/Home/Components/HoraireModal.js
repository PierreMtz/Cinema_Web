import React from 'react';
import {Button, Modal} from 'react-bootstrap';

class HoraireModal extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
        <div>
        <Button variant="primary" onClick={() => handleShow()}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => this.handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => this.handleClose()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>     
    );
  }
}

export default HoraireModal;
