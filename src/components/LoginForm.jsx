import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const authObject = { 'Project-ID': "78cc34c3-1d1c-4381-b5e2-6d3c06f9e7fa", 'User-Name': username, 'User-Secret': password};

        try{
            //usernae | password => chatengine -> give message
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            
            // works out -> stay logged in
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
         
        } catch (error) {  
            // error -> try with new username...
            setError('Ooops, incorrect credentials.')
        }
        
        
        
    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;