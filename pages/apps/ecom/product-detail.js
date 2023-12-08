import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { Nav, TabContainer, TabContent, TabPane } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import ReviewModal from "../../../src/components/apps/modal/ReviewModal";
import RatingIcon from "../../../src/components/apps/RatingIcon";
import PageTitle_ from "../../../src/components/PageTitle";
import { allProducts } from "../../../src/redux/action/apps";
import { moodChange, pageTitle } from "../../../src/redux/action/utils";

const ProductDetails = ({ pageTitle, allProducts, products }) => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("Product Details");
    allProducts();
  }, []);
  const [review, setReview] = useState(false);
  const [activeSize, setActiveSize] = useState("XS");
  return (
    <Fragment>
      <PageTitle_ active="Blank" mother="Layout" customText={true} />
      <ReviewModal modal={review} modalChange={() => setReview(false)} />
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-xl-3 col-lg-6  col-md-6 col-xxl-5 ">
                  {/* Tab panes */}
                  <TabContainer defaultActiveKey="0">
                    {/* Tab panes */}
                    <TabContent>
                      {products &&
                        products[0].relatedImg.full.map((img, i) => (
                          <TabPane eventKey={i} key={i}>
                            <img className="img-fluid" src={img} alt="" />
                          </TabPane>
                        ))}
                    </TabContent>
                    <div className="tab-slide-content new-arrival-product mb-4 mb-xl-0">
                      {/* Nav tabs */}
                      <Nav
                        as="ul"
                        className="nav slide-item-list mt-3"
                        role="tablist"
                      >
                        {products &&
                          products[0].relatedImg.short.map((img, i) => (
                            <Nav.Item as="li" className="c-pointer" key={i}>
                              <Nav.Link as="a" eventKey={i}>
                                <img
                                  className="img-fluid"
                                  src={img}
                                  alt=""
                                  width={50}
                                />
                              </Nav.Link>
                            </Nav.Item>
                          ))}
                      </Nav>
                    </div>
                  </TabContainer>
                </div>
                {/*Tab slider End*/}
                <div className="col-xl-9 col-lg-6  col-md-6 col-xxl-7 col-sm-12">
                  <div className="product-detail-content">
                    {/*Product details*/}
                    <div className="new-arrival-content pr">
                      <h4>{products && products[0].name}</h4>
                      <div className="comment-review star-rating">
                        <ul>
                          <RatingIcon rating={products && products[0].rating} />
                        </ul>
                        <span className="review-text">
                          ({products && products[0].reviews} reviews) /{" "}
                        </span>
                        <a
                          className="product-review c-pointer"
                          onClick={() => setReview(true)}
                        >
                          Write a review?
                        </a>
                      </div>
                      <div className="d-table mb-2">
                        <p className="price float-left d-block">
                          ${products && products[0].price}
                        </p>
                      </div>
                      <p>
                        Availability:{" "}
                        <span className="item">
                          {" "}
                          {products && products[0].stock
                            ? "In stock"
                            : "Out of stock"}{" "}
                          <i className="fa fa-shopping-basket" />
                        </span>
                      </p>
                      <p>
                        Product code:{" "}
                        <span className="item">
                          {products && products[0].code}
                        </span>{" "}
                      </p>
                      <p>
                        Brand:{" "}
                        <span className="item">
                          {products && products[0].brand}
                        </span>
                      </p>
                      <p>
                        Product tags:&nbsp;&nbsp;
                        {products &&
                          products[0].tags.map((tag, i) => (
                            <span
                              className="badge badge-success light mr-1"
                              key={i}
                            >
                              {tag}
                            </span>
                          ))}
                      </p>
                      <p className="text-content">
                        {products && products[0].dec}
                      </p>
                      <div className="d-flex align-items-end flex-wrap mt-4">
                        <div className="filtaring-area mb-3 mr-3">
                          <div className="size-filter">
                            <h4 className="m-b-15">Select size</h4>
                            <div className="btn-group" data-toggle="buttons">
                              {products &&
                                products[0].sizes.map((s, i) => (
                                  <label
                                    className={`btn btn-outline-primary c-pointer light btn-sm mb-0 ${
                                      s == activeSize ? "active" : ""
                                    }`}
                                    key={i}
                                    onClick={() => setActiveSize(s)}
                                  >
                                    <input
                                      type="radio"
                                      className="position-absolute invisible"
                                      name="options"
                                      id="option5"
                                    />{" "}
                                    {s}
                                  </label>
                                ))}
                            </div>
                          </div>
                        </div>
                        {/*Quantity start*/}
                        <div className="col-2 px-0  mb-3 mr-3">
                          <input
                            type="number"
                            name="num"
                            className="form-control input-btn input-number"
                            defaultValue={1}
                          />
                        </div>
                        {/*Quanatity End*/}
                        <div className="shopping-cart  mb-3 mr-3">
                          <Link href="">
                            <a className="btn btn-primary btn-lg">
                              <i className="fa fa-shopping-basket mr-2" />
                              Add to cart
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  products: state.apps.products,
});

export default connect(mapStateToProps, { pageTitle, allProducts })(
  ProductDetails
);
