import React from 'react';
//in ES6 and in js

// const ES6=()=>{
// 	return(
// 			<div>
// 				<h3>this code is in ES6</h3>
// 			</div>
// 	)
// }
//in jsx format (which will automatically converted )
const ES6=()=>{


	return React.createElement('div',	{id:'one',ClassName:'one'},React.createElement('h1',null,'hello this is in jsx format'));
}

export default ES6
