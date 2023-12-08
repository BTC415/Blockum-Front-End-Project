import Link from "next/link";
import { useEffect, useState } from "react";

const EmailLeft = () => {
  const [pageUrl, setPageUrl] = useState(null);
  useEffect(() => {
    setPageUrl(window.location.pathname);
  }, [pageUrl]);
  return (
    <div className="email-left-box px-0 mb-3">
      <div className="p-0">
        <Link href="/apps/email/compose">
          <a className="btn btn-primary btn-block">Compose</a>
        </Link>
      </div>
      <div className="mail-list mt-4">
        <Link href="/apps/email/inbox">
          <a className="list-group-item active">
            <i className="fa fa-inbox font-18 align-middle mr-2" /> Inbox{" "}
            <span className="badge badge-primary badge-sm float-right">
              198
            </span>{" "}
          </a>
        </Link>
        <Link href="">
          <a className="list-group-item">
            <i className="fa fa-paper-plane font-18 align-middle mr-2" />
            Sent
          </a>
        </Link>{" "}
        <Link href="">
          <a className="list-group-item">
            <i className="fa fa-star-o font-18 align-middle mr-2" />
            Important{" "}
            <span className="badge badge-danger text-white badge-sm float-right">
              47
            </span>
          </a>
        </Link>
        <Link href="">
          <a className="list-group-item">
            <i className="mdi mdi-file-document-box font-18 align-middle mr-2" />
            Draft
          </a>
        </Link>
        <Link href="">
          <a className="list-group-item">
            <i className="fa fa-trash font-18 align-middle mr-2" />
            Trash
          </a>
        </Link>
      </div>
      <div className="intro-title d-flex justify-content-between">
        <h5>Categories</h5>
        <i className="fa fa-chevron-down" aria-hidden="true" />
      </div>
      <div className="mail-list mt-4">
        <Link href={`${pageUrl}`}>
          <a className="list-group-item">
            <span className="icon-warning">
              <i className="fa fa-circle" aria-hidden="true" />
            </span>
            Work{" "}
          </a>
        </Link>
        <Link href={`${pageUrl}`}>
          <a className="list-group-item">
            <span className="icon-primary">
              <i className="fa fa-circle" aria-hidden="true" />
            </span>
            Private{" "}
          </a>
        </Link>
        <Link href={`${pageUrl}`}>
          <a className="list-group-item">
            <span className="icon-success">
              <i className="fa fa-circle" aria-hidden="true" />
            </span>
            Support{" "}
          </a>
        </Link>
        <Link href={`${pageUrl}`}>
          <a className="list-group-item">
            <span className="icon-dpink">
              <i className="fa fa-circle" aria-hidden="true" />
            </span>
            Social{" "}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default EmailLeft;
