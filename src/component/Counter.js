import React from 'react';

import logProps from '../hoc/log-props'

class Counter extends React.Component {


	render() {
		const { onCountDown, onCountUp, count } = this.props;

		return (
			<div className="counter btn-group">
				<button className="btn btn-danger" onClick={onCountDown}>-</button>
				<span className="btn btn-secondary">{count}</span>
				<button className="btn btn-success" onClick={onCountUp}>+</button>
			</div>
		);
	}
}

export default logProps(Counter);