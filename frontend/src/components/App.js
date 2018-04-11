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
			activeQuote: ""
		}

		this.handleNewQuote = this.handleNewQuote.bind(this);
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

	handleNewQuote() {
		// gen random number 
		const randNum = Math.floor(Math.random() * this.state.quotes.length);

		// fetch random quote from state
		const quote = this.state.quotes[randNum];

		// set state
		this.setState({activeQuote: quote});
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