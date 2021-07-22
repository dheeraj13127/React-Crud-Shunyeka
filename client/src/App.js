import React from 'react'
import './App.css'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Landing from './components/Landing'
import NewUser from './components/NewUser.js'
import ViewUser from './components/ViewUser'
function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Landing}/>
        <Route path="/users/:id/:info" exact component={NewUser}/>
        <Route path="/viewUser/:id" exact component={ViewUser}/>
      </Router>
    </div>
  )
}

export default App

