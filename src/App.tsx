import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './hoc/Layout/Layout';
import Auth from './containers/Auth/Auth';
import Users from './containers/Users/Users';
import Home from './components/Home/Home';
import SkillMatrix from './containers/SkillMatrix/SkillMatrix'
import UserProfile from './containers/UserProfile/UserProfile';
import UserEdit from './containers/UserEdit/UserEdit';

const App: React.FC = () => {
  return (
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
  );
}

export default App;
 