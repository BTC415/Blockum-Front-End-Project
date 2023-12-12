import Link from "next/dist/client/link";
import { Fragment, useEffect, useState } from "react";
import { Nav, TabContainer, TabContent, TabPane } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import AppsLayout from "../src/components/apps/AppsLayout";
import CameraModal from "../src/components/apps/modal/CameraModal";
import LinkModal from "../src/components/apps/modal/LinkModal";
import PostModal from "../src/components/apps/modal/PostModal";
import ReplayModal from "../src/components/apps/modal/ReplayModal";
import PageTitle_ from "../src/components/PageTitle";
import { getProfileData } from "../src/redux/action/apps";
import { moodChange, pageTitle } from "../src/redux/action/utils";
const Profile = ({
  pageTitle,
  getProfileData,
  profile,
  posts,
  interest,
  headerImg,
}) => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("App Profile");
    getProfileData();
  }, []);

  const [postModal, setPostModal] = useState(false);
  const [cameraModal, setCameraModal] = useState(false);
  const [linkModal, setLinkModal] = useState(false);
  const [sendMessage, setSendMessage] = useState(false);
  const [replay, setReplay] = useState(false);

  const banner = {
    headerImg: headerImg,
    name: profile && profile.name,
    email: profile && profile.email,
    designation: profile && profile.designation,
    profileImg: profile && profile.img,
  };
  const overview = profile && profile.socileMedia;
  const highlights = posts && posts.highlights;
  const news = posts && posts.latest;

  return (
    <Fragment>
      <PageTitle_ active="Profile" mother="App" customText={true} />
      <AppsLayout
        banner={banner && banner}
        overview={overview && overview}
        highlights={highlights}
        news={news}
        interest={interest && interest}
      >
        <div className="card">
          <div className="card-body">
            <div className="profile-tab">
              <div className="custom-tab-1">
                <TabContainer defaultActiveKey="my-posts">
                  <Nav as="ul" className="nav nav-tabs">
                    <Nav.Item as="li" className="nav-item">
                      <Nav.Link
                        as="a"
                        eventKey="my-posts"
                        data-toggle="tab"
                        className="nav-link c-pointer"
                      >
                        Posts
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="nav-item">
                      <Nav.Link
                        as="a"
                        eventKey="about-me"
                        data-toggle="tab"
                        className="nav-link c-pointer"
                      >
                        About Me
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="nav-item">
                      <Nav.Link
                        as="a"
                        eventKey="profile-settings"
                        data-toggle="tab"
                        className="nav-link c-pointer"
                      >
                        Setting
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <TabContent className="tab-content">
                    <TabPane eventKey="my-posts">
                      <div className="my-post-content pt-3">
                        <div className="post-input">
                          <textarea
                            name="textarea"
                            id="textarea"
                            cols={30}
                            rows={5}
                            className="form-control bg-transparent"
                            placeholder="Please type what you want...."
                            defaultValue={""}
                          />
                          <Link href="">
                            <a
                              className="btn btn-primary light mr-1 px-3"
                              onClick={() => setLinkModal(true)}
                            >
                              <i className="fa fa-link m-0" />{" "}
                            </a>
                          </Link>

                          <LinkModal
                            modul={linkModal}
                            modelChange={() => setLinkModal(false)}
                          />
                          <Link href="">
                            <a
                              className="btn btn-primary light mr-1 px-3"
                              onClick={() => setCameraModal(true)}
                            >
                              <i className="fa fa-camera m-0" />{" "}
                            </a>
                          </Link>

                          <CameraModal
                            modal={cameraModal}
                            modalChange={() => setCameraModal(false)}
                          />
                          <Link href="">
                            <a
                              className="btn btn-primary"
                              onClick={() => setPostModal(true)}
                            >
                              Post
                            </a>
                          </Link>

                          <PostModal
                            modal={postModal}
                            modalChange={() => setPostModal(false)}
                          />
                        </div>
                        {posts &&
                          posts.data.map((post, i) => (
                            <div
                              className={`${
                                posts && posts.data.length - 1 == i
                                  ? ""
                                  : "pb-5"
                              } profile-uoloaded-post border-bottom-1 `}
                              key={i}
                            >
                              <img
                                src={post.img}
                                alt=""
                                className="img-fluid w-100"
                              />
                              <Link href="/apps/post-details">
                                <a className="post-title">
                                  <h3 className="text-black">{post.title}</h3>
                                </a>
                              </Link>

                              <p>{post.dec}</p>
                              <button className="btn btn-primary mr-2">
                                <span className="mr-2">
                                  <i className="fa fa-heart" />
                                </span>
                                Like
                              </button>
                              <button
                                className="btn btn-secondary"
                                data-toggle="modal"
                                data-target="#replyModal"
                                onClick={() => setReplay(true)}
                              >
                                <span className="mr-2">
                                  <i className="fa fa-reply" />
                                </span>
                                Reply
                              </button>
                            </div>
                          ))}
                        <ReplayModal
                          modal={replay}
                          modalChange={() => setReplay(false)}
                        />
                      </div>
                    </TabPane>
                    <TabPane eventKey="about-me">
                      <div className="profile-about-me">
                        <div className="pt-4 border-bottom-1 pb-3">
                          <h4 className="text-primary">About Me</h4>
                          {profile &&
                            profile.aboutMe.split("/n").map((ab, i) => (
                              <p key={i} className={`${i === 0 ? "mb-2" : ""}`}>
                                {ab}
                              </p>
                            ))}
                        </div>
                      </div>
                      <div className="profile-skills mb-5">
                        <h4 className="text-primary mb-2">Skills</h4>
                        {profile &&
                          profile.skills.map((skill, i) => (
                            <Link href="" key={i}>
                              <a
                                className={`btn btn-primary light btn-xs mb-1 ${
                                  profile && profile.skills.length - 1 == i
                                    ? ""
                                    : "mr-1"
                                }`}
                              >
                                {skill}
                              </a>
                            </Link>
                          ))}
                      </div>
                      <div className="profile-lang  mb-5">
                        <h4 className="text-primary mb-2">Language</h4>
                        {profile &&
                          profile.language.map((language, i) => (
                            <Link href="" key={i}>
                              <a className="text-muted pr-3 f-s-16">
                                <i className="flag-icon flag-icon-us" />{" "}
                                {language}
                              </a>
                            </Link>
                          ))}
                      </div>

                      <div className="profile-personal-info">
                        <h4 className="text-primary mb-4">
                          Personal Information
                        </h4>
                        <div className="row mb-2">
                          <div className="col-sm-3 col-5">
                            <h5 className="f-w-500">
                              Name <span className="pull-right">:</span>
                            </h5>
                          </div>
                          <div className="col-sm-9 col-7">
                            <span>{profile && profile.name}</span>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-sm-3 col-5">
                            <h5 className="f-w-500">
                              Email <span className="pull-right">:</span>
                            </h5>
                          </div>
                          <div className="col-sm-9 col-7">
                            <span>{profile && profile.email}</span>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-sm-3 col-5">
                            <h5 className="f-w-500">
                              Availability <span className="pull-right">:</span>
                            </h5>
                          </div>
                          <div className="col-sm-9 col-7">
                            <span>{profile && profile.availability}</span>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-sm-3 col-5">
                            <h5 className="f-w-500">
                              Age <span className="pull-right">:</span>
                            </h5>
                          </div>
                          <div className="col-sm-9 col-7">
                            <span>{profile && profile.age}</span>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-sm-3 col-5">
                            <h5 className="f-w-500">
                              Location <span className="pull-right">:</span>
                            </h5>
                          </div>
                          <div className="col-sm-9 col-7">
                            <span>{profile && profile.location}</span>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-sm-3 col-5">
                            <h5 className="f-w-500">
                              Year Experience{" "}
                              <span className="pull-right">:</span>
                            </h5>
                          </div>
                          <div className="col-sm-9 col-7">
                            <span>
                              {profile && profile.experience < 10
                                ? `0${profile && profile.experience}`
                                : profile && profile.experience}{" "}
                              Year Experiences
                            </span>
                          </div>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane eventKey="profile-settings">
                      <div className="pt-3">
                        <div className="settings-form">
                          <h4 className="text-primary">Account Setting</h4>
                          <form onSubmit={(e) => e.preventDefault()}>
                            <div className="form-row">
                              <div className="form-group col-md-6">
                                <label>Email</label>
                                <input
                                  type="email"
                                  placeholder="Email"
                                  className="form-control"
                                />
                              </div>
                              <div className="form-group col-md-6">
                                <label>Password</label>
                                <input
                                  type="password"
                                  placeholder="Password"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              <label>Address</label>
                              <input
                                type="text"
                                placeholder="1234 Main St"
                                className="form-control"
                              />
                            </div>
                            <div className="form-group">
                              <label>Address 2</label>
                              <input
                                type="text"
                                placeholder="Apartment, studio, or floor"
                                className="form-control"
                              />
                            </div>
                            <div className="form-row">
                              <div className="form-group col-md-6">
                                <label>City</label>
                                <input type="text" className="form-control" />
                              </div>
                              <div className="form-group col-md-4">
                                <label>State</label>
                                <select
                                  className="form-control default-select"
                                  id="inputState"
                                >
                                  <option defaultValue={'DEFAULT'} >Choose...</option>
                                  <option>Option 1</option>
                                  <option>Option 2</option>
                                  <option>Option 3</option>
                                </select>
                              </div>
                              <div className="form-group col-md-2">
                                <label>Zip</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="gridCheck"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="gridCheck"
                                >
                                  {" "}
                                  Check me out
                                </label>
                              </div>
                            </div>
                            <button className="btn btn-primary" type="submit">
                              Sign in
                            </button>
                          </form>
                        </div>
                      </div>
                    </TabPane>
                  </TabContent>
                </TabContainer>
              </div>
            </div>
          </div>
        </div>
      </AppsLayout>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  profile: state.apps.profile,
  posts: state.apps.posts,
  interest: state.apps.interest,
  headerImg: state.apps.headerImg,
});

export default connect(mapStateToProps, { pageTitle, getProfileData })(Profile);
