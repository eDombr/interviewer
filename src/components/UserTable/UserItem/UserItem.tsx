import React from 'react'
import { Link } from 'react-router-dom';

import { IUser } from '../../../interfaces/User';
import FloatingButton from '../../UI/FloatingButton/FloatingButton';

const UserItem: React.FC<IUser> = (props) => {

  return (
    <tr>
      <td>{props.firstName} {props.lastName}</td>
      <td>{props.level}</td>
      <td>
        <Link to={`/users/profile/${props.id}`}>
          <FloatingButton icon="face" size="small"/>
        </Link>
        <Link to={`/users/edit/${props.id}`}>
          <FloatingButton icon="edit" type="warning" size="small"/>
        </Link>
        
        <FloatingButton type="error" icon="delete_forever" size="small"/>
      </td>
    </tr>
  )
}

export default UserItem