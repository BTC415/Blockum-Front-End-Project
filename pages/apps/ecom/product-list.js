import Link from "next/dist/client/link";
import { Fragment, useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import ReviewModal from "../../../src/components/apps/modal/ReviewModal";
import RatingIcon from "../../../src/components/apps/RatingIcon";
import PageTitle_ from "../../../src/components/PageTitle";
import { allProducts } from "../../../src/redux/action/apps";
import { moodChange, pageTitle } from "../../../src/redux/action/utils";

const ProductList = ({ pageTitle, allProducts, products }) => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("Product List");
    allProducts();
  }, []);
  const [review, setReview] = useState(false);
  return (
    <Fragment>
      <PageTitle_ active="Blank" mother="Layout" customText={true} />
      <ReviewModal modal={review} modalChange={() => setReview(false)} />
      <div className="row">
        {products &&
          products.map((p, i) => (
            <div className="col-lg-12 col-xl-6" key={i}>
              <div className="card">
                <div className="card-body">
                  <div className="row m-b-30">
                    <div className="col-md-5 col-xxl-12">
                      <div className="new-arrival-product mb-4 mb-xxl-4 mb-md-0">
                        <div className="new-arrivals-img-contnent">
                          <img className="img-fluid" src={p.img} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 col-xxl-12">
                      <div className="new-arrival-content position-relative">
                        <h4>
                          <Link href="/apps/ecom/product-detail">
                            <a>{p.name}</a>
                          </Link>
                        </h4>
                        <div className="comment-review star-rating">
                          <ul>
                            <RatingIcon rating={p.rating} />
                          </ul>
                          <span className="review-text">
                            ({p.reviews} reviews) /{" "}
                          </span>
                          <a
                            className="product-review c-pointer"
                            onClick={() => setReview(true)}
                          >
                            Write a review?
                          </a>
                          <p className="price">${p.price}</p>
                        </div>
                        <p>
                          Availability:{" "}
                          <span className="item">
                            {" "}
                            {p.stock ? "In stock" : "Out Of stock"}{" "}
                            <i
                              className={`fa fa-check-circle text-${
                                p.stock ? "success" : "danger"
                              }`}
                            />
                          </span>
                        </p>
                        <p>
                          Product code: <span className="item">{p.code}</span>{" "}
                        </p>
                        <p>
                          Brand: <span className="item">{p.brand}</span>
                        </p>
                        <p className="text-content">
                          {p.dec
                            .split(" ")
                            .map(
                              (d, i) =>
                                i < 25 && <Fragment key={i}>{d} </Fragment>
                            )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  products: state.apps.products,
});

export default connect(mapStateToProps, { pageTitle, allProducts })(
  ProductList
);
