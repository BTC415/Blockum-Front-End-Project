import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { editNote } from "../../../../redux/action/utils";
const EditNote = ({ modal, modalChange, editData, editNote }) => {
  const [note, setNote] = useState(
    editData && editData.note ? editData.note.title : ""
  );
  const [date, setDate] = useState(
    editData && editData.note ? editData.note.date : ""
  );
  const [error, setError] = useState("");
  useEffect(() => {
    setNote(editData && editData.note ? editData.note.title : "");
    setDate(editData && editData.note ? editData.note.date : "");
  }, [editData]);
  const onSubmit = () => {
    if (note) {
      editNote({
        note: { title: note, date },
        id: editData.id,
      });
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
          <h5 className="modal-title">Edit Notes</h5>
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
                placeholder="User Name"
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
            Edit Note
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default connect(null, { editNote })(EditNote);
