import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HelloMessage = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5173/api/hello')
            .then(response => {
                setMessage(response.data);
            })
            .catch(error => {
                console.error('Houve um erro!', error);
            });
    }, []);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

export default HelloMessage;
