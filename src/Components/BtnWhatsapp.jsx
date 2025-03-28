// src/WhatsAppButton.js
import React from 'react';

const WhatsAppButton = () => {
    const phoneNumber = '5531992101286'; // Substitua pelo seu número de telefone
    const message = 'Olá, gostaria de mais informações!'; // Mensagem padrão

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div
            className="fixed bottom-5 right-5 w-16 h-16 outline-2 outline-green-700 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-green-600 hover:outline-4 transition-colors duration-300"
            onClick={handleClick}
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-8 h-8"
            />
        </div>
    );
};

export default WhatsAppButton;