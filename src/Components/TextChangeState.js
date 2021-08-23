import React from 'react';
//Class components...................................................................
class TextChangeState extends React.Component {

	constructor() {
		super();
		this.state = {
			message: 'hello visitor'
		}
	}

	changeMessage() {
		this.setState({ message: 'thanku for your support'})
	}


	render() {
		return (
			<div>
				<h2>Hello {this.state.message}</h2>
				<button onClick={() => this.changeMessage()}>Subcscribe</button>
			</div>
		)
	}
}
export default TextChangeState 