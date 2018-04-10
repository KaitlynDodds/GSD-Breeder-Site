import React from 'react';
import { hot } from 'react-hot-loader'

import QuoteCard from './QuoteCard';

// styles 
import styles from '../css/app.css';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			quote: {
				quote: "The language of friendship is not words, but meanings.",
				source: "Henry David Thoreau",
				year: 1998
			}
		}
	}

	render() {
		return (
			<div className={styles.container}>
				<QuoteCard quote={this.state.quote} />
			</div>
		);
	}
}

export default hot(module)(App);