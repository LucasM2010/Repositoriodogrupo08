import React from 'react';
import { UsergroupAddOutlined, AppstoreOutlined, MailOutlined, SmallDashOutlined } from '@ant-design/icons';
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
    onClick: () => window.location.href = '/linha-do-tempo',
  },
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
            {/* Conteúdo principal da página */}
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
