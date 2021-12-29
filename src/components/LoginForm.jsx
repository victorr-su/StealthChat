import { useState } from 'react';
import axios from 'axios';

const LoginForm = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const authObject = { 'Project-ID' : '8ce7e7ab-060d-4a32-bec5-c1b13b69412c', 'User-Name': username , 'User-Secret': password};

        try{
           await axios.get('https://api.chatengine.io/chats', {headers: authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();

        }catch(error){
            setError('Incorrent credentials');
        }
    }
    return(
        <div className = 'wrapper'>
            <div className = 'form'>
                <h1 className = 'title'> Chat Application</h1>
                <form onSubmit = {handleSubmit}>
                    <input type = 'text' value = {username} onChange = {(e) => setUsername(e.target.value)} className = 'input' placeholder = 'Username' required/>
                    <input type = 'password' value = {password} onChange = {(e) => setPassword(e.target.value)} className = 'input' placeholder = 'Password' required/>
                    <div algin = 'center' className ='button-div'>
                        <button type = 'submit' className = 'button'>
                            <span> Login </span>
                        </button>
                        <h2 className = 'error'> {error} </h2>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;