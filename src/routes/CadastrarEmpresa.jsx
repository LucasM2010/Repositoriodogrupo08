import React, { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';

const CadastrarEmpresa = () => {
  const [form] = Form.useForm();
  const [alert, setAlert] = useState(null);

  const onFinish = (values) => {
    console.log('Success:', values);
    // Adicione a lógica de envio dos dados aqui
    setAlert({ type: 'success', message: 'Empresa cadastrada com sucesso!' });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    setAlert({ type: 'error', message: 'Erro ao cadastrar empresa!' });
  };

  return (
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
        </Form.Item>
      </Form>
    </div>
  );
};

export default CadastrarEmpresa;
