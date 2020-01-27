import React, { useState } from 'react'
import { IUser } from '../../interfaces/User'

const UserProfile = () => {
  const [user, setUser] = useState<IUser>({
    id: 1,
    firstName: 'Eugene',
    lastName: 'Dombrovski',
    email: 'eugene.dombrowsky@gmail.com',
    level: 'middle',
    education: 'Brest university named after A.S.Pushkin',
    description: `Software developer specialized in WEB applications development. Talented at devising appropriate goals,knowledgeable in people management. Highly adaptable in quickly changing technical environments, alsohas strong technical, organizational, communication and analytical skills. Always ready for mastering ofnew technologies.Plodding, balanced, hardworking. I don't have bad habbits.Good health. I love outdoor activities and intellectual games.`,
    currentPosition: 'Frontend Developer',
    workHistory: [{
      company: 'SmartexLab',
      startDate: new Date(2016, 11, 12),
      position: 'Frontend Developer'
    }]
  })

  return (
    <div>
      <h2>{user.firstName} {user.lastName}</h2>

      <div className="row">
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
        
        
      </div>
    </div>
  )
}

export default UserProfile


