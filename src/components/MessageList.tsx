import React from 'react';
import Message from "./Message";

interface messagesListProps {
  messagesList: {
    author: string;
    message: string;
  }[];
}

const MessageList: React.FC<messagesListProps> = ({messagesList}) => {
  return (
    <div>
      {messagesList.map((prevMessage, index) => (
        <Message key={index} {...prevMessage} />
      ))}
    </div>
  );
};

export default MessageList;