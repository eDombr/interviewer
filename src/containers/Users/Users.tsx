import React, { Component } from 'react'
import { User } from '../../interfaces/User'
import UserTable from '../../components/UserTable/UserTable';
import FloatingButton from '../../components/UI/FloatingButton/FloatingButton';

type UsersState = {
  users: User[];
}

export default class Users extends Component {
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
          <FloatingButton type="success" size="large" icon="add"></FloatingButton>
        </div>
      </div>
    )
  }
}