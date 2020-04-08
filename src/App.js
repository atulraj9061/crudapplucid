import React, {useState,Fragment} from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
import './App.css';

const App = () => {

	const usersData = [
		{},
	]

	const initialFormState = { id: null, name: '', username: '' }

	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)


	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)
		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)
		setUsers(users.map(user =>(user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)
		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	return (
		<div className="container">
	    <div className="App">
			{editing ? (
				<Fragment>
				<EditUserForm
				 editing={editing}
				 setEditing={setEditing}
				 currentUser={currentUser}
				updateUser={updateUser}
							/>
				</Fragment>
				) : (
				<Fragment>
			  <AddUserForm addUser={addUser} />
				</Fragment>
					)}
				</div>
				<div className="table">
			<UserTable users={users} editRow={editRow} deleteUser={deleteUser}/>
				</div>
			</div>
	)
}

export default App
