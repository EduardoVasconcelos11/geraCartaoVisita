import React, { useState } from 'react';

const CardForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Nome: ", name, "Telefone: ", phone, "E-mail: ", email);

        // Aqui você pode enviar os dados para o backend
        fetch('http://localhost:5000/api/cards/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, phone, email })
        }).then(response => response.json())
            .then(data => {
                // Trate a resposta do backend aqui
                console.log(data);
            }).catch(error => console.error('Erro:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="tel"
                placeholder="Telefone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit">Gerar Cartão</button>
        </form>
    );
};

export default CardForm;
