

class Button extends React.Component {
	constructor( props ) {
		super(props);
		this.state = { counter: 9 };
	};

	handleClick = () => {
		console.log('click', this.state.counter);
		this.setState( {
			counter: this.state.counter + 1
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



