

class Button extends React.Component {
	state = { counter: 0 };

	handleClick = () => {
		console.log('tetris', this.state.counter);
		this.setState( (prevState) => {
			return {
				counter: this.state.counter + 1
			}
		});
	};

	render() {
		return (
			<button onClick={this.handleClick}>
				{this.state.counter}
			</button>
		);
	}
};


const Result = (props) => {
	return (
		<div>....</div>
	);
};


class App extends React.Component {
	render() {
		return (
			<div>
				<Button />
				<Result />
			</div>
		);
	}
};




ReactDOM.render( <App />, root );



