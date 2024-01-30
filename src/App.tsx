import './App.css'
import MessageList from "./components/MessageList";
import {useState} from "react";
import Message from "./components/Message";

function App() {
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [messagesList, setMessagesList] = useState<{author: string; message: string}[]>([]);


  return (
    <>
      <Message
        author={author}
        message={message}
      />
      <MessageList messagesList={messagesList}/>
      App
    </>
  )
}

export default App
