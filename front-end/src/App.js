import React, { useEffect } from "react"
import './App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import UserCard from './components/UserCard';
import AddUser from './components/AddUser';
import { getUsers } from './JS/actions/actionUser'


function App() {

  const dispatch = useDispatch()
  const users = useSelector(state => state.users)

  const getAllUsers = () => {
    dispatch(getUsers())
  }

  useEffect(() => {
    getAllUsers()
  }, [])


  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/User-list">
          <Button variant="outline-primary button">Users List</Button>
        </Link>
        <Link to="/Add-User">
          <Button variant="primary button">Add User</Button>
        </Link>
        <Switch>
          <Route path="/Add-User" render={() => <AddUser />} />
          <Route path="/User-list" render={() => (<div className="contact-list">{users.map((el, i) => (<UserCard key={i} user={el} />))}</div>)} />
          <Route />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
