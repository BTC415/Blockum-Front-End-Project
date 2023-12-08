import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { moodChange, pageTitle } from "../src/redux/action/utils";
const EmptyPage = ({ pageTitle }) => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("Dashboard");
  }, []);
  return <div></div>;
};

export default connect(null, { pageTitle })(EmptyPage);
