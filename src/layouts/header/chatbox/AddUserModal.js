import { useState } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { addUser } from "../../../redux/action/utils";
const AddUserModal = ({ modal, modalChange, addUser }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [fileName, setFileName] = useState(null);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      if (img.type == "image/jpeg" || img.type == "image/png") {
        setFileName(URL.createObjectURL(img));
        setError(false);
      } else {
        setError("Only select png and jpeg image .");
      }
    }
  };
  const onChnage = (e) => setName(e.target.value);

  const hendelSubmit = () => {
    let newUser = { active: true, name, img: fileName };
    if (name && fileName) {
      addUser(newUser);
      setError(false);
      modalChange();
      setName("");
      setFileName(null);
    } else {
      setError("All field are required .");
    }
  };

  return (
    <Modal show={modal} onHide={() => modalChange()}>
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title">Add User</h5>
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
          {error && <div class="alert alert-danger">{error}</div>}
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label className="text-black font-w600">
                Name <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="User Name"
                onChange={(e) => onChnage(e)}
                value={name}
              />
            </div>
            <div className="form-group">
              <label className="text-black font-w600">
                Profile Image <span className="required">*</span>
              </label>
              <input
                type="file"
                onChange={(e) => onImageChange(e)}
                name="img"
                className="form-control"
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
            onClick={() => hendelSubmit()}
            type="button"
            className="btn btn-primary"
          >
            Add user
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default connect(null, { addUser })(AddUserModal);
