import './App.css';
import MessageList from "./components/MessageList";
import React, {useEffect, useState} from "react";
import MessageForm from "./components/MessageForm";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [messagesList, setMessagesList] = useState<{ author: string; message: string }[]>([]);
  const [lastMessage, setLastMessage] = useState();
  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const url = 'http://146.185.154.90:8000/messages';

    const data = new URLSearchParams();
    data.set('author', author);
    data.set('message', message);

    try {
      const response = await fetch(url, {method: 'POST', body: data});
      const newMessage = await response.json();

      setMessagesList((prevMessage) => [...prevMessage, newMessage]);

      setAuthor('');
      setMessage('');

    } catch (error) {
      console.log('Возникла ошибка: ', error)
    }
  }

  const displayedMessage = () => {
    return messagesList.map((message) => ({
      author: message.author,
      message: message.message,
    }))
  }

  const fetchMessage = async () => {
    try {
      const url = lastMessage ? `http://146.185.154.90:8000/messages?datetime=${encodeURIComponent(lastMessage)}`
        : 'http://146.185.154.90:8000/messages';

      const response = await fetch(url);
      const newMessage = await response.json();

      if (newMessage.length > 0) {
        setLastMessage(newMessage[newMessage.length - 1]);
        setMessagesList([...displayedMessage(), ...newMessage]);
      }
    } catch (error) {
      console.log('Возникла ошибка: ', error);
    }
  }

  useEffect(() => {
    fetchMessage();
    const intervalMessageTime = setInterval(fetchMessage, 3000);

    return () => clearInterval(intervalMessageTime)
  }, []);

  return (
    <>
      <MessageForm
        onSubmit={formSubmit}
        author={author}
        message={message}
        changeAuthor={(e) => setAuthor(e.target.value)}
        changeMessage={(e) => setMessage(e.target.value)}
      />
      <MessageList messagesList={messagesList}/>
    </>
  )
}

export default App
