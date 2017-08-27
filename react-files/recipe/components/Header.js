import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
	return (
		<div>
			<h1>
				{props.title}
			</h1>
			<h2>
				{`${props.serving.amount} ${props.serving.name}`}
			</h2>
		</div>
	);
}

Header.propTypes = {
	scalingFactor: PropTypes.number,
	title: PropTypes.string,
	serving: PropTypes.shape({
		amount: PropTypes.number,
		name: PropTypes.string,
	}),
};

Header.defaultProps = {
	scalingFactor: 1,
	title: 'Recipe',
	serving: {
		amount: 1,
		name: 'serving',
	},
};

export default Header;
