import Link from "next/link";
import { Fragment, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { connect } from "react-redux";
import { demoAction } from "../redux/action/themeAction";

function Demo({ demos, demoAction, activeDemo }) {
  const [show, setShow] = useState(false);
  return (
    <div className={`dz-demo-panel ${show ? "show" : ""}`}>
      <div className="bg-close" onClick={() => setShow(false)} />
      {/* <Link href="">
        <a className="dz-demo-trigger" onClick={() => setShow(true)}>
          <span>
            <i className="las la-tint" />
          </span>
        </a>
      </Link> */}
      <div className="dz-demo-inner">
        <Link href="">
          <a
            className="btn btn-primary btn-sm px-2 py-1 mb-3"
            onClick="deleteAllCookie()"
          >
            Delete All Cookie
          </a>
        </Link>

        <div className="dz-demo-header">
          <h4>Select A Demo</h4>
          <Link href="">
            <a className="dz-demo-close" onClick={() => setShow(false)}>
              <span>
                <i className="las la-times" />
              </span>
            </a>
          </Link>
        </div>
        <PerfectScrollbar className="dz-demo-content ps ps--active-y">
          <div className="dz-wrapper">
            {demos &&
              demos.map((demo) => (
                <Fragment key={demo.id}>
                  <div
                    className={`overlay-bx rounded-lg dz-demo-bx demo-${
                      demo.id === activeDemo ? "active" : ""
                    }`}
                  >
                    <div className="overlay-wrapper rounded-lg">
                      <img src={demo.image} alt="" className="w-100" />
                    </div>
                    <div className="overlay-layer">
                      <Link href="">
                        <a
                          className="btn c-pointer dz_theme_demo btn-secondary btn-sm mr-2"
                          onClick={() => demoAction(demo.id, "ltr")}
                        >
                          Default
                        </a>
                      </Link>{" "}
                      <Link href="">
                        <a
                          className="btn c-pointer dz_theme_demo_rtl btn-info btn-sm"
                          onClick={() => demoAction(demo.id, "rtl")}
                        >
                          RTL Version
                        </a>
                      </Link>
                    </div>
                  </div>
                  <h5
                    className="text-black"
                    style={{ textTransform: "capitalize" }}
                  >
                    {demo.name}
                  </h5>
                  <hr />
                </Fragment>
              ))}
          </div>
        </PerfectScrollbar>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  demos: state.theme.demos,
  activeDemo: state.theme.activeDemo,
});
export default connect(mapStateToProps, { demoAction })(Demo);
