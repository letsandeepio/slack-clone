import React from 'react';
import './Login.css';

import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';

function Login() {
  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src="/images/slack-logo.png" alt="" />
        <h1>Sign into Green Rains Workspace</h1>
        <p>greenrains.slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
