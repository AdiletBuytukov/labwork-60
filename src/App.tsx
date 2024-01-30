import './App.css'
import MessageList from "./components/MessageList";
import React, {useState} from "react";
import MessageForm from "./components/MessageForm";

function App() {
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [messagesList, setMessagesList] = useState<{author: string; message: string}[]>([]);

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault()

    const body = new URLSearchParams();
    body.append('author', author);
    body.append('message', message);

    try {
      const response = await fetch('http://146.185.154.90:8000/messages', {method: 'POST', body});
      const newMessage = await response.json();

      setMessagesList((prevMessage) => [...prevMessage, newMessage]);

      setAuthor('');
      setMessage('');

    } catch (error) {
      console.log('Reason: ', error)
    }
  }

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
