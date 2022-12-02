import React from 'react'
class StateExample extends React.Component{
	state={
		name:"Utthaman Pradeep",
		year:1998
	}
	render(){
		return(
			<div>
			<p>{this.state.name}{this.state.year}</p>
			</div>
		)
	}
}	
export default StateExample

