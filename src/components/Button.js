import { useState } from 'react';

function Button(props){
	const [ count, setCount ] =  useState(1);

	return(
		<>
			<button>{props.title} </button>

			<button onClick={ () => setCount(count + 1) }> Click Me {count}</button>
		</>
	)	
}

export default Button;