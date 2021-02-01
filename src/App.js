import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>

    return (
        <ChatEngine
            height="100vh"
            projectID="78cc34c3-1d1c-4381-b5e2-6d3c06f9e7fa"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>} 
        />
    );
}

export default App;