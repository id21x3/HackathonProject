import React from 'react';
import AssistantMessage from './AssistantMessage';

const MessageList = ({ messages }) => {
    return (
        <div className="message-list">
            {messages.map((msg, index) =>
                msg.sender === 'assistant' ? (
                    <AssistantMessage key={index} text={msg.text} />
                ) : (
                    <div key={index} className="user-message">
                        {msg.text}
                    </div>
                )
            )}
        </div>
    );
};

export default MessageList;
