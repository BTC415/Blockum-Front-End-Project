import React, { Component } from "react";
import ClockPicker from "react-clockpicker";
// require('');

class DateAndTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 12,
      minutes: 20,
      enabled: true,
    };
  }

  render() {
    let { hours, minutes, enabled } = this.state;
    let checkbox = (
      <input
        type="checkbox"
        checked={this.state.enabled}
        onChange={(e) => this.setState({ enabled: e.target.checked })}
      />
    );

    return (
      <ClockPicker
        addonBefore={checkbox}
        placement="bottom"
        disabled={!enabled}
        hours={hours}
        minutes={minutes}
        onChange={(hours, minutes) => this.setState({ hours, minutes })}
      />
    );
  }
}

export default DateAndTime;
