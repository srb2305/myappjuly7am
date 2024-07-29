function Event(){

	function handleClick(){
		alert('Event Clicked....');
	}

	function handleLoadForm(){
		console.log('This is handleLoadForm');
	}
	return(
		<>
			<button onClick={handleClick}>Click Me</button>
			<button onClick={handleLoadForm}>Click for load form</button>
		</>
	)
}


export default Event;