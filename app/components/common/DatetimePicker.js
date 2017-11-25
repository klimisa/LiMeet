import React from "react";
import Datetime from "react-datetime";
import 'react-datetime/css/react-datetime.css';

class DatetimePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultValue: "",
      dateFormat: "DD/MM/YYYY",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(newDate)  {
    return this.props.onChange(newDate);
  }

  render() {
    const {defaultValue, dateFormat} = this.state;
    return <Datetime
      defaultValue={defaultValue}
      dateFormat={dateFormat}
      onChange={this.handleChange}
      closeOnSelect={true}
    />;
  }
}

export default DatetimePicker;