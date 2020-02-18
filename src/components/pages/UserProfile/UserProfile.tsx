import * as _ from 'lodash'
import React, { useContext, useEffect, ReactNode } from 'react'
import { UserContext } from '../../../context/user/userContext'
import Loading from '../../UI/Loading/Loading'
import { useParams } from 'react-router-dom'

const UserProfile: React.FC = () => {
  const { user, getUser, clearUser, loading } = useContext(UserContext)
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      getUser(+id)
    }

    return () => {
      clearUser()
    }
    // eslint-disable-next-line
  }, [id])

  if (loading) {
    return <Loading />
  }

  const renderWorkHistory = (): ReactNode => {
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

  const renderSkills = (): ReactNode => {
    return (
      <>
        <h3>Skills</h3>
        {_.map(user.skills, (skill) =>
          <div
            key={skill.id}
            className="chip">{skill.name}</div>)}
      </>
    )
  }

  return (
    user ?
      <>
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

        {
          user.skills.length ?
            renderSkills() :
            null
        }
      </> :
      null
  )
}

export default UserProfile


