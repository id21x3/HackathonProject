import React, { useState } from 'react';
import MessageList from '../commponents/ChatPageComponents/MessageList.jsx';
import MessageInput from '../commponents/ChatPageComponents/MessageInput';
import AssistantMessage from '../commponents/ChatPageComponents/AssistantMessage';
import '../styles/ChatPage.css';

const ChatPage = () => {
    const [messages, setMessages] = useState([
        { sender: 'assistant', text: 'Hello! How can I assist you today?' }
    ]);

    const handleSendMessage = (text) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { sender: 'user', text },
        ]);

        // Искусственный ответ от ассистента
        setTimeout(() => {
            const assistantResponse = generateAssistantResponse(text);
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: 'assistant', text: assistantResponse }
            ]);
        }, 1000);
    };

    const generateAssistantResponse = (text) => {
        if (text.toLowerCase().includes("budget")) {
            return "It seems you're interested in budget advice. Let me help you with that!";
        } else if (text.toLowerCase().includes("goal")) {
            return "Let's discuss your goals. Do you have a specific target in mind?";
        } else {
            return "I'm here to help with any of your questions!";
        }
    };

    return (
        <div className="chat-page">
            <MessageList messages={messages} />
            <MessageInput onSendMessage={handleSendMessage} />
        </div>
    );
};

export default ChatPage;
