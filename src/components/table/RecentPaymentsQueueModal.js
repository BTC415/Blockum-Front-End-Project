import moment from "moment";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { editRecentPaymentQueue } from "../../redux/action/tableAction";
const RecentPaymentsQueueModal = ({
  modal,
  modalChange,
  editData,
  editRecentPaymentQueue,
}) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    id: editData && editData.table.id ? editData.table.id : "",
    name: editData && editData.table.name ? editData.table.name : "",
    drName: editData && editData.table.drName ? editData.table.drName : "",
    price: editData && editData.table.price ? editData.table.price : "",
    date:
      editData && editData.table.date
        ? moment(editData.table.date).format("yyyy-MM-DD")
        : "",
    status: editData && editData.table.status ? editData.table.status : "",
    color: editData && editData.table.color ? editData.table.color : "",
  });
  useEffect(() => {
    setData({
      id: editData && editData.table.id ? editData.table.id : "",
      name: editData && editData.table.name ? editData.table.name : "",
      drName: editData && editData.table.drName ? editData.table.drName : "",
      price: editData && editData.table.price ? editData.table.price : "",
      date:
        editData && editData.table.date
          ? moment(editData.table.date).format("yyyy-MM-DD")
          : "",
      status: editData && editData.table.status ? editData.table.status : "",
      color: editData && editData.table.color ? editData.table.color : "",
    });
  }, [editData]);
  const { name, drName, price, date } = data;
  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const onSubmit = () => {
    if (name && drName && price && date) {
      editRecentPaymentQueue({
        id: editData.id,
        data: { ...data, date: moment(date).format("DD MMMM YYYY") },
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
                Dr Name <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="drName"
                value={drName}
                onChange={(e) => onChange(e)}
                placeholder="Dr Name"
              />
            </div>
            <div className="form-group">
              <label className="text-black font-w600">
                Price <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="price"
                value={price}
                onChange={(e) => onChange(e)}
                placeholder="Price"
              />
            </div>
            <div className="form-group">
              <label className="text-black font-w600">
                Date <span className="required">*</span>
              </label>
              <input
                type="date"
                className="form-control"
                name="date"
                value={date}
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

export default connect(null, { editRecentPaymentQueue })(
  RecentPaymentsQueueModal
);
