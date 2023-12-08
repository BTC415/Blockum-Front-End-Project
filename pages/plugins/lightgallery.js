import { Fragment, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { SRLWrapper } from "simple-react-lightbox";
import PageTitle_ from "../../src/components/PageTitle";
import { moodChange, pageTitle } from "../../src/redux/action/utils";

const LightGallery = ({ pageTitle }) => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("lightGallery");
  }, []);
  return (
    <Fragment>
      <PageTitle_ active="lightGallery" mother="Advanced" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Light Gallery</h4>
            </div>
            <div className="card-body pb-1">
              <SRLWrapper>
                <div id="lightgallery" className="row">
                  <a
                    href="/images/big/img1.jpg"
                    data-exthumbimage="/images/big/img1.jpg"
                    data-src="/images/big/img1.jpg"
                    className="col-lg-3 col-md-6 mb-4"
                  >
                    <img src="/images/big/img1.jpg" style={{ width: "100%" }} />
                  </a>
                  <a
                    href="/images/big/img2.jpg"
                    data-exthumbimage="/images/big/img2.jpg"
                    data-src="/images/big/img2.jpg"
                    className="col-lg-3 col-md-6 mb-4"
                  >
                    <img src="/images/big/img2.jpg" style={{ width: "100%" }} />
                  </a>
                  <a
                    href="/images/big/img3.jpg"
                    data-exthumbimage="/images/big/img3.jpg"
                    data-src="/images/big/img3.jpg"
                    className="col-lg-3 col-md-6 mb-4"
                  >
                    <img src="/images/big/img3.jpg" style={{ width: "100%" }} />
                  </a>
                  <a
                    href="/images/big/img4.jpg"
                    data-exthumbimage="/images/big/img4.jpg"
                    data-src="/images/big/img4.jpg"
                    className="col-lg-3 col-md-6 mb-4"
                  >
                    <img src="/images/big/img4.jpg" style={{ width: "100%" }} />
                  </a>
                  <a
                    href="/images/big/img5.jpg"
                    data-exthumbimage="/images/big/img5.jpg"
                    data-src="/images/big/img5.jpg"
                    className="col-lg-3 col-md-6 mb-4"
                  >
                    <img src="/images/big/img5.jpg" style={{ width: "100%" }} />
                  </a>
                  <a
                    href="/images/big/img6.jpg"
                    data-exthumbimage="/images/big/img6.jpg"
                    data-src="/images/big/img6.jpg"
                    className="col-lg-3 col-md-6 mb-4"
                  >
                    <img src="/images/big/img6.jpg" style={{ width: "100%" }} />
                  </a>
                  <a
                    href="/images/big/img7.jpg"
                    data-exthumbimage="/images/big/img7.jpg"
                    data-src="/images/big/img7.jpg"
                    className="col-lg-3 col-md-6 mb-4"
                  >
                    <img src="/images/big/img7.jpg" style={{ width: "100%" }} />
                  </a>
                  <a
                    href="/images/big/img8.jpg"
                    data-exthumbimage="/images/big/img8.jpg"
                    data-src="/images/big/img8.jpg"
                    className="col-lg-3 col-md-6 mb-4"
                  >
                    <img src="/images/big/img8.jpg" style={{ width: "100%" }} />
                  </a>
                </div>
              </SRLWrapper>
            </div>
          </div>
          {/* /# card */}
        </div>
      </div>
    </Fragment>
  );
};

export default connect(null, { pageTitle })(LightGallery);
