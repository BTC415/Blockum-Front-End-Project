import moment from "moment";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { editBorderTable } from "../../redux/action/tableAction";
const BorderTableModal = ({
  modal,
  modalChange,
  editData,
  editBorderTable,
}) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    task: editData && editData.table.task ? editData.table.task : "",
    value: editData && editData.table.value ? editData.table.value : "",
    progressbar:
      editData && editData.table.progressbar ? editData.table.progressbar : "",
    color: editData && editData.table.color ? editData.table.color : "",
    dadeLine:
      editData && editData.table.dadeLine
        ? moment(editData.table.dadeLine).format("yyyy-MM-DD")
        : "",
  });
  useEffect(() => {
    setData({
      task: editData && editData.table.task ? editData.table.task : "",
      value: editData && editData.table.value ? editData.table.value : "",
      progressbar:
        editData && editData.table.progressbar
          ? editData.table.progressbar
          : "",
      color: editData && editData.table.color ? editData.table.color : "",
      dadeLine:
        editData && editData.table.dadeLine
          ? moment(editData.table.dadeLine).format("yyyy-MM-DD")
          : "",
    });
  }, [editData]);
  const { value, task, dadeLine } = data;
  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const onSubmit = () => {
    if (value && task && dadeLine) {
      editBorderTable({
        id: editData.id,
        data: { ...data, dadeLine: moment(dadeLine).format("DD MMMM YYYY") },
      });
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
                Task <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="task"
                value={task}
                onChange={(e) => onChange(e)}
                placeholder="Task"
              />
            </div>
            <div className="form-group">
              <label className="text-black font-w600">
                Value <span className="required">*</span>
              </label>
              <input
                type="number"
                className="form-control"
                name="value"
                value={value}
                onChange={(e) => onChange(e)}
                placeholder="Value"
              />
            </div>
            <div className="form-group">
              <label className="text-black font-w600">
                Date <span className="required">*</span>
              </label>
              <input
                type="date"
                className="form-control"
                name="dadeLine"
                value={dadeLine}
                onChange={(e) => onChange(e)}
                placeholder="Date"
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

export default connect(null, { editBorderTable })(BorderTableModal);
