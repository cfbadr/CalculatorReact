import React from 'react'

const SpecialOperator = ({value, func, actualNumber}) => {
	return (
		<div style={styles.container}>
			<p style={styles.text}>{value}</p>
		</div>
	)
}


const styles = {
	container: {
		border: 'solid',
		borderWidth: 3,
		padding: 0,
		backgroundColor: '#FD9E2B'
	},
	text: {
		textAlign: 'center',
		fontSize: 60,
		color: 'white',
	}
}
export default SpecialOperator