import React, { Component } from 'react'

 class EventBind extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 message:'its my life'
		}
		//this.evenhandler=this.evenhandler.bind(this)
	}
	// evenhandler(){
	// 	//console.log(this)//event binding is needed beacuse this does not work in evenhandler function 
	// 	this.setState({
	// 		message:'I willRock'
	// 	})
	// }
	evenhandler=()=>{
		this.setState({message:'I willRock'})
	}
	

	render() {
		return (
			<div>
				<h1>{this.state.message}</h1>
				<button onClick={this.evenhandler}>Clickhere</button>
				{/* <button onClick={this.evenhandler.bind(this)}>Clickhere</button> */}
				{/* <button onClick={()=>this.evenhandler()}>Clickhere</button> */}
			</div>
		)
	}
}

export default EventBind
