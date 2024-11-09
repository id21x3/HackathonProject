import React, { useState } from 'react';

const MessageInput = ({ onSendMessage }) => {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSendClick = () => {
        if (inputText.trim()) {
            onSendMessage(inputText);
            setInputText('');
        }
    };

    return (
        <div className="message-input">
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Type your message..."
            />
            <button onClick={handleSendClick}>Send</button>
        </div>
    );
};

export default MessageInput;