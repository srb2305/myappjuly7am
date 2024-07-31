function List(){
	const userList = [ 'Ram','Shyam','Mohan','Shyam','Ramu'];
	return(
		<>
			<h1>User List</h1>
			<ul>
			{ userList.map((name, index) => (
				<li key={index}> {index+1}  {name}</li>
			))
			}
			</ul>
		</>
	);
}

export default List