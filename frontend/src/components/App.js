import React from 'react';
import { hot } from 'react-hot-loader'

import QuoteCard from './QuoteCard';

// styles 
import styles from '../css/app.css';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			quotes: [],
			colors: [
				'#F63E02',
				'#F3B700',
				'#0A2342',
				'#F46197',
				'#8B2635',
				'#D3EFBD',
				'#682D63'
			],
			activeQuote: ""
		}

		this.handleNewQuote = this.handleNewQuote.bind(this);
		this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
		this.getRandomNumber = this.getRandomNumber.bind(this);
	}

	componentDidMount() {

		const url = 'http://localhost:3000/quotes';

		fetch(url)
			.then(results => {
				return results.json();
			}).then(quotes => {
				this.setState({quotes: quotes});
				this.handleNewQuote();
			}).catch(err => {
				console.log('Error: ', err);
			});

	}

	getRandomNumber(list) {
		return Math.floor(Math.random() * list.length);
	}

	handleNewQuote() {
		// gen random number 
		const randNum = this.getRandomNumber(this.state.quotes);

		// fetch random quote from state
		const quote = this.state.quotes[randNum];

		// set state
		this.setState({activeQuote: quote});

		this.changeBackgroundColor();
	}

	changeBackgroundColor() {

		const randNum = this.getRandomNumber(this.state.colors);
		console.log(randNum);

		document.body.style.backgroundColor = this.state.colors[randNum];

	}

	render() {
		return (
			<div className={styles.container}>
				<QuoteCard quote={this.state.activeQuote} />
				<button className={styles.new_quote_btn} onClick={this.handleNewQuote}>
					New Quote
				</button>
			</div>
		);
	}
}

export default hot(module)(App);