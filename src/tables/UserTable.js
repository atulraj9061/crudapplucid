import React from 'react'
import { Button, Table } from 'lucid-ui';
const { Thead, Tbody, Tr, Th, Td } = Table;

const UserTable = props => (
  <Table>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Username</Th>
      </Tr>
    </Thead>
    <Tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <Tr key={user.id}>
            <Td>{user.name}</Td>
            <Td>{user.username}</Td>
            <Td>
              <Button onClick={() => {props.editRow(user)}} className="editbutton">Edit</Button>
              <Button onClick={() => {props.deleteUser(user.id)}} className="deletebutton"> Delete</Button>
            </Td>
          </Tr>
        ))
      ) : (
        <Tr>
          <Td colSpan={3}>No users</Td>
        </Tr>
      )}
    </Tbody>
  </Table>
)

export default UserTable
