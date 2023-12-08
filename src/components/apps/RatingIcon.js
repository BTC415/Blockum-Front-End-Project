import { Fragment } from "react";

const RatingIcon = ({ rating }) => {
  return (
    <Fragment>
      <li>
        <i
          className={`fa ${rating >= 1 ? "fa-star " : "fa-star-half-empty"}`}
        />{" "}
      </li>
      <li>
        <i
          className={`fa ${rating >= 2 ? "fa-star " : "fa-star-half-empty"}`}
        />{" "}
      </li>
      <li>
        <i
          className={`fa ${rating >= 3 ? "fa-star " : "fa-star-half-empty"}`}
        />{" "}
      </li>
      <li>
        <i
          className={`fa ${rating >= 4 ? "fa-star " : "fa-star-half-empty"}`}
        />{" "}
      </li>
      <li>
        <i
          className={`fa ${rating >= 5 ? "fa-star " : "fa-star-half-empty"}`}
        />{" "}
      </li>
    </Fragment>
  );
};

export default RatingIcon;
