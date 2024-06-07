import React from 'react';
import { UsergroupAddOutlined, LogoutOutlined, MailOutlined, SmallDashOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: '1',
    icon: <UsergroupAddOutlined />,
    label: 'Cadastro',
    onClick: () => window.location.href = '/cadastrar-empresa',
  },
  {
    key: '3',
    icon: <MailOutlined />,
    label: 'Messages',
    onClick: () => window.location.href = '/menssagens'
  },
  {
    key: '4',
    icon: <SmallDashOutlined />,
    label: 'Linha do Tempo',
    onClick: () => window.location.href = '/linhadetempo',
  },
  {
    key: '4',
    icon: <SmallDashOutlined />,
    label: 'Empresas e Ongs',
    onClick: () => window.location.href = '/empresaseongs',
  },
  {
    key: '6',
    icon: <LogoutOutlined />,
    label: 'Sair',
    onClick: () => {
      
      window.location.href = '/';
    },
    style: { position: 'absolute', bottom: '0', width: '100%' },
  }
];

const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
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
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 700,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {  <h1 style={{ textAlign: 'center' }} className="effect-message">Conectando corações solidários: unindo empresas e ONGs para fazer a diferença e espalhar esperança.</h1>}          
            <div className="image-container">
              <img src="/image1.png" alt="Image" className="hover-image" />
              <img src="/image.png" alt="Image" className="hover-image" />
            </div>
          </div>
          
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Grupo 08 ©{new Date().getFullYear()} Created by FomeZero Connect
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
