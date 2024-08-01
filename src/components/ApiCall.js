import {useState, useEffect } from 'react';

function ApiCall(){
	const [ data, setData ] = useState([]); //  mountaing phase
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		const fetApiData = async () => {
			try{
				const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
				if(!responce.ok){
					throw new Error('Api responce was not ok');
				}
				const result = await responce.json();
				setData(result);
				console.log(data);
			} catch(e){
				console.log('Catch Block: something went wrong on api call');
			} finally {
				setLoading(false);
			}
		};

		fetApiData();
	},[]);

	if(loading){
		return(
			<div>Loading.....</div>
		)
	}
 
	return(
		<>
			<h1>API CALL</h1>

			{data.map(item => (
				<div key={item.id}>{item.title}</div>
			))}
		</>
	)
}

export default ApiCall