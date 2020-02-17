import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './hoc/Layout/Layout'
import Auth from './components/pages/Auth/Auth'
import Users from './components/pages/Users/Users'
import Home from './components/pages/Home/Home'
import UserProfile from './components/pages/UserProfile/UserProfile'
import UserEdit from './components/pages/UserEdit/UserEdit'
import { UserState } from './context/user/userState'
import SkillList from './components/pages/SkillList/SkillList'
import { SkillState } from './context/skill/skillState'
import SkillTopicEdit from './components/pages/SkillTopicEdit/SkillTopicEdit'
import SkillEdit from './components/pages/SkillEdit/SkillEdit'

const App: React.FC = () => {
  return (
    <SkillState>
      <UserState>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route component={Auth} path="/login"/>
              <Route component={UserProfile} path="/users/profile/:id"/>
              <Route component={UserEdit} path="/users/edit/:id"/>
              <Route component={UserEdit} path="/users/create" />
              <Route component={Users} path="/users" exact/>
              <Route component={SkillEdit} path="/skills/create"/>
              <Route component={SkillTopicEdit} path="/skills/:skillId/topic/:topicId/edit"/>
              <Route component={SkillList} path="/skills" exact/>
              <Route component={Home} path="/" exact/>
            </Switch>
          </Layout>
        </BrowserRouter>
      </UserState>
    </SkillState>
  )
}

export default App
 