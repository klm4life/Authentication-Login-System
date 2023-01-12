import React, { useState } from "react";
import axios from 'axios';

const registerUrl = 'https://noc4wfai1i.execute-api.us-east-1.amazonaws.com/prod/register'; // Should make as environment variable

const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState(null);

	const submitHandler = (event) => {
	    event.preventDefault();
	    if (username.trim() === '' || email.trim() === '' || name.trim() === '' || password.trim() === '') {
			setMessage('All fields are required');
			return;
	    }
	    setMessage(null);
		const requestConfig = {
			headers: {
				'x-api-key': 'HcBRcNghJa3LwKQHT9GK91O9Fe3McmEy6mdNt4IU' // Should make as environment variable
			}
		}
		const requestBody = {
			username: username,
			email: email,
			name: name,
			password: password
		}
		axios.post(registerUrl, requestBody, requestConfig).then(response => {
			setMessage('Registration Successful');
		}).catch(error => {
			if (error.response.status === 401 || error.response.status === 403) {
				setMessage(error.response.data.message);
			}
			else {
				setMessage('Sorry. Backend server is down. Please try again later.');
			}
		})

	}

	return (
		<div>
			<form onSubmit={submitHandler}>
				<h5>Register</h5>
				Name: <input type="text" value={name} onChange={event => setName(event.target.value)} /> <br/>
				Email: <input type="text" value={email} onChange={event => setEmail(event.target.value)} /> <br/>
				Username: <input type="text" value={username} onChange={event => setUsername(event.target.value)} /> <br/>
				Password: <input type="password" value={password} onChange={event => setPassword(event.target.value)} /> <br/>
				<input type="submit" value="Register" />
			</form>
			{message && <p className="message">{message}</p>}
		</div>
	)
}

export default Register;