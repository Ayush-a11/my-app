import React from 'react'

class Counter extends React.Component {

	constructor(props) {
		super();
		this.state = {
			count:0
		}
	}
	increment() {
		this.setState({count:this.state.count+1})
	}

	render() {
		return (
			<div>
				<h1>{this.state.count}</h1>
				<button onClick={() => this.increment()}>clickhere</button>
			</div>
		)
	}
}
export default Counter