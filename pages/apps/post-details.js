import Link from "next/link";
import { Fragment, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import AppsLayout from "../../src/components/apps/AppsLayout";
import PageTitle_ from "../../src/components/PageTitle";
import { getProfileData } from "../../src/redux/action/apps";
import { moodChange, pageTitle } from "../../src/redux/action/utils";
const PostDetails = ({
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
            <div className="post-details">
              <h3 className="mb-2 text-black">{posts && posts.single.title}</h3>
              <ul className="mb-4 post-meta d-flex flex-wrap">
                <li className="post-author mr-3">
                  By {posts && posts.single.author}
                </li>
                <li className="post-date mr-3">
                  <i className="fa fa-calender" />
                  {posts && posts.single.date}
                </li>
                <li className="post-comment">
                  <i className="fa fa-comments-o" />{" "}
                  {posts && posts.single.comments}
                </li>
              </ul>
              <img
                src={posts && posts.single.img}
                alt=""
                className="img-fluid mb-3 w-100"
              />
              {posts &&
                posts.single.dec
                  .split("/n")
                  .map((dec, i) => <p key={i}>{dec}</p>)}
              <div className="profile-skills mt-5 mb-5">
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
              <div className="comment-respond" id="respond">
                <h4
                  className="comment-reply-title text-primary mb-3"
                  id="reply-title"
                >
                  Leave a Reply{" "}
                </h4>
                <form
                  className="comment-form"
                  id="commentform"
                  method="post"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label
                          htmlFor="author"
                          className="text-black font-w600"
                        >
                          Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Author"
                          name="Author"
                          placeholder="Author"
                          id="author"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="email" className="text-black font-w600">
                          Email <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Email"
                          placeholder="Email"
                          name="Email"
                          id="email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label
                          htmlFor="comment"
                          className="text-black font-w600"
                        >
                          Comment
                        </label>
                        <textarea
                          rows={8}
                          className="form-control"
                          name="comment"
                          placeholder="Comment"
                          id="comment"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="submit"
                          value="Post Comment"
                          className="submit btn btn-primary"
                          id="submit"
                          name="submit"
                        />
                      </div>
                    </div>
                  </div>
                </form>
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

export default connect(mapStateToProps, { pageTitle, getProfileData })(
  PostDetails
);
