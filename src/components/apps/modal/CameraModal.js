import { Modal } from "react-bootstrap";
const CameraModal = ({ modal, modalChange }) => {
  return (
    <Modal show={modal} onHide={() => modalChange()}>
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title">Upload images</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            onClick={() => modalChange()}
          >
            <span>×</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Upload</span>
            </div>
            <div className="custom-file">
              <input type="file" className="custom-file-input" />
              <label className="custom-file-label">Choose file</label>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CameraModal;
