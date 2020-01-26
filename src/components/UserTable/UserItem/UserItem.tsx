import React from 'react'
import { Link, useHistory } from 'react-router-dom';

import { User } from '../../../interfaces/User';
import FloatingButton from '../../UI/FloatingButton/FloatingButton';

const UserItem: React.FC<User> = (props) => {

  return (
    <tr>
      <td>{props.firstName} {props.lastName}</td>
      <td>{props.level}</td>
      <td>
        <Link to={`/users/profile/${props.id}`}>
          <FloatingButton icon="face" />
        </Link>
        <Link to={`/users/edit/${props.id}`}>
          <FloatingButton icon="edit" type="warning" />
        </Link>
        
        <FloatingButton type="error" icon="delete_forever" />
      </td>
    </tr>
  )
}

export default UserItem