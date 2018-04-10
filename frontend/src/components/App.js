import React from 'react';
import { hot } from 'react-hot-loader'

// styles 
import styles from '../css/app.css';

class App extends React.Component {

	render() {
		return (
			<div className={styles.wrapper}>
				<h1>This is an <strong>awesome</strong> React App</h1>
			</div>
		);
	}
}

export default hot(module)(App);