import React from 'react'

//functional Components...................................................................
//props are immutable
function hello(props) 
{
	return (
	<div>
	<h1>Hello {props.name}</h1>
	{props.children}
	</div>
	)

}
export default hello