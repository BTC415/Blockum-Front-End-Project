import MetisMenu from '@metismenu/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
// import { sideBarActive } from "../redux/action/utils";
const Sidebar = () => {
  const [loveEmoji, setLoveEmoji] = useState(false);
  const [doc, setDoc] = useState();
  useEffect(() => {
    setDoc(window);
    // sideBarActive(doc);
  }, [doc]);
  // sideBarActive(doc);
  let path = doc && doc.location.pathname;
  path = path && path.split('/');
  path = path && path[path.length - 1];
  let dashboard = [
      'dashboard',
      // "index-dark",
      // "orders-list",
      // "order-detail",
      // "customer-list",
      // "analytics",
      // "reviews",
  ],
    profile = [
      'profile',
    ];
    // app = [
    //   'apps/profile',
    //   'apps/post-details',
    //   'apps/email/compose',
    //   'apps/email/inbox',
    //   'apps/email/read',
    //   'apps/ecom/product/grid',
    //   'apps/ecom/product/list',
    //   'apps/ecom/product/order',
    //   'apps/ecom/checkout',
    //   'apps/ecom/invoice',
    //   'apps/ecom/customers',
    //   'apps/ecom/product/detail',
    // ],
    // email = ['apps/email/compose', 'apps/email/inbox', 'apps/email/read'],
    // shop = [
    //   'apps/ecom/product/grid',
    //   'apps/ecom/product/list',
    //   'apps/ecom/product/list',
    //   'apps/ecom/product/order',
    //   'apps/ecom/checkout',
    //   'apps/ecom/invoice',
    //   'apps/ecom/customers',
    //   'apps/ecom/product/detail',
    // ],
    // charts = [
    //   'chart/rechart',
    //   'chart/apex',
    //   'chart/chartjs',
    //   'chart/chartist',
    //   'chart/sparkline',
    // ],
    // bootstrap = [
    //   'ui/accordion',
    //   'ui/badge',
    //   'ui/alert',
    //   'ui/button',
    //   'ui/modal',
    //   'ui/button-group',
    //   'ui/list-group',
    //   'ui/media-object',
    //   'ui/card',
    //   'ui/carousel',
    //   'ui/dropdown',
    //   'ui/popover',
    //   'ui/progressbar',
    //   'ui/tab',
    //   'ui/typography',
    //   'ui/pagination',
    //   'ui/grid',
    // ],
    // plugins = [
    //   'plugins/select2',
    //   'plugins/sweetalert',
    //   'plugins/toastr',
    //   'plugins/noui-slider',
    //   'plugins/jqvmap',
    //   'plugins/lightgallery',
    // ],
    // widget = ['widget-basic'],
    // forms = [
    //   'form/element',
    //   'form/wizard',
    //   'form/editor',
    //   'form/pickers',
    //   'form/validation',
    // ],
    // table = ['table-bootstrap-basic', 'table-datatable-basic'],
    // pages = [
    //   'page-register',
    //   'page-login',
    //   'page-lock-screen',
    //   'page-error-400',
    //   'page-error-403',
    //   'page-error-404',
    //   'page-error-500',
    //   'page-error-503',
    //   'empty-page',
    // ],
    // error = [
    //   'page-error-400',
    //   'page-error-403',
    //   'page-error-404',
    //   'page-error-500',
    //   'page-error-503',
    // ];
  return (
    <div className="deznav">
      {doc && (
        <PerfectScrollbar className="deznav-scroll">
          <MetisMenu className="metismenu" id="menu">
            <li className={`${dashboard.includes(path) ? 'mm-active' : ''}`}>
              <Link href={'/dashboard'}>
                <a className="ai-icon c-pointer" aria-expanded="false">
                  <i className="flaticon-025-dashboard" />
                  <span className="nav-text">Dashboard</span>
                </a>
              </Link>
              {/* <ul aria-expanded="false">
                <li>
                  <Link href="/">
                    <a className={`${path === "" ? "mm-active" : ""}`}>
                      Dashboard Light
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/index-dark">
                    <a
                      className={`${path === "index-dark" ? "mm-active" : ""}`}
                    >
                      Dashboard Dark
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/orders-list">
                    <a
                      className={`${path === "orders-list" ? "mm-active" : ""}`}
                    >
                      Orders list
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/order-detail">
                    <a
                      className={`${
                        path === "order-detail" ? "mm-active" : ""
                      }`}
                    >
                      Order Detail
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/customer-list">
                    <a
                      className={`${
                        path === "customer-list" ? "mm-active" : ""
                      }`}
                    >
                      Customers
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/analytics">
                    <a className={`${path === "analytics" ? "mm-active" : ""}`}>
                      Analytics
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/reviews">
                    <a className={`${path === "reviews" ? "mm-active" : ""}`}>
                      Reviews
                    </a>
                  </Link>
                </li>
              </ul> */}
            </li>
            <li className={`${profile.includes(path) ? 'mm-active' : ''}`}>
              <Link href={'/profile'}>
                <a
                  className="ai-icon c-pointer"
                  aria-expanded="false"
                >
                  <i className="flaticon-050-info" />
                  <span className="nav-text">Profile</span>
                </a>
              </Link>
              {/* <ul aria-expanded="false">
                <li>
                  <Link href="/apps/profile">
                    <a
                      className={`${
                        path === 'apps/profile' ? 'mm-active' : ''
                      }`}
                    >
                      Profile
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/apps/post-details">
                    <a
                      className={`${
                        path === 'apps/post-details' ? 'mm-active' : ''
                      }`}
                    >
                      Post Details
                    </a>
                  </Link>
                </li>
                <li className={`${email.includes(path) ? 'mm-active' : ''}`}>
                  <a className="has-arrow c-pointer" aria-expanded="false">
                    Email
                  </a>
                  <ul aria-expanded="false">
                    <li>
                      <Link href="/apps/email/compose">
                        <a
                          className={`${
                            path === 'apps/email/compose' ? 'mm-active' : ''
                          }`}
                        >
                          Compose
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/apps/email/inbox">
                        <a
                          className={`${
                            path === 'apps/email/inbox' ? 'mm-active' : ''
                          }`}
                        >
                          Inbox
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/apps/email/read">
                        <a
                          className={`${
                            path === 'apps/email/read' ? 'mm-active' : ''
                          }`}
                        >
                          Read
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                <Link href="/apps/calender">Calendar</Link>
              </li>
                <li className={`${shop.includes(path) ? 'mm-active' : ''}`}>
                  <a className="has-arrow c-pointer" aria-expanded="false">
                    Shop
                  </a>
                  <ul aria-expanded="false">
                    <li>
                      <Link href="/apps/ecom/product-grid">
                        <a
                          className={`${
                            path === 'apps/ecom/product-grid' ? 'mm-active' : ''
                          }`}
                        >
                          Product Grid
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/apps/ecom/product-list">
                        <a
                          className={`${
                            path === 'apps/ecom/product-list' ? 'mm-active' : ''
                          }`}
                        >
                          Product List
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/apps/ecom/product-detail">
                        <a
                          className={`${
                            path === 'apps/ecom/product-detail'
                              ? 'mm-active'
                              : ''
                          }`}
                        >
                          Product Details
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/apps/ecom/product-order">
                        <a
                          className={`${
                            path === 'apps/ecom/product-order'
                              ? 'mm-active'
                              : ''
                          }`}
                        >
                          Order
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/apps/ecom/checkout">
                        <a
                          className={`${
                            path === 'apps/ecom/checkout' ? 'mm-active' : ''
                          }`}
                        >
                          Checkout
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/apps/ecom/invoice">
                        <a
                          className={`${
                            path === 'apps/ecom/invoice' ? 'mm-active' : ''
                          }`}
                        >
                          Invoice
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/apps/ecom/customers">
                        <a
                          className={`${
                            path === 'apps/ecom/customers' ? 'mm-active' : ''
                          }`}
                        >
                          Customers
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul> */}
            </li>
            {/* <li className={`${charts.includes(path) ? 'mm-active' : ''}`}>
              <a className="has-arrow ai-icon c-pointer" aria-expanded="false">
                <i className="flaticon-041-graph" />
                <span className="nav-text">Charts</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/chart/rechart">
                    <a
                      className={`${
                        path === 'chart/rechart' ? 'mm-active' : ''
                      }`}
                    >
                      Rechart
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/chart/chartjs">
                    <a
                      className={`${
                        path === 'chart/chartjs' ? 'mm-active' : ''
                      }`}
                    >
                      Chartjs
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/chart/apex">
                    <a
                      className={`${path === 'chart/apex' ? 'mm-active' : ''}`}
                    >
                      ApexChart
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/chart/chartist">
                    <a
                      className={`${
                        path === 'chart/chartist' ? 'mm-active' : ''
                      }`}
                    >
                      Chartist
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/chart/sparkline">
                    <a
                      className={`${
                        path === 'chart/sparkline' ? 'mm-active' : ''
                      }`}
                    >
                      Sparkline
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className={`${bootstrap.includes(path) ? 'mm-active' : ''}`}>
              <a className="has-arrow ai-icon c-pointer" aria-expanded="false">
                <i className="flaticon-086-star" />
                <span className="nav-text">Bootstrap</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/ui/accordion">
                    <a
                      className={`${
                        path === 'ui/accordion' ? 'mm-active' : ''
                      }`}
                    >
                      Accordion
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/ui/alert">
                    <a className={`${path === 'ui/alert' ? 'mm-active' : ''}`}>
                      Alert
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/ui/badge">
                    <a className={`${path === 'ui/badge' ? 'mm-active' : ''}`}>
                      Badge
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/ui/button">Button</Link>
                </li>
                <li>
                  <Link href="/ui/modal">
                    <a className={`${path === 'ui/button' ? 'mm-active' : ''}`}>
                      Modal
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/ui/button-group">
                    <a
                      className={`${
                        path === 'ui/button-group' ? 'mm-active' : ''
                      }`}
                    >
                      Button Group
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/ui/list-group">
                    <a
                      className={`${
                        path === 'ui/list-group' ? 'mm-active' : ''
                      }`}
                    >
                      List Group
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/ui/media-object">
                    <a
                      className={`${
                        path === 'ui/media-object' ? 'mm-active' : ''
                      }`}
                    >
                      Media Object
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/ui/card">
                    <a className={`${path === 'ui/card' ? 'mm-active' : ''}`}>
                      Cards
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/ui/dropdown">
                    <a
                      className={`${path === 'ui/dropdown' ? 'mm-active' : ''}`}
                    >
                      Dropdown
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/ui/popover">
                    <a
                      className={`${path === 'ui/popover' ? 'mm-active' : ''}`}
                    >
                      Popover
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/ui/progressbar">
                    <a
                      className={`${
                        path === 'ui/progressbar' ? 'mm-active' : ''
                      }`}
                    >
                      Progressbar
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/ui/tab">
                    <a className={`${path === 'ui/tab' ? 'mm-active' : ''}`}>
                      Tab
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/ui/typography">
                    <a
                      className={`${
                        path === 'ui/typography' ? 'mm-active' : ''
                      }`}
                    >
                      Typography
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/ui/pagination">
                    <a
                      className={`${
                        path === 'ui/pagination' ? 'mm-active' : ''
                      }`}
                    >
                      Pagination
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/ui/grid">
                    <a className={`${path === 'ui/grid' ? 'mm-active' : ''}`}>
                      Grid
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className={`${plugins.includes(path) ? 'mm-active' : ''}`}>
              <a className="has-arrow ai-icon c-pointer" aria-expanded="false">
                <i className="flaticon-045-heart" />
                <span className="nav-text">Plugins</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/plugins/select2">Select 2</Link>
                </li>
                <li>
                <Link href="/plugins/nestable">Nestedable</Link>
              </li>
                <li>
                  <Link href="/plugins/noui-slider">Noui Slider</Link>
                </li>
                <li>
                  <Link href="/plugins/sweetalert">Sweet Alert</Link>
                </li>
                <li>
                  <Link href="/plugins/toastr">Toastr</Link>
                </li>
                <li>
                  <Link href="/plugins/jqvmap">Jqv Map</Link>
                </li>
                <li>
                  <Link href="/plugins/lightgallery">Light Gallery</Link>
                </li>
              </ul>
            </li>

            <li className={`${widget.includes(path) ? 'mm-active' : ''}`}>
              <Link href="/widget-basic">
                <a className="ai-icon" aria-expanded="false">
                  <i className="flaticon-013-checkmark" />
                  <span className="nav-text">Widget</span>
                </a>
              </Link>
            </li>
            <li className={`${forms.includes(path) ? 'mm-active' : ''}`}>
              <a className="has-arrow ai-icon c-pointer" aria-expanded="false">
                <i className="flaticon-072-printer" />
                <span className="nav-text">Forms</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/form/element">
                    <a
                      className={`${
                        path === '/form/element' ? 'mm-active' : ''
                      }`}
                    >
                      Form Elements
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/form/wizard">
                    <a
                      className={`${
                        path === '/form/wizard' ? 'mm-active' : ''
                      }`}
                    >
                      Wizard
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/form/editor">
                    <a
                      className={`${
                        path === '/form/editor' ? 'mm-active' : ''
                      }`}
                    >
                      Summernote
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/form/pickers">
                    <a
                      className={`${
                        path === '/form/pickers' ? 'mm-active' : ''
                      }`}
                    >
                      Pickers
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/form/validation">
                    <a
                      className={`${
                        path === '/form/validation' ? 'mm-active' : ''
                      }`}
                    >
                      Formik Validate
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className={`${table.includes(path) ? 'mm-active' : ''}`}>
              <a className="has-arrow ai-icon c-pointer" aria-expanded="false">
                <i className="flaticon-043-menu" />
                <span className="nav-text">Table</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/table/bootstrap">
                    <a
                      className={`${
                        path === '/table/bootstrap' ? 'mm-active' : ''
                      }`}
                    >
                      Bootstrap
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/table/datatable">
                    <a
                      className={`${
                        path === '/table/datatable' ? 'mm-active' : ''
                      }`}
                    >
                      Datatable
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/table/react">
                    <a
                      className={`${
                        path === '/table/react' ? 'mm-active' : ''
                      }`}
                    >
                      React Table
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className={`${pages.includes(path) ? 'mm-active' : ''}`}>
              <a className="has-arrow ai-icon c-pointer" aria-expanded="false">
                <i className="flaticon-022-copy" />
                <span className="nav-text">Pages</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a className="has-arrow c-pointer" aria-expanded="false">
                    Error
                  </a>
                  <ul aria-expanded="false">
                    <li>
                      <Link href="/pages/error/400">Error 400</Link>
                    </li>
                    <li>
                      <Link href="/pages/error/403">Error 403</Link>
                    </li>
                    <li>
                      <Link href="/pages/error/404">Error 404</Link>
                    </li>
                    <li>
                      <Link href="/pages/error/500">Error 500</Link>
                    </li>
                    <li>
                      <Link href="/pages/error/503">Error 503</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/pages/lock-screen">Lock Screen</Link>
                </li>
                <li>
                  <Link href="/empty-page">
                    <a
                      className={`${path === 'empty-page' ? 'mm-active' : ''}`}
                    >
                      Empty Page
                    </a>
                  </Link>
                </li>
              </ul>
            </li> */}
          </MetisMenu>
          <div className="copyright">
            <p>
              <strong>Uena Admin Dashboard</strong> © {new Date().getFullYear()}{' '}
              All Rights Reserved
            </p>
            <p>
              Made with{' '}
              <span
                className={`${loveEmoji ? 'heart heart-blast' : 'heart'}`}
                onClick={() => setLoveEmoji(!loveEmoji)}
              ></span>{' '}
              by DexignZone
            </p>
          </div>
        </PerfectScrollbar>
      )}
    </div>
  );
};

export default Sidebar;
