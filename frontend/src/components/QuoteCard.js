import React from 'react';

// styles 
import styles from '../css/app.css';

class QuoteCard extends React.Component {

	constructor(props) {
		super(props);
		this.buildSource = this.buildSource.bind(this);
		this.year = this.year.bind(this);
		this.citation = this.citation.bind(this);
	}

	year() {
		if (this.props.quote.year) {
			return (
				<span className={styles.year}>
					{this.props.quote.year}
				</span>
			);
		}
	}

	citation() {
		if (this.props.quote.citation) {
			return (
				<span className={styles.citation}>
					{this.props.quote.citation}
				</span>
			);
		}
	}

	buildSource() {
		/*
			<span className={styles.citation}>
				{this.props.quote.citation}
			</span>
			<span className={styles.year}>
				{this.props.quote.year}
			</span>
		*/

		return (
			<p className={styles.source}>
				{this.props.quote.source}
				{this.citation()}
				{this.year()}
			</p>
		);
	}	

	render() {
		return (
			<div className={styles.quote_card}>
				<p className={styles.quote}>
					{this.props.quote.quote}
				</p>
				{this.buildSource()}
			</div>
		);
	}
}

export default QuoteCard;