import React from 'react';
import { Modal, Button, ProgressBar, Spinner } from 'react-bootstrap';

function ProposalDetailsModal(props) {
  return (
    <Modal
      className="fade bd-example-modal-lg"
      show={props.visible}
      size="lg"
      style={{ backgroundColor: '#4E4FEB', height: '100vh' }}
    >
      <div
        style={{
          backgroundColor: '#1C1C39',
          color: 'white',
          height: '100vh',
          marginTop: '-3.3vh',
          marginBottom: '-3.3vh',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        <Modal.Header style={{ border: 'none' }}>
          <Modal.Title
            style={{
              color: 'white',
              backgroundColor: '#1C1C39',
              width: '100%',
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '70px',
            }}
          >
            <img
              src={'/images/BlockumDAOLogo.png'}
              style={{ width: '300px' }}
              alt=""
            />
          </Modal.Title>
          <Button
            onClick={() => props.setVisible(false)}
            variant=""
            className="close"
            style={{ color: 'white', backgroundColor: '#1C1C39' }}
          >
            <span>&times;</span>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              // marginTop: '30px',
              marginLeft: '70px',
              marginRight: '70px',
              color: 'white',
            }}
          >
            <h1 style={{ color: 'white' }}>PROPOSAL FOR VOTE</h1>
            <label>Title:</label>
            <p>{props.data.title}</p>
            <label>Description:</label>
            <p>{props.data.description}</p>
            <label>Presentation link:</label>
            <p style={{maxWidth: '100%', wordBreak: "break-all"}}>
              <a
                href={`${props.data.presentationLink}`}
                style={{
                  marginBottom: '16px',
                  color: 'white',
                }}
              >
                {props.data.presentationLink}
              </a>
            </p>
            {/* <br /> */}
            <h3 style={{ color: 'white' }}>Promote this proposal?</h3>
            <div className="d-flex justify-content-center">
              <Button
                className="font-weight-bold"
                variant="success btn-rounded"
                style={{
                  width: '200px',
                  fontSize: '24px',
                  paddingTop: '5px',
                  paddingBottom: '5px',
                  marginRight: '30px',
                  marginLeft: '30px',
                  backgroundColor: '#5271FF',
                  borderColor: '#5271FF',
                }}
                onClick={() => props.handleVoteYesClick(props.data.proposalId)}
                disabled={props.isLoading}
              >
                {props.isLoading ? <Spinner animation="border" /> : 'Yes'}
              </Button>
              <Button
                className="font-weight-bold"
                variant="danger btn-rounded"
                style={{
                  width: '200px',
                  fontSize: '24px',
                  paddingTop: '5px',
                  paddingBottom: '5px',
                  marginRight: '30px',
                  marginLeft: '30px',
                  backgroundColor: '#2C4ACC',
                  borderColor: '#2C4ACC',
                }}
                onClick={() => props.handleVoteNoClick(props.data.proposalId)}
                disabled={props.isLoading}
              >
                {props.isLoading ? <Spinner animation="border" /> : 'No'}
              </Button>
            </div>
            {/* <p className="d-flex justify-content-end pt-3">
              00 days remaining 00h:00m:00
            </p> */}
            <br />
            <div className="d-flex justify-content-between">
              <div>
                <label style={{ fontSize: '14px' }}>Members Quorum</label>
                <ProgressBar
                  style={{ width: '200px' }}
                  now={props.data.memberProgressForProposal}
                  variant="info"
                />
              </div>
              <div>
                <label style={{ fontSize: '14px' }}>Capital Quorum</label>
                <ProgressBar
                  style={{ width: '200px' }}
                  now={props.data.capitalProgressForProposal}
                  variant="info"
                />
              </div>
            </div>
            <br />
            <div className="d-flex justify-content-end">
              {/* <div>
                <p className="mb-0">For Votes: 00</p>
                <p className="mb-0">Against Votes: 00</p>
              </div> */}
              <div>
                <p className="mb-0">Approved by Community: YES/NO</p>
                <p className="mb-0">Funded: YES/NO</p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
}

export default ProposalDetailsModal;
