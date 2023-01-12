import React, { useState } from "react";
import axios from "axios";
import { setUserSession } from "./service/AuthService";
import { useNavigate } from "react-router-dom";
const loginAPIUrl = 'https://noc4wfai1i.execute-api.us-east-1.amazonaws.com/prod/login'; // Should make as environment variable

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        if (username.trim() === '' || password.trim() === '') {
            setErrorMessage('All fields are required');
            return;
        }
        setErrorMessage(null);
        const requestConfig = {
			headers: {
				'x-api-key': 'HcBRcNghJa3LwKQHT9GK91O9Fe3McmEy6mdNt4IU' // Should make as environment variable
			}
		}
        const requestBody = {
            username: username,
            password: password
        }

        axios.post(loginAPIUrl, requestBody, requestConfig).then((response) => {
            setUserSession(response.data.user, response.data.token);
            navigate('/premium-content');
        }).catch((error) => {
            if (error.response.status === 401 || error.response.status === 403) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('Sorry. Backend server is down. Please try again later.');
            }
        })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <h5>Login</h5>
                Username: <input type="text" value={username} onChange={event => setUsername(event.target.value)} /> <br/>
                Password: <input type="password" value={password} onChange={event => setPassword(event.target.value)} /> <br/>
                <input type="submit" value="Login" />
            </form>
            {errorMessage && <p className="message">{errorMessage}</p>}
        </div>
    )
}

export default Login;