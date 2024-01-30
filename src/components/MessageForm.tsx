import React from 'react';

interface messageFormProps {
  author: string;
  message: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  changeAuthor: (e: React.ChangeEvent<HTMLInputElement>) => void
  changeMessage: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const MessageForm: React.FC<messageFormProps> = ({onSubmit, changeMessage, changeAuthor, author, message}) => {
  return (
    <form onSubmit={onSubmit} className='flex-column d-flex align-items-start'>
      <h4>Вы находитесь в чате, оставьте свое сообщение:</h4>
      <input
        className='form-control'
        name="author"
        value={author}
        placeholder='Введите логин'
        onChange={changeAuthor}
      />
      <br/>
      <input
        className='form-control'
        name='message'
        value={message}
        placeholder='Введите сообщение'
        onChange={changeMessage}
      />
      <br/>
      <button className='btn btn-info mb-3'>Отправить</button>
    </form>
  );
};


export default MessageForm;