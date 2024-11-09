import React, { useState } from 'react';
import axios from 'axios';
import MessageList from '../commponents/ChatPageComponents/MessageList.jsx';
import MessageInput from '../commponents/ChatPageComponents/MessageInput';
import AssistantMessage from '../commponents/ChatPageComponents/AssistantMessage';
import '../styles/ChatPage.css';

const ChatPage = () => {
    const [messages, setMessages] = useState([
        { sender: 'assistant', text: 'Hello! How can I assist you today?' }
    ]);

    const accountInfo = {
        username: "John Robinson",
        current_budget: 1200.0,
        planned_budget: 1500.0,
        spent_on: {
            groceries: 500.0,
            entertainment: 300.0,
            dining: 200.0
        }
    };

    const handleSendMessage = async (text) => {
        // Display user's message immediately
        setMessages((prevMessages) => [
            ...prevMessages,
            { sender: 'user', text }
        ]);

        try {
            const response = await axios.post("http://localhost:5000/get-response", {
                message: text,
                accountInfo: accountInfo
            });

            // Add assistant's response to the message list
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: 'assistant', text: response.data.response }
            ]);
        } catch (error) {
            console.error("Error fetching assistant response:", error);
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: 'assistant', text: "Sorry, I couldn't process your request at this time." }
            ]);
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
