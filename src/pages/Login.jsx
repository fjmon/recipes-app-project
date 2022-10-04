import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../style/Login.css';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (validEmail) => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const isEmailValid = emailRegex.test(validEmail);
    return isEmailValid;
  };

  const handlePassword = (validPassword) => {
    const minLength = 6;
    const isPasswordValid = validPassword.length > minLength;
    return isPasswordValid;
  };

  const checkEmail = handleEmail(email);

  const checkPassword = handlePassword(password);

  const handleSubmit = () => {
    localStorage.setItem('user', JSON.stringify({ email }));
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('drinksToken', '1');
    history.push('/meals');
  };

  return (
    <main>
      <form className="form-login">
        <h1>Login</h1>

        <input
          type="email"
          className="form-control"
          data-testid="email-input"
          placeholder="Email"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
        />

        <input
          type="password"
          className="form-control"
          data-testid="password-input"
          placeholder="Password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />

        <button
          type="button"
          className="btn btn-primary"
          data-testid="login-submit-btn"
          disabled={ !(checkEmail && checkPassword) }
          onClick={ handleSubmit }
        >
          Enter
        </button>
      </form>
    </main>
  );
}

export default Login;
