import React from 'react';

interface messageProps {
  author: string;
  message: string;
}

const Message: React.FC<messageProps> = ({author, message}) => (
  <div>
    <p className='border border-secondary-subtle rounded'>Автор: {author} <br/>Сообщение: {message}</p>
  </div>
);

export default Message;