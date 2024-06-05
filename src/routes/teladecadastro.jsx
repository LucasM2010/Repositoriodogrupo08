import React from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const TelaDeCadastro = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    message.success('Registrado com sucesso!');
    setTimeout(() => {
      navigate('/');
    }, 2000); 
  };

  return (
    <div className="register-warp register-background" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
      <div className="logo-container" style={{ marginBottom: 50, marginLeft: 180 }}>
        <img src="/imagem1.jpeg" alt="Logo" className="logo" />
      </div>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
        style={{ width: '80%', maxWidth: 500 }}
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'Por favor, insira um e-mail válido!',
            },
            {
              required: true,
              message: 'Por favor, insira seu e-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Senha"
          rules={[
            {
              required: true,
              message: 'Por favor, insira sua senha!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirmar Senha"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Por favor, confirme sua senha!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('As senhas inseridas não coincidem!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="nickname"
          label="Nome de Usuário"
          tooltip="Como você gostaria de ser chamado?"
          rules={[
            {
              required: true,
              message: 'Por favor, insira seu nome de usuário!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Sexo"
          rules={[
            {
              required: true,
              message: 'Por favor, selecione seu sexo!',
            },
          ]}
        >
          <Select placeholder="Selecione seu sexo">
            <Option value="male">Mulher</Option>
            <Option value="female">Homem</Option>
            <Option value="other">Outros</Option>
          </Select>
        </Form.Item>

        <Form.Item {...tailFormItemLayout} style={{ textAlign: 'center' }}>
          <Button type="primary" htmlType="submit" style={{ marginRight: 10 }}>
            Registrar
          </Button>
          <Button type="default">
            <Link to="/">Voltar</Link>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default TelaDeCadastro;
