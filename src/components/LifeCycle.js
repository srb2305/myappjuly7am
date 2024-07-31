import {useState, useEffect } from 'react';

function LifeCycle(){
	const [ count, setCount ] = useState(0);

	useEffect(() => {
		// The code runs after the component render
		console.log(`useEffect:You clicked ${count} times `);

		// cleanup function
		return () => {
			console.log('this is cleanup function');
		};
	},[count]);

	return(
		<>
			<h1>LifeCycle Of Function Component</h1>
			<p>You clicked {count} times </p>
			<button onClick={ () => setCount(count+1) }>
				Click Me
			</button>
			
		</>
	)
}

export default LifeCycle