import React from 'react'

function ChildFuction(props) {
	return (
		<div>
			<button onClick={() =>props.func('ayush')}>Clickhere</button>
		</div>
	)
}

export default ChildFuction	