import React, { useState } from 'react';
import { UsergroupAddOutlined, AppstoreOutlined, MailOutlined, SmallDashOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import Chat from './Chat'; 

const { Header, Content, Footer, Sider } = Layout;

const Menssagens = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [buttonColor, setButtonColor] = useState("default"); 

  const items = [
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
      onClick: () => {
        window.location.href = '/menssagens';
        setButtonColor("primary"); 
      }
    },
    {
      key: '4',
      icon: <SmallDashOutlined />,
      label: 'Linha de tempo',
      onClick: () => window.location.href = '/linhadetempo'
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['3']} items={items} />
      </Sider>
      <Layout>
        <Header style={{ display: 'flex', alignItems: 'center', padding: 70, background: '#d3d3d3' }}>
          <img src="/imagem1.jpeg" alt="Logo" className="logo" />
        </Header>
        <Content style={{ margin: '24px 16px 0', display: 'flex' }}>
          <div
            style={{
              padding: '150px',
              flex: 1,
              minHeight: 360,
              background: '#d3d3d3',
              borderRadius: borderRadiusLG,
            }}
          >
            {<div style={{ marginLeft: '24px', background: '#ADD8E6' }}>
            <Chat /> {}
          </div>}
          </div>
          
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Grupo 08 ©{new Date().getFullYear()} Created by FomeZero Connect
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Menssagens;
