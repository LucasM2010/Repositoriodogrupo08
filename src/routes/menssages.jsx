import React, { useState } from 'react';
import { UsergroupAddOutlined, AppstoreOutlined, MailOutlined, SmallDashOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const Menssagens = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [buttonColor, setButtonColor] = useState("default"); // Estado para controlar a cor do botão

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
        setButtonColor("primary"); // Atualiza a cor do botão ao clicar em "Messages"
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
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 350,
              minHeight: 360,
              background: '#d3d3d3',
              borderRadius: borderRadiusLG,
            }}
          >
            {/* Conteúdo da página */}
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
