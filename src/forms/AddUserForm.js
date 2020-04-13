import React, { useState } from 'react';
//import { Button,TextField} from 'lucid-ui';

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)
	const[Toggle,ShowToggle]=useState(false);

	const handleInputChange = event => {
		const { name, value } = event.target
		setUser({ ...user, [name]: value })
	}

	return (
		
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return
				props.addUser(user)
				setUser(initialFormState)
			}}
		>
		{ShowToggle &&<div className ="maintable">
				<div className="detail">
			<label><b>Name</b></label>
			<input type="text" name="name" className="textname"value={user.name} onChange={handleInputChange} /><br></br><br></br>
			<label><b>Username</b></label>
			<input type="text" name="username" className="textname1" value={user.username} onChange={handleInputChange} /><br></br><br></br>
			<button className="button" onClick={()=>ShowToggle(!Toggle)}>Add</button>
			</div> 
			</div>}
			
		</form>
		
	)
}

export default AddUserForm
