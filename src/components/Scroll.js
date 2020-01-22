import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{ 
			overflowY: 'scroll',
			boxShadow: '0px 0px 10px -2px #888888 inset' ,
		 	height: '800px'
		 	}}>
			{props.children}	
		</div>
	);
}

export default Scroll;