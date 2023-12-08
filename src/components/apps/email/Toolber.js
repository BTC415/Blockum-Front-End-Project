import { Dropdown } from "react-bootstrap";
const Toolber = () => {
  return (
    <div className="toolbar mb-4" role="toolbar">
      <div className="btn-group mb-1">
        <button type="button" className="btn btn-primary light px-3">
          <i className="fa fa-archive" />
        </button>
        <button type="button" className="btn btn-primary light px-3">
          <i className="fa fa-exclamation-circle" />
        </button>
        <button type="button" className="btn btn-primary light px-3">
          <i className="fa fa-trash" />
        </button>
      </div>
      <div className="btn-group mb-1">
        <Dropdown>
          <Dropdown.Toggle
            as="button"
            variant=""
            className="btn btn-primary light dropdown-toggle px-3 ml-1"
          >
            <i className="fa fa-folder" /> <b className="caret m-l-5" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Social</Dropdown.Item>
            <Dropdown.Item>Promotions</Dropdown.Item>
            <Dropdown.Item>Updates</Dropdown.Item>
            <Dropdown.Item>Forums</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="btn-group mb-1">
        <Dropdown>
          <Dropdown.Toggle
            as="button"
            variant=""
            className="btn btn-primary light dropdown-toggle px-3 ml-1"
          >
            <i className="fa fa-tag" /> <b className="caret m-l-5" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Updates</Dropdown.Item>
            <Dropdown.Item>Social</Dropdown.Item>
            <Dropdown.Item>Promotions</Dropdown.Item>
            <Dropdown.Item>Forums</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="btn-group mb-1">
        <Dropdown>
          <Dropdown.Toggle
            as="button"
            variant=""
            className="btn btn-primary light dropdown-toggle v ml-1"
          >
            More <span className="caret m-l-5" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {" "}
            <Dropdown.Item>Mark as Unread</Dropdown.Item>{" "}
            <Dropdown.Item>Add to Tasks</Dropdown.Item>
            <Dropdown.Item>Add Star</Dropdown.Item>{" "}
            <Dropdown.Item>Mute</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Toolber;
