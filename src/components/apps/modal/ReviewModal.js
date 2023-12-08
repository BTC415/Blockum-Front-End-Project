import { useState } from "react";
import { Modal } from "react-bootstrap";
const ReviewModal = ({ modal, modalChange }) => {
  const [reviews, setReviews] = useState(0);
  return (
    <Modal show={modal} onHide={() => modalChange()}>
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title">Review</h5>
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
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="text-center mb-4">
              <img
                className="img-fluid rounded"
                width={78}
                src="/images/avatar/1.jpg"
                alt="DexignZone"
              />
            </div>
            <div className="form-group">
              <div className="rating-widget mb-4 text-center">
                {/* Rating Stars Box */}
                <div className="rating-stars">
                  <ul id="stars" className="d-flex justify-content-center">
                    {[1, 2, 3, 4, 5].map((review_, i) => (
                      <li
                        className={`c-pointer star ${
                          review_ <= reviews && "selected"
                        }`}
                        key={i}
                        onClick={() => {
                          alert(`Thanks! You rated this ${review_} stars.`);
                          setReviews(review_);
                        }}
                      >
                        <i className="fa fa-star fa-fw" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="Comment"
                rows={5}
                defaultValue={""}
              />
            </div>
            <button className="btn btn-success btn-block">RATE</button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default ReviewModal;
