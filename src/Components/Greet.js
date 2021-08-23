import React from 'react';
//Class components...................................................................
class Greet extends React.Component {

	render() {
		const{name} = this.props//this property is known as destructring props
		return (
			<div>
				<h2>Hello {name}</h2>
			</div>
		)
	}
}
export default Greet