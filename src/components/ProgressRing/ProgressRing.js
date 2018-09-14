import React from 'react';
import PropTypes from 'prop-types';
import './ProgressRing.css';

function ProgressRing(props) {
	// Round in case it's not an integer
	const value = Math.round(props.value);

	const size = 160;
	const strokeWidth = 14;

	const centerPoint = size / 2;
	const radius = (size - strokeWidth) / 2;

	const circumference = (radius * 2 * Math.PI).toFixed(3);
	const progressLine = (circumference - (value / 100) * circumference).toFixed(3);

	// Using inline styles, because size potentially could be configurable via props
	// Don't apply animations (.progress-ring--active) when running animation won't be visible
	return (
		<div
			className={`progress-ring ${props.isActive ? 'progress-ring--active' : ''}`}
			style={{ width: size, height: size }}
		>
			<svg
				className="progress-ring__image"
				width={size}
				height={size}
				viewBox={`0 0 ${size} ${size}`}
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					className="progress-ring__background-ring"
					strokeWidth={strokeWidth}
					fill="transparent"
					r={radius}
					cx={centerPoint}
					cy={centerPoint}
				/>

				<circle
					className="progress-ring__arc"
					strokeWidth={strokeWidth}
					fill="transparent"
					r={radius}
					cx={centerPoint}
					cy={centerPoint}
					style={{
						strokeDasharray: `${circumference} ${circumference}`,
						strokeDashoffset: progressLine,
					}}
				/>
			</svg>

			<div className="progress-ring__label">
				<span className="progress-ring__label-itself">{value}</span>
			</div>
		</div>
	);
}

ProgressRing.propTypes = {
	isActive: PropTypes.bool,
	value: PropTypes.number,
};

ProgressRing.defaultProps = {
	isActive: false,
	value: 0,
};

export default ProgressRing;
