import React from 'react'
import style from './style.css'
import PropTypes from 'prop-types'
import _ from 'lodash';

const component = (props) => {
	_.each([1,2,3,4],(item)=>console.log(item))
	return(
		<div>
			<h1>Global Style Test (should be red)</h1>
			<h2 className={style.test}>Local Style Test (should be blue)</h2>
			<h2 className={style.postcss_test}>PostCSS Variable and Import Test (should be orange)</h2>

		</div>
		)
}

component.propTypes = {

}

export default component