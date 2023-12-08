import Link from "next/link";
import { Fragment, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import EmailLayout from "../../../src/components/apps/email/EmailLayout";
import PageTitle_ from "../../../src/components/PageTitle";
import { emailRead } from "../../../src/redux/action/apps";
import { moodChange, pageTitle } from "../../../src/redux/action/utils";
const Read = ({ pageTitle, emailRead, fullEmail }) => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("Email Read");
    emailRead();
  }, []);
  return (
    <Fragment>
      <PageTitle_ active="Read" mother="Email" />
      <EmailLayout>
        <div className="read-content">
          <div className="media pt-3 d-sm-flex d-block justify-content-between">
            <div className="clearfix mb-3 d-flex">
              <img
                className="mr-3 rounded"
                width={70}
                height={70}
                alt="image"
                src={fullEmail && fullEmail.author.img}
              />
              <div className="media-body mr-2">
                <h5 className="text-primary mb-0 mt-1">
                  {fullEmail && fullEmail.author.name}
                </h5>
                <p className="mb-0">{fullEmail && fullEmail.date}</p>
              </div>
            </div>
            <div className="clearfix mb-3">
              <Link href="">
                <a className="btn btn-primary px-3 my-1 light mr-2">
                  <i className="fa fa-reply" />{" "}
                </a>
              </Link>

              <Link href="">
                <a className="btn btn-primary px-3 my-1 light mr-2">
                  <i className="fa fa-long-arrow-right" />{" "}
                </a>
              </Link>

              <Link href="">
                <a className="btn btn-primary px-3 my-1 light mr-2">
                  <i className="fa fa-trash" />
                </a>
              </Link>
            </div>
          </div>
          <hr />
          <div className="media mb-2 mt-3">
            <div className="media-body">
              <span className="pull-right">{fullEmail && fullEmail.date}</span>
              <h5 className="my-1 text-primary">
                {fullEmail && fullEmail.title}
              </h5>
              <p className="read-content-email">
                To: Me, {fullEmail && fullEmail.form.email}
              </p>
            </div>
          </div>
          <div className="read-content-body">
            <h5 className="mb-4">
              Hi,{fullEmail && fullEmail.author.name.split(" ")[0]},
            </h5>
            <p className="mb-2">
              <strong>{fullEmail && fullEmail.author.name},</strong>{" "}
              {fullEmail && fullEmail.text.split("/n")[0]}
            </p>
            {fullEmail &&
              fullEmail.text.split("/n").map((t, i) => (
                <p className={`mb-2 ${i === 0 ? "d-none" : ""}`} key={i}>
                  {t}
                </p>
              ))}
            <h5 className="pt-3">Kind Regards</h5>
            <p>{fullEmail && fullEmail.form.name}</p>
            <hr />
          </div>
          <div className="read-content-attachment">
            <h6>
              <i className="fa fa-download mb-2" /> Attachments
              <span>({fullEmail && fullEmail.attachments.length})</span>
            </h6>
            <div className="row attachment">
              {fullEmail &&
                fullEmail.attachments.map((a, i) => (
                  <div className="col-auto" key={i}>
                    <Link href="">
                      <a className="text-muted">{a}</a>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
          <hr />
          <div className="form-group pt-3">
            <textarea
              name="write-email"
              id="write-email"
              cols={30}
              rows={5}
              className="form-control"
              placeholder="It's really an amazing.I want to know more about it..!"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="text-right">
          <button className="btn btn-primary " type="button">
            Send
          </button>
        </div>
      </EmailLayout>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  fullEmail: state.apps.fullEmail,
});

export default connect(mapStateToProps, { pageTitle, emailRead })(Read);
