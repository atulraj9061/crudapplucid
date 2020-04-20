import React, { useState } from 'react';
import { Button,TextField,Typography} from 'lucid-ui';

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
			<Typography variant="h3" className="textfield"><b>Name</b></Typography>
			<TextField name="name" className="textname"value={user.name} onChange={handleInputChange} />
			<Typography variant = "h3" className="textfield1"><b>Username</b></Typography>
			<TextField name="username" className="textname1" value={user.username} onChange={handleInputChange} /><br></br><br></br>
			<Button className="button" onClick={()=>ShowToggle(!Toggle)}>Add</Button>
			</div> 
			</div>}
			
		</form>
		
	)
}

export default AddUserForm
