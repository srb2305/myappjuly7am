import { useReducer } from 'react';

const intialState = {count:0};

function reducer(state, action){
	switch (action.type){ // increment  or decrement or reset
		case 'increment':
			return { count: state.count+1 }
		case 'decrement': 
			return {count: state.count-1};
		case 'reset':
			return {count:0};
		default:
			return {count:0};
	}
}

function Counter(){
	const [state,dispatch] = useReducer(reducer, intialState );

	return(
		<>
			<p>Count No. : {state.count}  </p>
			<button onClick={()=> dispatch({type: 'increment'}) } > Increment</button>
			<button onClick={()=> dispatch({type: 'decrement'}) } > Decrement</button>
			<button onClick={()=> dispatch({type: 'reset'}) } > Reset</button>
		</>
	)	
}

export default Counter;