import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';

import UserTable from './UserTable/UserTable';
import FloatingButton from '../../UI/FloatingButton/FloatingButton';
import { UserContext } from '../../../context/user/userContext';
import Loading from '../../UI/Loading/Loading';

const Users: React.FC = () => {
  const {users, getUsers, loading} = useContext(UserContext)

  useEffect(() => {
    getUsers()
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div className="row">
      <h2>Users</h2>

      {users.length ? <UserTable users={users}/>: null}

      <div className="right">
        <Link to="/users/create">
          <FloatingButton type="success" size="large" icon="add"></FloatingButton>
        </Link>
      </div>
    </div>
  )
}

export default Users