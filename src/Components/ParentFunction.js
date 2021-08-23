import React, { Component } from 'react'
import ChildFuction from './ChildFuction'

 class ParentFunction extends Component {
	constructor() {
		super()
	
		this.state = {
			 parent: 'Parent'
		}
		this.poptext=this.poptext.bind(this)
	}
	

	poptext(name) {
		alert(`Hello ${this.state.parent} from ${name}`)

	}
	

	render() {
		return (
			<div>
				<ChildFuction func={this.poptext}></ChildFuction>
			</div>
		)
	}
}

export default ParentFunction
