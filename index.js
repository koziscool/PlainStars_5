

class Button extends React.Component {

	render() {
		return (
			<button onClick={this.props.onClickFunction}>
				+1
			</button>
		);
	}
};


const Result = (props) => {
	return (
		<div>{props.counter}</div>
	);
};


class App extends React.Component {
	state = { counter: 0 };

	incrementCounter = ()  => {
		this.setState( (prevState) => {
			return {
				counter: this.state.counter + 1
			}
		});
	}

	render() {
		return (
			<div>
				<Button onClickFunction={this.incrementCounter}/>
		
				<Result counter={this.state.counter}/>
			</div>
		);
	}
};




ReactDOM.render( <App />, root );



