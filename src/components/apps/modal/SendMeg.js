import { Modal } from "react-bootstrap";
const SendMeg = ({ postModel, modelChange }) => {
  return (
    <Modal show={postModel} onHide={() => modelChange()}>
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title">Send Message</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            onClick={() => modelChange()}
          >
            <span>×</span>
          </button>
        </div>
        <div className="modal-body">
          <form className="comment-form" onSubmit={(e) => e.preventDefault()}>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="text-black font-w600">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Author"
                    name="Author"
                    placeholder="Author"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="text-black font-w600">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Email"
                    placeholder="Email"
                    name="Email"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label className="text-black font-w600">Comment</label>
                  <textarea
                    rows={8}
                    className="form-control"
                    name="comment"
                    placeholder="Comment"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group mb-0">
                  <input
                    type="submit"
                    value="Send"
                    className="submit btn btn-primary"
                    name="submit"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default SendMeg;
