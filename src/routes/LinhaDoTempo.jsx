import React from 'react';
import { Steps } from 'antd';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

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
  </Layout>
);

export default LinhaDoTempo;
