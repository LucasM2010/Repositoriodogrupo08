import React, { useState, useEffect } from 'react';
import { getItems, createItem } from './api';

function App() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    useEffect(() => {
        // Carregar itens ao montar o componente
        getItems()
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error("Erro ao carregar itens:", error);
            });
    }, []);

    const handleAddItem = () => {
        const item = { name: newItem }; // Supondo que o item tem um campo 'name'
        createItem(item)
            .then(response => {
                setItems([...items, response.data]);
                setNewItem(''); // Limpar o campo de entrada
            })
            .catch(error => {
                console.error("Erro ao adicionar item:", error);
            });
    };

    return (
        <div>
            <h1>Items</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <input
                type="text"
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
            />
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    );
}

export default App;
