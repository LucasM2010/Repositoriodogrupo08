import React, { useState } from 'react';
import { Form, Input, Button, Alert, Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { UsergroupAddOutlined, AppstoreOutlined, MailOutlined, SmallDashOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const CadastrarEmpresa = () => {
  const [form] = Form.useForm();
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();
 
  const onFinish = (values) => {
    console.log('Success:', values);
    // Adicione a lógica de envio dos dados aqui
    setAlert({ type: 'success', message: 'Empresa cadastrada com sucesso!' });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    setAlert({ type: 'error', message: 'Erro ao cadastrar empresa!' });
  };

  const handleBackToHome = () => {
    navigate('/home');
  };

  const items = [
    {
      key: '1',
      icon: <UsergroupAddOutlined />,
      label: 'Cadastrar Empresa',
      onClick: () => navigate('/cadastrar-empresa')
    },
    {
      key: '2',
      icon: <AppstoreOutlined />,
      label: 'Cadastrar Ong',
      onClick: () => navigate('/cadastrar-ong')
    },
    {
      key: '3',
      icon: <MailOutlined />,
      label: 'Messages',
    },
    {
      key: '4',
      icon: <SmallDashOutlined />,
      label: 'Linha de tempo',
      onClick: () => navigate('/linhadetempo')
    },
  ];

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />
      </Sider>
      <Layout>
        <Header style={{ display: 'flex', alignItems: 'center', padding: 70, background: '#d3d3d3' }}>
          <img src="/imagem1.jpeg" alt="Logo" className="logo" />
        </Header>
        <Content
          style={{
            margin: '24px 16px 0',
            padding: 70,
            minHeight: 360,
            background: '#d3d3d3',
          }}
        >
          <div className="cadastrar-empresa">
            {alert && (
              <Alert
                message={alert.message}
                type={alert.type}
                showIcon
                closable
                onClose={() => setAlert(null)}
              />
            )}
            <Form
              form={form}
              name="cadastrar"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              layout="vertical"
              className="form-container"
            >
              <Form.Item
                label="Nome da Empresa"
                name="nome"
                rules={[{ required: true, message: 'Por favor, insira o nome da empresa!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="CNPJ"
                name="cnpj"
                rules={[{ required: true, message: 'Por favor, insira o CNPJ!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Endereço"
                name="endereco"
                rules={[{ required: true, message: 'Por favor, insira o endereço!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Telefone"
                name="telefone"
                rules={[{ required: true, message: 'Por favor, insira o telefone!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Cadastrar
                </Button>
                <Button type="default" onClick={handleBackToHome} style={{ marginLeft: '10px' }}>
                  Voltar
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Grupo 08 ©{new Date().getFullYear()} Created by FomeZero Connect
        </Footer>
      </Layout>
    </Layout>
  );
};

export default CadastrarEmpresa;
