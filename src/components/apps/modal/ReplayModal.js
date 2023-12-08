import { Modal } from "react-bootstrap";
const ReplayModal = ({ modal, modalChange }) => {
  return (
    <Modal show={modal} onHide={() => modalChange()}>
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title">Post Reply</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            onClick={() => modalChange()}
          >
            <span>×</span>
          </button>
        </div>
        <div class="modal-body">
          <form onSubmit={(e) => e.preventDefault()}>
            <textarea class="form-control" rows="4">
              Message
            </textarea>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-danger light"
            data-dismiss="modal"
            onClick={() => modalChange()}
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Reply
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ReplayModal;
