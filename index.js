




const Card = (props) => {
	return (
		<div style={{margin: '1em'}}>
			<img width="75" src={props.avatar_url}/>
			<div style={{display: 'inline-block', marginLeft: 10}}> 
				<div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
					{props.name}
				</div>			
				<div>{props.company}</div>			
			</div>
		</div> 

	);
};



const CardList = (props) => {
	return (
		<div>
			{ props.cards.map( card => <Card {...card}/> ) }
		</div>
	);

}


class Form extends React.Component{

	state= { userName: '' }

	handleSubmit = (e) => {
		e.preventDefault();
		const theUrl= "https://api.github.com/users/" + this.state.userName;
		let http = new XMLHttpRequest();
		http.onreadystatechange = () =>{
			if( http.readyState === 4 && http.status === 200 ){
				this.props.onSubmit( JSON.parse( http.responseText ));
				this.setState( { userName: '' });
			}
		}

		http.open( "GET", theUrl, true );
		http.send( null );
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" 
					value={ this.state.userName }
					onChange={ (e)=> this.setState({ userName: e.target.value}) }
					placeholder="Github username" required/>
				<button type="submit">Add card</button>
			</form>
		);
	}

}

class App extends React.Component {

	state = { cards: [

		{
			name:"Paul O'Shanessy",
			avatar_url:"https://avatars1.githubusercontent.com/u/8445?v=4i",
			company:"Facebook"

		},
		{
			name:"Paul O'Shanessy",
			avatar_url:"https://avatars1.githubusercontent.com/u/8445?v=4i",
			company:"Facebook"
		},
		]
	};



	addNewCard = (cardInfo) => {
		console.log( cardInfo );
	};

	render() {
		return (
			<div>
				<Form onSubmit={ this.addNewCard}/>
				<CardList cards={this.state.cards}/>
			</div>
		);
	}
}




ReactDOM.render( <App />, root );



