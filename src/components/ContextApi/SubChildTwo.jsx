import {useContext} from 'react';
import UserContext from './UserContext';

export default function SubChildTwo(){
	const logedinUser = useContext(UserContext);

	return (
		<>
			<h3>SubChildTwo</h3>
			{logedinUser.email}
		</>


	)
}