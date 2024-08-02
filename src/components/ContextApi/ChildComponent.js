import {useContext} from 'react';
import UserContext from './UserContext';
import SubChildOne from './SubChildOne'
const ChildComponent = () => {
	const logedinUser = useContext(UserContext);

	return (
		<>
			<h1>ChildComponent</h1>
			{logedinUser.id} {logedinUser.name}
			 <SubChildOne /> 
		</>
	)
}

export default ChildComponent;