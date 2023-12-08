import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { editProfileTable } from "../../redux/action/tableAction";
const ProfileTableModal = ({
  modal,
  modalChange,
  editData,
  editProfileTable,
  tableData,
}) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    img: editData && editData.table.img ? editData.table.img : "",
    name: editData && editData.table.name ? editData.table.name : "",
    department:
      editData && editData.table.department ? editData.table.department : "",
    education:
      editData && editData.table.education ? editData.table.education : "",
    email: editData && editData.table.email ? editData.table.email : "",
    gender: editData && editData.table.gender ? editData.table.gender : "",
    mobile: editData && editData.table.mobile ? editData.table.mobile : "",
    date: editData && editData.table.date ? editData.table.date : "",
  });
  useEffect(() => {
    setData({
      img: editData && editData.table.img ? editData.table.img : "",
      name: editData && editData.table.name ? editData.table.name : "",
      department:
        editData && editData.table.department ? editData.table.department : "",
      education:
        editData && editData.table.education ? editData.table.education : "",
      email: editData && editData.table.email ? editData.table.email : "",
      gender: editData && editData.table.gender ? editData.table.gender : "",
      mobile: editData && editData.table.mobile ? editData.table.mobile : "",
      date: editData && editData.table.date ? editData.table.date : "",
    });
  }, [editData]);
  const { name, img, department, education, email, gender, mobile } = data;
  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      if (img.type == "image/jpeg" || img.type == "image/png") {
        setData({ ...data, img: URL.createObjectURL(img) });
        setError(false);
      } else {
        setError("Only select png and jpeg image .");
      }
    }
  };

  const onSubmit = () => {
    if (name && img && department && education && email && gender && mobile) {
      editProfileTable({ id: editData.id, data });
      modalChange();
    } else {
      setError("All field are required .");
    }
  };

  return (
    <Modal show={modal} onHide={() => modalChange()}>
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title">Edit Profile Table</h5>
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
          {error && <div class="alert alert-danger">{error}</div>}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
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
            <div className="form-group">
              <label className="text-black font-w600">
                Name <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={(e) => onChange(e)}
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <label className="text-black font-w600">
                Department <span className="required">*</span>
              </label>
              <select
                name="department"
                value={department}
                onChange={(e) => onChange(e)}
                class="form-control default-select"
              >
                <option value="Accountant">Accountant</option>
                <option value="Junior Technical">Junior Technical</option>
                <option value="Developer">Developer</option>
                <option value="Specialist">Specialist</option>
                <option value="Sales Assistant">Sales Assistant</option>
                <option value="Integration">Integration</option>
                <option value="Javascript Developer">
                  Javascript Developer
                </option>
                <option value="Software Engineer">Software Engineer</option>
              </select>
            </div>
            <div className="form-group">
              <label className="text-black font-w600">
                Gender <span className="required">*</span>
              </label>
              <select
                name="gender"
                value={gender}
                onChange={(e) => onChange(e)}
                class="form-control default-select"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label className="text-black font-w600">
                Education <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="education"
                placeholder="Education"
                value={education}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="form-group">
              <label className="text-black font-w600">
                Mobile <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="mobile"
                placeholder="Mobile"
                value={mobile}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="form-group">
              <label className="text-black font-w600">
                Email <span className="required">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => onChange(e)}
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
            Edit Profile
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default connect(null, { editProfileTable })(ProfileTableModal);
