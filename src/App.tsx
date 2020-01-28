import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './hoc/Layout/Layout';
import Auth from './components/Auth/Auth';
import Users from './components/Users/Users';
import Home from './components/Home/Home';
import SkillMatrix from './components/SkillMatrix/SkillMatrix'
import UserProfile from './components/UserProfile/UserProfile';
import UserEdit from './components/UserEdit/UserEdit';
import { UserState } from './context/user/userState';

const App: React.FC = () => {
  return (
    <UserState>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route component={Auth} path="/login"/>
            <Route component={Users} path="/users" exact/>
            <Route component={UserProfile} path="/users/profile/:id" exact/>
            <Route component={UserEdit} path="/users/edit/:id"/>
            <Route component={UserEdit} path="/users/create" />
            <Route component={SkillMatrix} path="/skill-matrix"/>
            <Route component={Home} path="/" exact/>
          </Switch>
        </Layout>
      </BrowserRouter>
    </UserState>
  );
}

export default App;
 