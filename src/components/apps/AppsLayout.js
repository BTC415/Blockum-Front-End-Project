import { Fragment } from "react";
import Banner from "./Banner";
import Highlights from "./Highlights";
import Interest from "./Interest";
import News from "./News";
import OverView from "./OverView";
const AppsLayout = ({
  children,
  banner,
  overview,
  highlights,
  news,
  interest,
}) => {
  return (
    <Fragment>
      {banner && <Banner banner={banner} />}
      <div className="row">
        <div className="col-xl-4">
          <div className="row">
            {overview && <OverView overview={overview} />}
            {highlights && <Highlights highlights={highlights} />}
            {interest && <Interest interest={interest && interest} />}
            {news && <News news={news} />}
          </div>
        </div>
        <div className="col-xl-8">{children}</div>
      </div>
    </Fragment>
  );
};

export default AppsLayout;
