import Router from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getUser } from '../redux/action/auth';
import Demos from './Demos';
import Footer from './Footer';
import ChatBox from './header/chatbox/ChatBox';
// import Header from "./header/Header";
import NavHeader from './header/NavHeader';
import PreLoader from './PreLoader';
import Settings from './Settings';
import Sidebar from './Sidebar';

import dynamic from 'next/dynamic';

const Header = dynamic(import('./header/Header'), { ssr: false });

const Layout = ({ children, getUser, user }) => {
  const [height, setHeight] = useState();
  const [active, setActive] = useState(false);
  useEffect(() => {
    setHeight(window.screen.height - 100);
    getUser();
    setActive(document.querySelectorAll('.metismenu a') ? true : false);
  }, [user]);

  return (
    <Fragment>
      {!active ? (
        <PreLoader />
      ) : (
        <div id="main-wrapper" className="show">
          <NavHeader />
          <ChatBox />
          <Header />
          {/* <Sidebar /> */}
          <div className="content-body" style={{ minHeight: height }}>
            <div className="container-fluid">{children}</div>
          </div>
          <Demos />
          <Settings />
          <Footer />
        </div>
      )}
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  user: state.auth.users,
});

export default connect(mapStateToProps, { getUser })(Layout);
