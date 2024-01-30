import React from 'react';

interface messageFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  changeAuthor: (e: React.ChangeEvent<HTMLInputElement>) => void
  changeMessage: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const MessageForm: React.FC<messageFormProps> = ({onSubmit, changeMessage, changeAuthor}) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="author"
        placeholder='Введите автора'
        onChange={changeAuthor}
      />
      <input
        type="text"
        name='message'
        placeholder='Введите сообщение'
        onChange={changeMessage}
      />
      <button>Отправить</button>
    </form>
  );
};


export default MessageForm;