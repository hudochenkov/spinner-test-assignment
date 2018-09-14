import React, { Component } from 'react';
import './Card.css';
import ProgressRing from '../ProgressRing';

// Default state here, because we're reusing in, when reseting a state
const defaultState = {
	inProgress: false,
	progress: 0,
};

class Card extends Component {
	constructor() {
		super();

		this.state = {
			...defaultState,
		};

		this.startProgress = this.startProgress.bind(this);
		this.stopProgress = this.stopProgress.bind(this);
	}

	startProgress() {
		this.setState({
			inProgress: true,
		});

		// Faking percentage change
		this.progressInterval = setInterval(() => {
			if (this.state.progress >= 100) {
				clearInterval(this.progressInterval);
			} else {
				this.setState(prevState => ({
					// Don't set value more than 100
					progress: Math.min(prevState.progress + 2, 100),
				}));
			}
		}, 100);
	}

	stopProgress() {
		clearInterval(this.progressInterval);

		this.setState({
			...defaultState,
		});
	}

	render() {
		return (
			<div className="card">
				<div className="card__progress">
					<ProgressRing value={this.state.progress} isActive={this.state.inProgress} />
				</div>

				<p className="card__actions">
					{this.state.inProgress ? (
						<button className="card__action" type="button" onClick={this.stopProgress}>
							Stop
						</button>
					) : (
						<button className="card__action" type="button" onClick={this.startProgress}>
							Start
						</button>
					)}
				</p>
			</div>
		);
	}
}

export default Card;
