import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './hoc/Layout/Layout';
import Auth from './components/Auth/Auth';
import Users from './components/Users/Users';
import Home from './components/Home/Home';
import SkillMatrixes from './components/SkillMatrixes/SkillMatrixes'
import UserProfile from './components/UserProfile/UserProfile';
import UserEdit from './components/UserEdit/UserEdit';
import { UserState } from './context/user/userState';
import { SkillMatrixState } from './context/skiiMatrix/skillMatrixState';

const App: React.FC = () => {
  return (
    <SkillMatrixState>
      <UserState>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route component={Auth} path="/login"/>
              <Route component={Users} path="/users" exact/>
              <Route component={UserProfile} path="/users/profile/:id" exact/>
              <Route component={UserEdit} path="/users/edit/:id"/>
              <Route component={UserEdit} path="/users/create" />
              <Route component={SkillMatrixes} path="/skill-matrix"/>
              <Route component={Home} path="/" exact/>
            </Switch>
          </Layout>
        </BrowserRouter>
      </UserState>
    </SkillMatrixState>
  );
}

export default App;
 