import React, { Component } from 'react';

export class Save extends Component {
    handleClick = () => {
        this.props.onSaveClick(this.props);
    }
	render() {
		return (
            <button href="#" onClick={this.handleClick} className="btn btn-success">Save</button>
        )
        }
    }
export default Save