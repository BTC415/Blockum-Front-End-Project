import Link from "next/link";
import { Fragment, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import EmailLayout from "../../../src/components/apps/email/EmailLayout";
import Table from "../../../src/components/InboxTable";
import PageTitle_ from "../../../src/components/PageTitle";
import { emailInbox } from "../../../src/redux/action/apps";
import { moodChange, pageTitle } from "../../../src/redux/action/utils";
const inbox = ({ pageTitle, emailInbox, inboxData }) => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("Inbox");
    emailInbox();
  }, []);
  return (
    <Fragment>
      <PageTitle_ active="Inbox" mother="Email" />
      <EmailLayout readToolbar={true}>
        <Table
          tableId=".message"
          sort={5}
          pagginationContainerId="#inbox-pagination"
          previousBtnClass="page-item page-indicator"
          previousBtnId="inbox-previous"
          previousIcon="la la-angle-left"
          nextBtnClass="page-item page-indicator"
          nextBtnId="inbox-next"
          nextIcon="la la-angle-right"
          pagginationClass="page-item "
          activeClass="active"
          pagginationId="inbox-paginaiton"
          checkBox={true}
          checkBoxAll=".custom-control-input"
          checkBoxMother="#checkAll"
          inbox={true}
        >
          <div className="email-list mt-3">
            {inboxData &&
              inboxData.map((inbox, i) => (
                <div className="message" key={i}>
                  <div>
                    <div className="d-flex message-single">
                      <div className="pl-1 align-self-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id={`checkbox-${i}`}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor={`checkbox-${i}`}
                          />
                        </div>
                      </div>
                      <div className="ml-2">
                        <button className="border-0 bg-transparent align-middle p-0">
                          <i className="fa fa-star" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <Link href="/apps/email/read">
                      <a className="col-mail col-mail-2">
                        <div className="subject">{inbox.title}</div>
                        <div className="date">{inbox.date}</div>
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
          <div className="row mt-4">
            <div className="col-12 pl-3">
              <nav>
                <ul
                  id="inbox-pagination"
                  className="pagination pagination-gutter pagination-primary pagination-sm no-bg"
                ></ul>
              </nav>
            </div>
          </div>
        </Table>
      </EmailLayout>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  inboxData: state.apps.emailInbox,
});

export default connect(mapStateToProps, { pageTitle, emailInbox })(inbox);
