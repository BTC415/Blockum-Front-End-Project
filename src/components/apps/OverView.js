import Link from "next/link";
import { useState } from "react";
import SendMeg from "./modal/SendMeg";
const OverView = ({ overview: { reviews, follower, placeStay } }) => {
  const [postModel, setPostModel] = useState(false);
  return (
    <div className="col-xl-12">
      <SendMeg postModel={postModel} modelChange={() => setPostModel(false)} />
      <div className="card">
        <div className="card-body">
          <div className="profile-statistics">
            <div className="text-center">
              <div className="row">
                <div className="col">
                  <h3 className="m-b-0">{follower && follower}</h3>
                  <span>Follower</span>
                </div>
                <div className="col">
                  <h3 className="m-b-0">{placeStay && placeStay}</h3>
                  <span>Place Stay</span>
                </div>
                <div className="col">
                  <h3 className="m-b-0">{reviews && reviews}</h3>
                  <span>Reviews</span>
                </div>
              </div>
              <div className="mt-4">
                <Link href="">
                  <a className="btn btn-primary mb-1 mr-1">Follow</a>
                </Link>

                <Link href="">
                  <a
                    className="btn btn-primary mb-1"
                    data-toggle="modal"
                    data-target="#sendMessageModal"
                    onClick={() => setPostModel(true)}
                  >
                    Send Message
                  </a>
                </Link>
              </div>
            </div>
            {/* Modal */}
            <div className="modal fade" id="sendMessageModal">
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Send Message</h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                    >
                      <span>×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form
                      className="comment-form"
                      onSubmit={(e) => e.preventDefault()}
                    >
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
                            <label className="text-black font-w600">
                              Comment
                            </label>
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
                              defaultValue="Post Comment"
                              className="submit btn btn-primary"
                              name="submit"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
