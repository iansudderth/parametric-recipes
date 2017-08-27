import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
	return (
		<div>
			<h1>This is the Header</h1>
		</div>
	);
}

Header.propTypes = {
	title: PropTypes.string,
	serving: PropTypes.shape({
		amount: PropTypes.number,
		name: PropTypes.string,
	}),
};

Header.defaultProps = {
	title: 'Recipe',
	serving: {
		amount: 1,
		name: 'serving',
	},
};

export default Header;
