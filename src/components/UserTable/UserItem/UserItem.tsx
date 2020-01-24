import React from 'react'
import { User } from '../../../interfaces/User';
import FloatingButton from '../../UI/FloatingButton/FloatingButton';

const UserItem: React.FC<User> = (props) => {
  return (
    <tr>
      <td>{props.firstName} {props.lastName}</td>
      <td>{props.level}</td>
      <td>
        <FloatingButton icon="edit"></FloatingButton>
        <FloatingButton type="error" icon="delete_forever"></FloatingButton>
      </td>
    </tr>
  )
}

export default UserItem