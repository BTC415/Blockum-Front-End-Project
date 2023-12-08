import { RangeDatePicker } from "@y0c/react-datepicker";
import ColorPicker_ from "material-ui-color-picker";
import dynamic from "next/dynamic";
import Pickadate from "pickadate/builds/react-dom";
import { Fragment, useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import PageTitle_ from "../../src/components/PageTitle";
import { moodChange, pageTitle } from "../../src/redux/action/utils";
const MetarialTime = dynamic(
  () => import("../../src/components/forms/pickers/MetarialTime"),
  {
    ssr: false,
  }
);
const MetarialDateAndTime = dynamic(
  () => import("../../src/components/forms/pickers/MetarialDateAndTime"),
  {
    ssr: false,
  }
);
const MetarialDate = dynamic(
  () => import("../../src/components/forms/pickers/MetarialDate"),
  {
    ssr: false,
  }
);
const Gradient = dynamic(
  () => import("../../src/components/forms/pickers/Gradient"),
  {
    ssr: false,
  }
);

const Pickers = ({ pageTitle }) => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("Form Pickers");
  }, []);
  const [color, setColor] = useState("#5b0b0b");
  const [colorChange, setColorChange] = useState("#7ab2fa");

  return (
    <Fragment>
      <PageTitle_ active="Pickers" mother="Form" />
      <div className="row">
        <div className="col-xl-9">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Date Picker</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="example rangeDatePicker">
                    <p className="mb-1">Date Range Pick</p>
                    <RangeDatePicker
                      startText="Start"
                      endText="End"
                      startPlaceholder="Start Date"
                      endPlaceholder="End Date"
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="example rangeDatePicker">
                    <p className="mb-1">Date Range With Time</p>
                    <RangeDatePicker
                      startText="Start"
                      endText="End"
                      startPlaceholder="Start Date"
                      endPlaceholder="End Date"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3">
          {/* Card */}
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Pick-Date picker</h4>
            </div>
            <div className="card-body">
              <p className="mb-1">Default picker</p>

              <Pickadate.InputPicker
                className="datepicker-default form-control"
                id="datepicker"
              />
            </div>
          </div>
          {/* Card */}
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Date picker</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 col-xl-3 col-xxl-6 mb-3">
                  <label>Default Clock Picker</label>
                  <div className="input-group clockpicker">
                    <MetarialTime />
                    <span className="input-group-append">
                      <span className="input-group-text">
                        <i className="fa fa-clock-o" />
                      </span>
                    </span>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3 col-xxl-6 mb-3">
                  <label>Auto close Clock Picker</label>
                  <div
                    className="input-group clockpicker"
                    data-placement="bottom"
                    data-align="top"
                    data-autoclose="true"
                  >
                    <MetarialTime />
                    <span className="input-group-append">
                      <span className="input-group-text">
                        <i className="fa fa-clock-o" />
                      </span>
                    </span>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3 col-xxl-6 mb-3">
                  <label>Now time</label>
                  <div className="input-group">
                    <MetarialTime />
                    <span className="input-group-append">
                      <span className="input-group-text">
                        <i className="fa fa-clock-o" />
                      </span>
                    </span>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3 col-xxl-6">
                  <label>Left Placement</label>
                  <div
                    className="input-group clockpicker"
                    data-placement="left"
                    data-align="top"
                    data-autoclose="true"
                  >
                    <MetarialTime />
                    <span className="input-group-append">
                      <span className="input-group-text">
                        <i className="fa fa-clock-o" />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Material Date picker</h4>
            </div>
            <div className="card-body">
              <div className="row form-material">
                <div className="col-xl-3 col-xxl-6 col-md-6 mb-3">
                  <label>Default Material Date Picker</label>
                  <MetarialDate />
                </div>
                <div className="col-xl-3 col-xxl-6 col-md-6 mb-3">
                  <label>Default Material Date Timepicker</label>
                  <MetarialDateAndTime />
                </div>
                <div className="col-xl-3 col-xxl-6 col-md-6 mb-3">
                  <label>Time Picker</label>
                  <MetarialTime />
                </div>
                <div className="col-xl-3 col-xxl-6 col-md-6">
                  <label>Min Date set</label>
                  <MetarialDateAndTime />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Color Picker</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-xl-4 col-lg-6 mb-3">
                  <div className="example">
                    <p className="mb-1">Simple mode</p>
                    <ColorPicker_
                      id="color_1"
                      className="d-none"
                      value={colorChange}
                      onChange={(colorChange) => setColorChange(colorChange)}
                    />
                    <label
                      htmlFor="color_1"
                      className="color_label"
                      style={{
                        background: colorChange,
                      }}
                    />
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 mb-3">
                  <div className="example">
                    <p className="mb-1">Complex mode</p>
                    <ColorPicker_
                      name="color"
                      id="color"
                      className="d-none"
                      defaultValue="#5b0b0b"
                      value={color}
                      onChange={(color) => setColor(color)}
                    />

                    <label
                      htmlFor="color"
                      className="color_label"
                      style={{
                        background: color,
                      }}
                    />
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 mb-3">
                  <div className="example">
                    <p className="mb-1">Gradiant mode</p>
                    <Gradient />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(null, { pageTitle })(Pickers);
