import { Dropdown } from "react-bootstrap";
const ToolBar2 = () => {
  return (
    <div role="toolbar" className="toolbar ml-1 ml-sm-0">
      <div className="btn-group mb-1">
        <div className="custom-control custom-checkbox pl-2">
          <input
            type="checkbox"
            className="custom-control-input"
            id="checkAll"
          />
          <label className="custom-control-label" htmlFor="checkAll" />
        </div>
      </div>
      <div className="btn-group mb-1">
        <button className="btn btn-primary light px-3" type="button">
          <i className="ti-reload" />
        </button>
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

export default ToolBar2;
