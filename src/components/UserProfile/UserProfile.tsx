import * as _ from 'lodash'
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/user/userContext'
import Loading from '../UI/Loading/Loading'

const UserProfile: React.FC = () => {
  const {user, getUser, loading} = useContext(UserContext)

  useEffect(() => {
    getUser(1)
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <Loading />
  }

  const renderWorkHistory = () => {
    return _.map(user.workHistory, (workItem, index) => (
      <div className=" row mb1" key={index}>
        <div className="col s4">
          <p className="mb0">{workItem.company}</p>
          <small>{workItem.startDate.toLocaleDateString()} - {(workItem.endDate && workItem.endDate.toLocaleDateString()) || 'Present'}</small>
        </div>
        <div className="col s8">
          <p>{workItem.position}</p>
        </div>
      </div>
    ))
  }

  return (
    <div>
      <h2>{user.firstName} {user.lastName}</h2>

      {user.currentPosition ? <p>{user.currentPosition}{user.level ? `, ${user.level}` : null}</p> : null}

      <h3>Education</h3>
      <p>{user.education || 'Does not have an education'}</p>

      {
        user.description ?
          <>
            <h3>Profile Summary</h3>
            <p>{user.description}</p>
          </> :
          null
      }

      <h3>Work History</h3>
      {
        user.workHistory ?
          renderWorkHistory() :
          null
      }
    </div>
  )
}

export default UserProfile


