import dynamic from "next/dynamic";
import { Fragment, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import PageTitle_ from "../../src/components/PageTitle";
import { moodChange, pageTitle } from "../../src/redux/action/utils";

const UsaMap = dynamic(() => import("../../src/components/plugins/maps/Usa"), {
  ssr: false,
});
const WorldMap = dynamic(
  () => import("../../src/components/plugins/maps/World"),
  {
    ssr: false,
  }
);

const JQVMap = ({ pageTitle }) => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("JQV Map");
  }, []);
  return (
    <Fragment>
      <PageTitle_ active="jqvmap" mother="Map" />
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">World Map</h4>
            </div>
            <div className="card-body mb-2" style={{ height: "100%" }}>
              <div id="world-map" style={{ height: "100%" }}>
                <WorldMap />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">USA</h4>
            </div>
            <div className="card-body mb-2" style={{ height: "100%" }}>
              <div id="usa" style={{ height: "100%" }}>
                <UsaMap />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(null, { pageTitle })(JQVMap);
