import React, { useState, useEffect } from 'react'
import {TextField,Button,Typography} from 'lucid-ui'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)
  const[Show,ShowTable]=useState(false)

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
     {ShowTable&& <div className="updateform">
        <div className="updateform1">
      <Typography variant="h3" className="textfield">Name</Typography>
      <TextField name="name" value={user.name} onChange={handleInputChange} className="updatetext" /><br></br><br></br>
      <Typography variant="h3" className="textfield1">Username</Typography>
      <TextField name="username" value={user.username} onChange={handleInputChange} className="updatetext1" /><br></br><br></br>
      <Button className="updatebutton">Update</Button>
      <Button onClick={() => props.setEditing(false) } className="Cancelbutton">
        Cancel
      </Button>
      </div>
      </div>}
    </form>
    </div>
  )
}

export default EditUserForm
