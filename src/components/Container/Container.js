import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, About, Contacts, NotFound, Gallery, Projects} from '../';
import { isAbsolute } from 'path';

class Container extends React.PureComponent {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Projects}/>
          <Route path='/about-me' component={About}/>
          <Route path='/gallery' component={Gallery}/>
          <Route path='/projects' component={Projects}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default Container;