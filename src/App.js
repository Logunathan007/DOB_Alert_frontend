
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Admin from './Components/Admin';
import { useState } from 'react';


function App() {

  let [name,setName] = useState("")
  let [password,setPassword] = useState("");
  let [loginState,setLoginState] = useState(false);
  return (
    <div className = "app">
      <Routes>
        <Route path="/"
          element={
          <Login
            name = {name}
            setName = {setName}
            password = {password}
            setPassword = {setPassword}
            loginState = {loginState}
            setLoginState = {setLoginState}

          />}>
        </Route>
        <Route path="login"
          element={
          <Login
            name = {name}
            setName = {setName}
            password = {password}
            setPassword = {setPassword}
            loginState = {loginState}
            setLoginState = {setLoginState}

          />}>
        </Route>
        <Route path='admin'
          element={
          <Admin
            loginState = {loginState}
          />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
