import UserContext from './UserContext';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
	const user = {
		id: 10,
		name: 'Ram Kumar',
		email: 'ram@gmail.com',
		contact: '7878787878'
	};

	return (
		<UserContext.Provider value={user}>
			<h1> ParentComponent 1</h1>
				<ChildComponent />
		</UserContext.Provider>
	)
}


export default ParentComponent;