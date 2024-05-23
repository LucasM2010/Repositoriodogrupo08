import React from 'react';
<<<<<<< HEAD
import { Steps, Button, Spin, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { LoadingOutlined, UsergroupAddOutlined, AppstoreOutlined, MailOutlined, SmallDashOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
=======
import { Steps } from 'antd';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;
>>>>>>> 300f35df29dc701a5191b9086ce722a6ce8992b6

const items = [
  {
    title: 'Pedido Recebido',
    description: 'O pedido foi recebido e está sendo processado.',
  },
  {
    title: 'Em Preparação',
    description: 'Os alimentos estão sendo preparados para envio.',
  },
  {
    title: 'Enviado',
    description: 'Os alimentos foram enviados e estão a caminho.',
  },
  {
    title: 'Entregue',
    description: 'Os alimentos foram entregues ao destino.',
  },
];

<<<<<<< HEAD
const menuItems = [
  {
    key: '1',
    icon: <UsergroupAddOutlined />,
    label: 'Cadastrar Empresa',
    onClick: () => window.location.href = '/cadastrar-empresa'
  },
  {
    key: '2',
    icon: <AppstoreOutlined />,
    label: 'Cadastrar Ong',
    onClick: () => window.location.href = '/cadastrar-ong'
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
    onClick: () => window.location.href = '/linhadetempo'
  },
];

const LinhaDoTempo = () => (
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
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={menuItems} />
    </Sider>
    <Layout>
      <Header
        style={{
          padding: '73px 16px',
          background: '#d3d3d3',
          color: '#000000',
          textAlign: 'center',
          fontSize: '24px',
        }}
      >
        <div className="logo-container" style={{ position: 'absolute', left: '280px', top: '10%', transform: 'translateY(-50%)' }}>
          <img src="/imagem1.jpeg" alt="Logo" className="logo" />
        </div>
        <span style={{ display: 'inline-block', marginLeft: '200px' }}>Status de Envio de Alimentos</span>
      </Header>
      <Content
        style={{
          margin: '24px 16px 0',
          padding: '24px',
          background: '#d3d3d3',
          minHeight: '100vh',
        }}
      >
        <Steps current={2} direction="vertical" items={items} />
        <Spin
          indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
          style={{
            position: 'absolute',
            top: '50%',
            left: 'calc(100% + 20px)',
            transform: 'translateY(-50%)',
          }}
        />
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        <div style={{ float: 'left' }}>
          <Button type="primary">
            <Link to="/home">Voltar</Link>
          </Button>
        </div>
        <br />
        Grupo 08 ©{new Date().getFullYear()} Created by FomeZero Connect
      </Footer>
    </Layout>
=======
const LinhaDoTempo = () => (
  <Layout>
    <Header
      style={{
        padding: 0,
        background: '#1890ff',
        color: '#fff',
        textAlign: 'center',
        fontSize: '24px',
      }}
    >
      Linha do Tempo de Envios
    </Header>
    <Content
      style={{
        margin: '24px 16px 0',
        padding: '24px',
        background: '#fff',
      }}
    >
      <Steps current={2} direction="vertical" items={items} />
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Grupo 08 ©{new Date().getFullYear()} Created by FomeZero Connect
    </Footer>
>>>>>>> 300f35df29dc701a5191b9086ce722a6ce8992b6
  </Layout>
);

export default LinhaDoTempo;
