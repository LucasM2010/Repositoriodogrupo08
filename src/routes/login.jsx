import React, { useState } from 'react';
import { Alert, Checkbox, message } from 'antd';
import { LoginOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom'; 

const UserName = ({ name }) => (
  <div className="input-container">
    <UserOutlined />
    <input type="text" name={name} placeholder="Login" />
  </div>
);

const Password = ({ name }) => (
  <div className="input-container">
    <LoginOutlined />
    <input type="password" name={name} placeholder="Senha" />
  </div>
);

const Submit = ({ children }) => (
  <button type="submit" className="submit-button">{children}</button>
);

const LoginDemo = () => {
  const [notice, setNotice] = useState('');
  const [autoLogin, setAutoLogin] = useState(true);
  const navigate = useNavigate(); 

  const onSubmit = (e) => {
    e.preventDefault();

    message.loading('Fazendo Login...', 1.5).then(() => {
      navigate('/home');
    });
  };

  const changeAutoLogin = (e) => {
    setAutoLogin(e.target.checked);
  };

  return (
    <div className="login-warp login-background">
      <div className="logo-container" style={{ marginLeft: 75 }}>
        <img src="/imagem1.jpeg" alt="Logo" className="logo" />
      </div>
      <form onSubmit={onSubmit} className="login-form">
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
        <div className="options">
          <Checkbox checked={autoLogin} onChange={changeAutoLogin}>
            Mostrar Senha
          </Checkbox>
          <a style={{ float: 'right' }} href="">
            Esqueci minha senha
          </a>
        </div>
        <Submit>Login</Submit>
        <div style={{ marginTop: 10, textAlign: 'center' }}>
          <span>Não tem uma conta? </span>
          <Link to="/teladecadastro">Cadastre-se</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginDemo;
