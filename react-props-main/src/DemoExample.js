import React from 'react'
class DemoExample extends React.Component{
	state={
	s:this.props.name,
	p:this.props.age	
	}
	render(){
		return(
			<div>
			<h1>{this.state.s}{this.state.p}</h1>
			</div>
		)
	}
}
export default DemoExample