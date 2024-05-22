import React, { useState } from 'react';
import { Alert, Checkbox } from 'antd';
import { LoginOutlined, UserOutlined } from '@ant-design/icons'; 


const UserName = ({ name }) => (
  <div>
    <UserOutlined />
    <input type="text" name={name} placeholder="Login" />
  </div>
);

const Password = ({ name }) => (
  <div>
    <LoginOutlined />
    <input type="password" name={name} placeholder="Senha" />
  </div>
);

const Submit = ({ children }) => (
  <button type="submit">{children}</button>
);

const LoginDemo = () => {
  const [notice, setNotice] = useState('');
  const [autoLogin, setAutoLogin] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    // LOGICA AQUI
  };

  const changeAutoLogin = (e) => {
    setAutoLogin(e.target.checked);
  };

  return (
    <div className="login-warp login-background">
      <form onSubmit={onSubmit}>
        {notice && (
          <Alert
            style={{ marginBottom: 23 }}
            message={notice}
            type="error"
            showIcon
            closable
          />
        )}
        <UserName name="username" />
        <Password name="password" />
        <div>
          <Checkbox checked={autoLogin} onChange={changeAutoLogin}>
            Mostrar Senha
          </Checkbox>
          <a style={{ float: 'right' }} href="">
            Esqueci minha senha
          </a>
        </div>
        <Submit>Login</Submit>
      </form>
    </div>
  );
};

export default LoginDemo;
