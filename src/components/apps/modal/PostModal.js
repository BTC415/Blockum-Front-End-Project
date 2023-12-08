import { Modal } from "react-bootstrap";
const PostModal = ({ modal, modalChange }) => {
  return (
    <Modal show={modal} onHide={() => modalChange()}>
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title">Post</h5>
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
          <textarea
            name="textarea"
            id="textarea"
            cols={30}
            rows={5}
            className="form-control bg-transparent"
            placeholder="Please type what you want...."
            defaultValue={""}
          />
          <a
            className="btn mt-3 btn-primary btn-rounded"
            href="javascript:void(0)"
          >
            Post
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default PostModal;
