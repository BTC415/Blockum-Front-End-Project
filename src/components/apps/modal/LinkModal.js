import { Modal } from "react-bootstrap";
const LinkModal = ({ modul, modelChange }) => {
  return (
    <Modal show={modul} onHide={() => modelChange()}>
      <div className="modal-content border-0 post-input">
        <div className="modal-header">
          <h5 className="modal-title">Social Links</h5>
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
          <a className="btn-social facebook" href="javascript:void(0)">
            <i className="fa fa-facebook" />
          </a>
          <a className="btn-social ml-1 google-plus" href="javascript:void(0)">
            <i className="fa fa-google-plus" />
          </a>
          <a className="btn-social ml-1 linkedin" href="javascript:void(0)">
            <i className="fa fa-linkedin" />
          </a>
          <a className="btn-social ml-1 instagram" href="javascript:void(0)">
            <i className="fa fa-instagram" />
          </a>
          <a className="btn-social ml-1 twitter" href="javascript:void(0)">
            <i className="fa fa-twitter" />
          </a>
          <a className="btn-social ml-1 youtube" href="javascript:void(0)">
            <i className="fa fa-youtube" />
          </a>
          <a className="btn-social ml-1 whatsapp" href="javascript:void(0)">
            <i className="fa fa-whatsapp" />
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default LinkModal;
