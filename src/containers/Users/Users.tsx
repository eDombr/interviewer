import React, { Component } from 'react'
import { User } from '../../interfaces/User'
import UserTable from '../../components/UserTable/UserTable';
import FloatingButton from '../../components/UI/FloatingButton/FloatingButton';
import { Link } from 'react-router-dom';

type UsersState = {
  users: User[];
}
class Users extends Component {
  state: UsersState = {
    users: [
      {
        id: 1,
        firstName: 'Eugene',
        lastName: 'Dombrovski',
        email: 'eugene.dombrowsky@gmail.com',
        level: 'middle'
      },
      {
        id: 2,
        firstName: 'Eugene',
        lastName: 'Dombrovski',
        email: 'eugene.dombrowsky@gmail.com',
        level: 'middle'
      },
      {
        id: 3,
        firstName: 'Eugene',
        lastName: 'Dombrovski',
        email: 'eugene.dombrowsky@gmail.com',
        level: 'middle'
      },
      {
        id: 4,
        firstName: 'Eugene',
        lastName: 'Dombrovski',
        email: 'eugene.dombrowsky@gmail.com',
        level: 'middle'
      },
    ]
  }

  render() {
    return (
      <div className="row">
        <h2>Users</h2>

        <UserTable users={this.state.users}/>

        <div className="right">
          <Link to="/users/create">
            <FloatingButton type="success" size="large" icon="add"></FloatingButton>
          </Link>
        </div>
      </div>
    )
  }
}

export default Users