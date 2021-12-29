import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
import LoginForm from './components/LoginForm';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return(
        <ChatEngine
            height = "100vh"
            projectID = "8ce7e7ab-060d-4a32-bec5-c1b13b69412c"
            userName = {localStorage.getItem('username')}
            userSecret  = {localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
       
    );
}
export default App;