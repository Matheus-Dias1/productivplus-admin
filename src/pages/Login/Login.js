import React, { useContext, useState } from 'react';
import classes from './Login.module.css';
import AuthContext from '../../context/auth-context';

import logo from '../../assets/p+_logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [pass, setPass] = useState('');
  const [passFocused, setPassFocused] = useState(false);
  const [forgotPass, setForgotPass] = useState(false);

  const authCtx = useContext(AuthContext);

  const onLoginHandler = (event) => {
    event.preventDefault();
    authCtx.login(email, pass);
  };

  const toggleEmailFocous = () => {
    setEmailFocused(state => !state)
  };

  const togglePassFocous = () => {
    setPassFocused (state => !state)
  };

  const onEmailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const onPassChangeHandler = (event) => {
    setPass(event.target.value);
  };

  const forgotPassHandler = (event) => {
    setForgotPass(state => !state);
  };
  return (
    <>
      <div className={classes['login-logo']}>
        <img alt="productiv+ logo" src={logo} />
      </div>
      <div className={classes['login-container']}>
        <div className={classes['login-box']}>
          <div className={classes['login-title']}>
            <h2>SEJA BEM-VINDO</h2>
            <h2>FAÇA SEU LOGIN</h2>
          </div>
          <form onSubmit={onLoginHandler}>
            <div className={`${classes['input-group']} ${emailFocused ? classes['focused'] : ''}`}>
              <label htmlFor="email">E-MAIL</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={onEmailChangeHandler}
                onFocus={toggleEmailFocous}
                onBlur={toggleEmailFocous}
              />
            </div>
            <div className={`${classes['input-group']} ${passFocused ? classes['focused'] : ''}`}>
              <label htmlFor="pass">SENHA</label>
              <input
                id="pass"
                type="password"
                value={pass}
                onChange={onPassChangeHandler}
                onFocus={togglePassFocous}
                onBlur={togglePassFocous}
              />
            </div>
            <div className={classes['login-action']}>
              <button
                onClick={forgotPassHandler}
                className={classes['forgot-pass-button']}
              >
                {forgotPass ? '😭' : 'ESQUECI MINHA SENHA'}
              </button>
              <button type="submit">ENTRAR</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
