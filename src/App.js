import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Switch>
        <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
