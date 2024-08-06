import {useState, useEffect} from 'react';

// Custom hook
function useFetch(url){
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async ()=> {
			const responce = await fetch(url);
			const data = await responce.json();
			setData(data);
			setLoading(false);
		}

		fetchData();
	},[url]);

	return {data, loading};
}

function CustomHooks(){
	const {data, loading} = useFetch("https://jsonplaceholder.typicode.com/posts");

	if(loading) return <p>Data Loading.....</p>;

	return(<>
			<h1>CustomHooks</h1>
			<table border="1">
				<thead>
					<th>Id</th>
					<th>Title</th>
					<th>Description</th>
				</thead>
				<tbody>
					{data.map(item => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.title}</td>
							<td>{item.body}</td>
						</tr>
					))}
				</tbody>
			</table>
			
	</>)
}
export default CustomHooks;