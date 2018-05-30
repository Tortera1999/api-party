import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import './App.css'
import Github from './Github'
import Nasa from './Nasa'
import Homework from './Homework'
import Weather from './Weather'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>Ain't no party like an</h3>
          <h1>API Party</h1>
        </div>
        <ul className="navLinks">
          <li>
            <NavLink to="/github">GitHub API</NavLink>
          </li>
          <li>
            <NavLink to="/nasa">NASA API</NavLink>
          </li>
          <li>
            <NavLink to="/homework">Homework</NavLink>
          </li>
          <li>
            <NavLink to="/weather">Weather Search</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/github" component={Github} />
          <Route path="/nasa" component={Nasa} />
          <Route path="/homework" component={Homework} />
          <Route path="/weather" component={Weather} />
          <Route render={() => <p>To get started, click one of the links above.</p>} />
        </Switch>
      </div>
    )
  }
}
export default App