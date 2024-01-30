import React from 'react';

interface messageProps {
  author: string
  message: string
}

const Message: React.FC<messageProps> = ({author,message}) => (
    <div>
      <p>{author}: {message}</p>
    </div>
  );

export default Message;