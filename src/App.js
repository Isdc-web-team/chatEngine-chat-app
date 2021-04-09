import { ChatEngine }  from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.jsx';
import './App.css';
import LoginForm from './components/LoginForm.jsx';

function App() {
  if(!localStorage.getItem('username')) return <LoginForm/> 
  return (
    <ChatEngine
      height="100vh"
      projectID="1d82bbf2-66c1-4b63-9e60-236c779ad6ec"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} /> 
      }

    />
  );
}

export default App;
