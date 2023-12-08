import { useState } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { addNote } from "../../../../redux/action/utils";
const AddNote = ({ modal, modalChange, addNote }) => {
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const onSubmit = () => {
    if (note) {
      addNote(note);
      setNote("");
      modalChange();
    } else {
      setError("All field are required .");
    }
  };
  return (
    <Modal show={modal} onHide={() => modalChange()}>
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title">Add Notes</h5>
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
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label className="text-black font-w600">
                Note <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Note Title"
                onChange={(e) => setNote(e.target.value)}
                value={note}
              />
            </div>
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
          <button
            onClick={() => onSubmit()}
            type="button"
            className="btn btn-primary"
          >
            Add Note
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default connect(null, { addNote })(AddNote);
