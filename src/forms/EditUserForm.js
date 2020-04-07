import React, { useState, useEffect } from 'react'
import { Button,TextField,ButtonGroup } from 'lucid-ui';

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )

  const handleInputChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  return (
    <div className="table">
    <form
      onSubmit={event => {
        event.preventDefault()
        props.updateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <TextField name="name" value={user.name} onChange={handleInputChange} /><br></br><br></br>
      <label>Username</label>
      <TextField name="username" value={user.username} onChange={handleInputChange} /><br></br><br></br>
      <ButtonGroup>
      <Button>Update</Button>
      <Button onClick={() => props.setEditing(false)} className="button">
        Cancel
      </Button>
      </ButtonGroup>
    </form>
    </div>
  )
}

export default EditUserForm
