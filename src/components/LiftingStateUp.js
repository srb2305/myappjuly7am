import {useState} from 'react';
import ChildComponent from './ChildComponent';

function ParantComponent(){
	const [name, setName] = useState('Ram');

	return(
		<>
			<h1>Parent Component : {name}</h1>
			<ChildComponent  name={name} setName={setName}  />
		</>
	);
}

export default ParantComponent;