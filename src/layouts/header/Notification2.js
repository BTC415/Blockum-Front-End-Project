import Link from "next/link";
import { useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import { connect } from "react-redux";
import { notificationFun2 } from "../../redux/action/header";
const Notification2 = ({ notificationFun2, data }) => {
  useEffect(() => {
    notificationFun2();
  }, []);
  return (
    <Dropdown as="li" className="nav-item dropdown notification_dropdown">
      <Dropdown.Toggle
        as="a"
        variant=""
        className="nav-link i-false c-pointer"
        data-toggle="dropdown"
      >
        <svg
          width={26}
          height={26}
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.515 24.8942C11.2013 25.4995 12.0849 25.8336 13 25.8336C13.9151 25.8336 14.7987 25.4995 15.485 24.8942C18.4892 22.2517 25.5125 15.2751 25.8334 7.68005C25.9373 5.80349 25.2965 3.96171 24.0502 2.55489C22.804 1.14807 21.0529 0.289858 19.1775 0.16672C17.964 0.10879 16.7563 0.367679 15.6732 0.917932C14.5901 1.46819 13.6688 2.29086 13 3.30505C12.3342 2.28795 11.4135 1.46302 10.3296 0.912401C9.24579 0.361783 8.03662 0.10469 6.82252 0.16672C4.94711 0.289858 3.19606 1.14807 1.9498 2.55489C0.703537 3.96171 0.0627602 5.80349 0.166687 7.68005C0.48752 15.2751 7.51085 22.2517 10.515 24.8942Z"
            fill="#636363"
          />
        </svg>
        <div className="pulse-css" />
      </Dropdown.Toggle>
      <Dropdown.Menu
        alignRight={true}
        className="dropdown-menu dropdown-menu-right mt-4"
      >
        <PerfectScrollbar
          id="DZ_W_TimeLine02"
          className="widget-timeline dz-scroll style-1 ps ps--active-y p-3 height370"
        >
          <ul className="timeline">
            {data &&
              data.map((d) => (
                <li key={d}>
                  <div className={`timeline-badge ${d.color}`} />
                  <Link href="">
                    <a className="timeline-panel text-muted">
                      <span>{d.time} minutes ago</span>
                      <h6 className="mb-0">
                        {d.title}{" "}
                        {d.spacialText && (
                          <strong className={`text-${d.spacialText.color}`}>
                            {d.spacialText.text}
                          </strong>
                        )}
                      </h6>
                      {d.text && <p className="mb-0">{d.text}</p>}
                    </a>
                  </Link>
                </li>
              ))}
          </ul>
        </PerfectScrollbar>
      </Dropdown.Menu>
    </Dropdown>
  );
};
const mapStateToProps = (state) => ({ data: state.header.notification_2 });
export default connect(mapStateToProps, { notificationFun2 })(Notification2);
