import {Component} from 'react'
class Events extends Component{
	state={
		username:""
	}
	handleClick=()=>{
		console.log(this.state.username)
	}
	handleChange=(e)=>{
		this.setState({
			[e.target.name]:e.target.name
		})
	}
	render(){
		return(
			<div>
			<input onChange={this.handleChange}placeholder="Enter Username"/>
			<button onClick={this.handleClick}>submit</button>
			</div>
		)
	}
}
export default Events