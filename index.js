

class Button extends React.Component {
	state = { counter: 9 };

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




ReactDOM.render( <Button/>, root );



