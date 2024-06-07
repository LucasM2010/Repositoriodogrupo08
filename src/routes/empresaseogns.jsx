import React from 'react';
import { Table, Layout, Menu, theme } from 'antd';
import { UsergroupAddOutlined, AppstoreOutlined, MailOutlined, HomeOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const data = [
  {
    key: '1',
    name: 'Empresa A',
    type: 'Empresa',
    contact: 'empresaA@example.com',
  },
  {
    key: '2',
    name: 'ONG B',
    type: 'ONG',
    contact: 'ongB@example.com',
  },
];

const columns = [
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Tipo',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Contato',
    dataIndex: 'contact',
    key: 'contact',
  },
];

const items = [
  {
    key: '3',
    icon: <MailOutlined />,
    label: 'Messages',
    onClick: () => window.location.href = '/menssagens'
  },
  {
    key: '6',  
    icon: <AppstoreOutlined />,
    label: 'Empresas e Ongs',
    onClick: () => window.location.href = '/empresaseongs',
  },
  {
    key: '7',
    icon: <HomeOutlined />,
    label: 'Home',
    onClick: () => window.location.href = '/home'
  }
];

const EmpresasEOngs = () => {
  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();
  const location = useLocation();

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
        <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]} items={items}>
          {items.map((item) => (
            <Menu.Item key={item.onClick} icon={item.icon} onClick={item.onClick}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ display: 'flex', alignItems: 'center', padding: 70, background: '#d3d3d3' }}>
          <img src="/imagem1.jpeg" alt="Logo" className="logo" />
          
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: 700, background: colorBgContainer, borderRadius: borderRadiusLG }}>
            <h2>Empresas e ONGs Cadastradas</h2>
            <Table dataSource={data} columns={columns} />
          </div>  
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Grupo 08 ©{new Date().getFullYear()} Created by FomeZero Connect
        </Footer>
      </Layout>
    </Layout>
  );
};

export default EmpresasEOngs;
