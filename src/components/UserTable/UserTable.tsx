import React from 'react'
import { IUser } from '../../interfaces/User';
import UserItem from './UserItem/UserItem';

type UserTableProps = {
  users: IUser[];
}

const UserTable: React.FC<UserTableProps> = (props) => {
  const renderUsers = () => {
    return props.users.map((user) => {
      return <UserItem key={user.id} {...user}/>
    });
  }

  return (
    <table className="striped responsive-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Level</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {renderUsers()}
      </tbody>
    </table>
  )
}

export default UserTable
