import React, { useState } from 'react'
import { Button,TextField} from 'lucid-ui';

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

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
			<div className ="maintable">
				<div className="detail">
			<label>Name</label>
			<TextField type="text" name="name" className="textname"value={user.name} onChange={handleInputChange} /><br></br><br></br>
			<label>Username</label>
			<TextField type="text" name="username" className="textname1" value={user.username} onChange={handleInputChange} /><br></br><br></br>
			<Button className="button">Add</Button>
			</div> 
			</div>
			
		</form>
		
	)
}

export default AddUserForm
