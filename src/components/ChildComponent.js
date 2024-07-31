function ChildComponent({ name, setName }){
	return(
		<>
		<h1>Child Component</h1>

			<input 
				type="text"
				value={name}
				placeholder="Enter any name" 
				onChange={(e) => setName(e.target.value)  }
			/>
			{name}
		</>	
	);
}

export default ChildComponent;