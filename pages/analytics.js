import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import { connect, useSelector } from "react-redux";
import { getAnalytic } from "../src/redux/action/dashboard";
import { moodChange, pageTitle } from "../src/redux/action/utils";
import FvtItemChart from "../src/uena/analytics/FvtItemChart";
const SalesSummary = dynamic(
  () => import("../src/uena/analytics/SalesSummary"),
  {
    ssr: false,
  }
);
const Revenue = dynamic(() => import("../src/uena/analytics/Revenue"), {
  ssr: false,
});
const CustomerMapkm = dynamic(
  () => import("../src/uena/analytics/CustomerMapkm"),
  {
    ssr: false,
  }
);
const Analytics = ({ pageTitle, analyticsData, getAnalytic }) => {
  const [refresh, setRefresh] = useState(false);
  const [numberOfShow, setNumberOfShow] = useState(2);
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("Analytics");
    getAnalytic();
  }, []);
  const onClick = () => {
    setRefresh(true);
    setTimeout(() => {
      setNumberOfShow(numberOfShow + 1);
      setRefresh(false);
    }, 1000);
  };

  const tabPan_ = (event, data, i) => {
    return (
      <Tab.Pane eventKey={event} key={i}>
        <div className="row">
          {data &&
            data.map((d, i) => (
              <div className="col-xl-6 pb-3 mb-3 border-bottom" key={i}>
                <div className="media">
                  <img
                    className="rounded mr-3 food-img"
                    src={d.img}
                    width={125}
                    alt=""
                  />
                  <div className="media-body">
                    <h5 className="mb-sm-4 mb-3">
                      <a className="text-black" href="ecom-product-detail.html">
                        {d.title}
                      </a>
                    </h5>
                    <div className="d-flex mb-2">
                      <svg
                        className="mr-2 card-ico"
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="2.04545"
                          height={15}
                          rx="1.02273"
                          fill="#FF720D"
                        />
                        <rect
                          x="4.09082"
                          y="4.0909"
                          width="2.04545"
                          height="10.9091"
                          rx="1.02273"
                          fill="#FF720D"
                        />
                        <rect
                          x="8.18164"
                          y="10.2273"
                          width="2.04545"
                          height="4.77273"
                          rx="1.02273"
                          fill="#FF720D"
                        />
                        <rect
                          x="12.2725"
                          y="2.04546"
                          width="2.04545"
                          height="12.9545"
                          rx="1.02273"
                          fill="#FF720D"
                        />
                      </svg>
                      <span className="fs-14 text-black">
                        <strong className="mr-1">{d.totalSells}</strong> Total
                        Sales
                      </span>
                    </div>
                    <div className="d-flex align-items-center flex-wrap fs-12">
                      <div className="mb-2 star-review2">
                        <i
                          className={`fa fa-star ${d.rating >= 1 ? "" : "op5"}`}
                        />{" "}
                        <i
                          className={`fa fa-star ${d.rating >= 2 ? "" : "op5"}`}
                        />{" "}
                        <i
                          className={`fa fa-star ${d.rating >= 3 ? "" : "op5"}`}
                        />{" "}
                        <i
                          className={`fa fa-star ${d.rating >= 4 ? "" : "op5"}`}
                        />{" "}
                        <i
                          className={`fa fa-star ${d.rating >= 5 ? "" : "op5"}`}
                        />{" "}
                      </div>
                      <span className="ml-3 text-dark mb-2">
                        ({d.review} revies)
                      </span>
                    </div>
                  </div>
                  <div className="d-inline-block relative donut-chart-sale">
                    <FvtItemChart value={d.chartValue} />
                    <small className="fs-14 text-black">{d.chartValue}%</small>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Tab.Pane>
    );
  };

  return (
    <div className="row">
      <div className="col-xl-3 col-xxl-12">
        <div className="row">
          <div className="col-xl-12 col-xxl-6 col-md-6">
            <div className="card trending-menus">
              <div className="card-header border-0">
                <div className="separator" />
                <div className="mr-auto">
                  <h4 className="text-black fs-20">
                    {analyticsData && analyticsData.trendingMenus.name}
                  </h4>
                  <p className="fs-13 mb-0">
                    {analyticsData && analyticsData.trendingMenus.subHeading
                      ? analyticsData.trendingMenus.subHeading
                      : "Lorem ipsum dolor"}
                  </p>
                </div>
              </div>
              {analyticsData && (
                <PerfectScrollbar
                  className="card-body dz-scroll height550"
                  id="tredingMenus"
                >
                  {analyticsData &&
                    analyticsData.trendingMenus.data.map((data, i) => (
                      <div
                        key={i}
                        className={`d-flex pb-3 mb-3 tr-row align-items-center ${
                          analyticsData &&
                          analyticsData.trendingMenus.data.length - 1 !== i
                            ? "border-bottom"
                            : ""
                        }`}
                      >
                        <span className="num">#{i + 1}</span>
                        <div className="mr-auto pr-3">
                          <a href="post-details.html">
                            <h2 className="text-black fs-14 font-w500">
                              {data.title}
                            </h2>
                          </a>
                          <span className="text-black font-w600 d-inline-block mr-3">
                            ${data.price}{" "}
                          </span>{" "}
                          <span className="fs-14">Order {data.order}x</span>
                        </div>
                        <img src={data.img} alt="Picture of the author" />
                      </div>
                    ))}
                </PerfectScrollbar>
              )}
            </div>
          </div>
          <div className="col-xl-12 col-xxl-6 col-md-6">
            <div className="card">
              <div className="card-header border-0">
                <div className="separator" />
                <div className="mr-auto">
                  <h4 className="text-black fs-20">
                    {analyticsData && analyticsData.bestseler.name}
                  </h4>
                  <p className="fs-14 mb-0">
                    {analyticsData && analyticsData.bestseler.subHeading
                      ? analyticsData.bestseler.subHeading
                      : "Lorem ipsum dolor"}
                  </p>
                </div>
              </div>
              {analyticsData && (
                <PerfectScrollbar
                  className="height550 dz-scroll loadmore-content"
                  id="sellerMenusContent"
                >
                  {analyticsData &&
                    analyticsData.bestseler.data.map((d, i) => (
                      <div
                        className={`card-body border-bottom ${
                          i == 0 && "pt-0"
                        } ${i + 1 > numberOfShow && "d-none"}`}
                        key={i}
                      >
                        <div className="media mb-3">
                          <img src={d.img} style={{ width: "100%" }} alt="" />
                        </div>
                        <div className="info">
                          <h5 className="text-black mb-3">
                            <a
                              href="ecom-product-detail.html"
                              className="text-black"
                            >
                              {d.title}
                            </a>
                          </h5>
                          <div className="d-flex justify-content-between align-items-center">
                            <h4 className="font-w600 mb-0 text-black">
                              ${d.price}
                            </h4>
                            <div className="d-flex align-items-center">
                              <svg
                                className="mr-2 card-ico"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M20.8401 4.60999C20.3294 4.099 19.7229 3.69364 19.0555 3.41708C18.388 3.14052 17.6726 2.99817 16.9501 2.99817C16.2276 2.99817 15.5122 3.14052 14.8448 3.41708C14.1773 3.69364 13.5709 4.099 13.0601 4.60999L12.0001 5.66999L10.9401 4.60999C9.90843 3.5783 8.50915 2.9987 7.05012 2.9987C5.59109 2.9987 4.19181 3.5783 3.16012 4.60999C2.12843 5.64169 1.54883 7.04096 1.54883 8.49999C1.54883 9.95903 2.12843 11.3583 3.16012 12.39L4.22012 13.45L12.0001 21.23L19.7801 13.45L20.8401 12.39C21.3511 11.8792 21.7565 11.2728 22.033 10.6053C22.3096 9.93789 22.4519 9.22248 22.4519 8.49999C22.4519 7.77751 22.3096 7.0621 22.033 6.39464C21.7565 5.72718 21.3511 5.12075 20.8401 4.60999Z"
                                  fill="#FF720D"
                                />
                              </svg>
                              <h6 className="text-black mb-0">{d.likes}k</h6>
                            </div>
                            <div className="d-flex align-items-center">
                              <h6 className="text-black mb-0">{d.sells}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </PerfectScrollbar>
              )}
              <div className="card-footer border-0 text-center">
                <Link href="">
                  <a
                    className="btn-link dz-load-more"
                    id="sellerMenus"
                    rel="ajax/seller-menus.html"
                    onClick={() => onClick()}
                  >
                    View More &gt;&gt;{" "}
                    {refresh && <i className="fa fa-refresh" />}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-9 col-xxl-12">
        <div className="row">
          <div className="col-xl-4 col-xxl-5 col-md-6">
            <div className="card">
              <div className="card-header border-0">
                <div className="separator" />
                <div className="mr-auto">
                  <h4 className="text-black fs-20">
                    {analyticsData && analyticsData.loyalCustomers.name}
                  </h4>
                  <p className="fs-14 mb-0">
                    {analyticsData && analyticsData.loyalCustomers.subHeading
                      ? analyticsData.loyalCustomers.subHeading
                      : "Lorem ipsum dolor"}{" "}
                  </p>
                </div>
              </div>
              {analyticsData && (
                <PerfectScrollbar
                  className="card-body height370 py-0 dz-scroll"
                  id="loyalCustomers"
                >
                  {analyticsData &&
                    analyticsData.loyalCustomers &&
                    analyticsData.loyalCustomers.data.map((d, i) => (
                      <div className="media align-items-center mb-4" key={i}>
                        <img
                          className="mr-3 rounded"
                          src={d.img}
                          width={73}
                          alt=""
                        />
                        <div className="media-body">
                          <h5 className="text-black">
                            <Link href="">
                              <a className="text-black">{d.name}</a>
                            </Link>
                          </h5>
                          <small className="text-primary mb-0">
                            <strong className="font-w600">
                              {d.totalOrder}
                            </strong>{" "}
                            Times order
                          </small>
                        </div>
                      </div>
                    ))}
                </PerfectScrollbar>
              )}
              <div className="card-footer border-0 text-center"></div>
            </div>
          </div>
          <div className="col-xl-8 col-xxl-7 col-md-6">
            <div className="card">
              <div className="card-header border-0 flex-wrap pb-0">
                <div className="d-flex mb-3">
                  <div className="separator" />
                  <div className="mr-auto">
                    <h4 className="card-title mb-2">
                      {analyticsData && analyticsData.charts.salesSummary.name}
                    </h4>
                    <p className="fs-14 mb-0">
                      {analyticsData && analyticsData.charts.salesSummary.name
                        ? analyticsData.charts.salesSummary.name
                        : "Lorem ipsum dolor sit amet,consecteture"}
                    </p>
                  </div>
                </div>
                <select className="btn dropdown-toggle text-primary btn-outline-primary c-pointer cd">
                  <option>Monthly</option>
                  <option>Weekly</option>
                  <option>Daily</option>
                </select>
              </div>
              <div className="card-body pb-0">
                <div id="chartTimeline" className="timeline-chart">
                  <SalesSummary
                    data={
                      analyticsData && analyticsData.charts.salesSummary.data
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-12">
            <Tab.Container defaultActiveKey="all_categories">
              <div className="card">
                <div className="card-header border-0 pb-0 flex-wrap">
                  <div className="d-flex mb-3">
                    <div className="separator" />
                    <div className="mr-auto">
                      <h4 className="card-title mb-2">
                        {analyticsData && analyticsData.fvtItem.name}
                      </h4>
                      <p className="fs-14 mb-0">
                        {analyticsData && analyticsData.fvtItem.subHeading
                          ? analyticsData.fvtItem.subHeading
                          : "Lorem ipsum dolor sit amet, consectetur"}
                      </p>
                    </div>
                  </div>
                  <div className="card-action card-tabs mb-3">
                    <Nav as="ul" className="nav nav-tabs" role="tablist">
                      {analyticsData &&
                        analyticsData.fvtItem.categories.map((c, i) => (
                          <Nav.Item as="li" key={i}>
                            <Nav.Link eventKey={c.event}>{c.name}</Nav.Link>
                          </Nav.Item>
                        ))}
                    </Nav>
                  </div>
                </div>
                <div className="card-body most-favourite-items pb-0">
                  <Tab.Content className="tab-content">
                    {analyticsData &&
                      analyticsData.fvtItem.data.map((d, i) =>
                        tabPan_(d.name, d.data, i)
                      )}
                  </Tab.Content>
                </div>
              </div>
            </Tab.Container>
          </div>
          <div className="col-xl-12">
            <div className="row">
              <div className="col-xl-8 col-xxl-6 col-md-6">
                <div className="card">
                  <div className="card-header flex-wrap border-0 pb-0">
                    <div className="mb-3 d-flex">
                      <div className="separator" />
                      <div className="mr-auto">
                        <h4 className="card-title mb-2">
                          {analyticsData && analyticsData.charts.revenue.name}
                        </h4>
                        <p className="fs-14 mb-0">
                          {analyticsData &&
                          analyticsData.charts.revenue.subHeading
                            ? analyticsData.charts.revenue.subHeading
                            : "Lorem ipsum dolor sit amet,consecteture"}
                        </p>
                      </div>
                    </div>
                    <select className="form-control style-1 default-select mb-3">
                      <option>Monthly</option>
                      <option>Weekly</option>
                      <option>Daily</option>
                    </select>
                  </div>
                  <div className="card-body pb-0">
                    <div id="revenueMap">
                      <Revenue
                        data={
                          analyticsData && analyticsData.charts.revenue.data
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-xxl-6 col-md-6">
                <div className="card">
                  <div className="card-header border-0 pb-0">
                    <div className="separator" />
                    <div className="mr-auto">
                      <h4 className="text-black fs-20">
                        {analyticsData && analyticsData.charts.customer.name}
                      </h4>
                      <p className="fs-13 mb-0 text-black">
                        {analyticsData &&
                        analyticsData.charts.customer.subHeading
                          ? analyticsData.charts.customer.subHeading
                          : "Lorem ipsum dolor"}
                      </p>
                    </div>
                  </div>
                  <div className="card-body pb-0">
                    <div id="customerMapkm" className="customer-chart">
                      <CustomerMapkm
                        data={
                          analyticsData && analyticsData.charts.customer.data
                        }
                      />
                    </div>
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

const mapStateToProps = (state) => ({
  analyticsData: state.dashboard.analytics,
});

export default connect(mapStateToProps, { pageTitle, getAnalytic })(Analytics);
