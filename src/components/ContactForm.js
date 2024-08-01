import {useState} from 'react';

function ContactForm(){
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [number, setNumber] = useState('');
	const [gender, setGender] = useState('');
	const [errors, setErrors] = useState({});

	const handleSubmit = (event) => {
		event.preventDefault();
		const formErrors = validation();
		setErrors(formErrors);

		console.log('Form Submit');
		console.log(name);
		console.log(email);
		console.log(number);
		console.log(gender);
	}

	const validation = () => {
		const newErrors = {};
		if(!name) newErrors.name = "Name is required";
		if(!email) newErrors.email = "Email is required";
		if(!number) newErrors.number = "Number is required";
		if(!gender) newErrors.gender = "Gender is required";
		return newErrors;
	}

	return (
	<>
		<h1>Contact Form</h1>
		<form onSubmit={handleSubmit} >
			<div>
				Name:
				<input type="text" name="name" value={name} onChange={ (e) => setName(e.target.value)  } />
				{ (errors.name) && <span>{errors.name}</span> }
			</div>
			<div>
				Email:
				<input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value) } />
				{ (errors.email) && <span>{errors.email}</span> }
			</div>
			<div>
				Contact:
				<input type="number" name="number" value={number}  onChange={(e) => setNumber(e.target.value)} />
				{ (errors.number) && <span>{errors.number}</span> }
			</div>
			<div>
				Gender : 
				<select name="gender" value={gender} onChange={(e)=> setGender(e.target.value)} >
					<option value="male">Male</option>
					<option value="female">FeMale</option>
				</select> { (errors.gender) && <span>{errors.gender}</span> }
			</div>
			<input type="submit" value="Submit" />
		</form>
	</>
	)
}

export default ContactForm