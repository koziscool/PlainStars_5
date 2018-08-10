

class Button extends React.Component {

	render() {
		return (
			<button onClick={() => this.props.onClickFunction(this.props.incrementValue)}>
				+{this.props.incrementValue}
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

	incrementCounter = ( incrementValue )  => {
		this.setState( (prevState) => {
			return {
				counter: this.state.counter + incrementValue
			}
		});
	}

	render() {
		return (
			<div>
				<Button onClickFunction={this.incrementCounter} incrementValue = {1}/>
				<Button onClickFunction={this.incrementCounter} incrementValue = {5}/>
				<Button onClickFunction={this.incrementCounter} incrementValue = {10}/>
				<Button onClickFunction={this.incrementCounter} incrementValue = {100}/>
				<Result counter={this.state.counter}/>
			</div>
		);
	}
};




ReactDOM.render( <App />, root );



