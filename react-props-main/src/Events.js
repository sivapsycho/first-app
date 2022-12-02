import {Component} from 'react'
class Events extends Component{
	state={
		username:"",
		password:""
	}
	handleClick=()=>{
		console.log(this.state.username)
		console.log(this.state.password)
	}
	handleChange=(e)=>{
		this.setState({
			[e.target.name]:e.target.value,
			
		})
	}
	render(){
		return(
			<div>
			<input name="username" onChange={this.handleChange}placeholder="Enter Username"/>
			<input name="password" onChange={this.handleChange}placeholder="Enter Password"/>
			<button onClick={this.handleClick}>submit</button>
			</div>
		)
	}
}
export default Events