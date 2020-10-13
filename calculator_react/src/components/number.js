import React from 'react'

const Number = ({value, func, actualNumber}) => {
	return (
		<div style={styles.container} onClick={()=> func(`${actualNumber}${value}`)}>
			<p style={styles.text}>{value}</p>
		</div>
	)
}


const styles = {
	container: {
		border: 'solid',
		borderWidth: 3,
		padding: 0,
		backgroundColor: '#808080',
		cursor: 'pointer'
		
	},
	text: {
		textAlign: 'center',
		fontSize: 60,
		color: 'white'
	}
}
export default Number