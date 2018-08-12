




const Card = (props) => {
	return (
		<div style={{margin: '1em'}}>
			<img width="75" src="https://avatars1.githubusercontent.com/u/8445?v=4i"/>
			<div style={{display: 'inline-block', marginLeft: 10}}> 
				<div>Paul O’Shannessy</div>			
				<div>Facebook</div>			
			</div>
		</div> 

	);
};


const CardList = (props) => {
	return (
		<div>
			<Card />
		</div>
	);

};


ReactDOM.render( <Card />, root );



