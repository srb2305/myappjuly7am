import { useState } from 'react';

function Condition(){
	const [ isUserLogedIn, setIsUserLogedIn ] = useState(false);

	function ProfileHtmlCode(){
		return <>
				<p>Welcome to our website....</p>
				<div>Update your profile.....</div>
			</>
	}

	function LoginHtmlCode(){
		return <>
				<p>Login to our portal....</p>
				<div>Login.....</div>
			</>
	}



		return(
		<div>
			{ isUserLogedIn ? <ProfileHtmlCode /> :  <LoginHtmlCode /> }

		</div>
	)
}

export default Condition;