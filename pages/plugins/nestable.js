import { Fragment, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import PageTitle_ from "../../src/components/PageTitle";
import { moodChange, pageTitle } from "../../src/redux/action/utils";

const Nestedable = ({ pageTitle }) => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("Nestable");
  }, []);
  return (
    <Fragment>
      <PageTitle_ active="Nestable" mother="Advanced" />
    </Fragment>
  );
};

export default connect(null, { pageTitle })(Nestedable);
