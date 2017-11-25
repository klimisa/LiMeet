import React from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";

class MultiDropdown extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedOption: ""
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(selectedOption) {
		this.setState({ selectedOption: selectedOption });
		this.props.onChange(selectedOption);
	};
	render() {
		return (
			<Select
				multi
				name={this.props.name}
				value={this.state.selectedOption}
				onChange={this.handleChange}
				options={this.props.options}
			/>
		);
	}
}

export default MultiDropdown;
