import React, { useState, useRef, useEffect } from 'react';
import { Input, Button, List } from 'antd';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleMessageSend = () => {
    if (message.trim() === '') return;
    setMessages([...messages, { sender: 'Me', text: message }]);
    setMessage('');
  };

  const handleClearConversation = () => {
    setMessages([]);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  useEffect(() => {
    listRef.current.scrollTo(0, listRef.current.scrollHeight);
  }, [messages]);

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20, textAlign: 'center' }}>
      <h1>Chat</h1>
      <Button type="danger" onClick={handleClearConversation} style={{ marginBottom: 20 }}>
        Limpar Conversa
      </Button>
      <div
        style={{
          maxHeight: 150,
          overflowY: 'auto',
          marginBottom: 20,
          scrollbarWidth: 'none', // Firefox
          '-ms-overflow-style': 'none', // Internet Explorer
          '&::-webkit-scrollbar': {
            display: 'none', // Chrome, Safari, Opera
          },
        }}
        ref={listRef}
      >
        <List
          dataSource={messages}
          renderItem={(item) => (
            <List.Item
              style={{
                textAlign: item.sender === 'Me' ? 'right' : 'left',
                borderBottom: 'none',
              }}
            >
              <b>{item.sender}: </b>{item.text}
            </List.Item>
          )}
        />
        <div ref={messagesEndRef} />
      </div>
      <Input
        value={message}
        onChange={handleMessageChange}
        onPressEnter={handleMessageSend}
        placeholder="Digite uma mensagem..."
        style={{ marginBottom: 10 }}
      />
      <Button type="primary" onClick={handleMessageSend}>
        Enviar
      </Button>
    </div>
  );
};

export default Chat;
