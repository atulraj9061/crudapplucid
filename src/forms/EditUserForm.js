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
      <div className="updateform">
        <div className="updateform1">
      <label>Name</label>
      <TextField name="name" value={user.name} onChange={handleInputChange} className="updatetext" /><br></br><br></br>
      <label>Username</label>
      <TextField name="username" value={user.username} onChange={handleInputChange} className="updatetext1" /><br></br><br></br>
      <ButtonGroup>
      <Button className="updatebutton">Update</Button>
      <Button onClick={() => props.setEditing(false) } className="Cancelbutton">
        Cancel
      </Button>
      </ButtonGroup>
      </div>
      </div>
    </form>
    </div>
  )
}

export default EditUserForm
