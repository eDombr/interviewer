import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './hoc/Layout/Layout';
import Auth from './containers/Auth/Auth';
import Users from './containers/Users/Users';
import Home from './components/Home/Home';
import SkillMatrix from './containers/SkillMatrix/SkillMatrix'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route component={Home} path="/" exact/>
          <Route component={Auth} path="/login"/>
          <Route component={Users} path="/users"/>
          <Route component={SkillMatrix} path="/skill-matrix"/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
 