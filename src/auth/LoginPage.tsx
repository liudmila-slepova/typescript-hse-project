import * as React from "react"

import { onLogin } from "./auth.api";
import {useState} from "react";
import {Link, useNavigation } from "react-navi";

import { Button, Form } from "react-bootstrap";
import "./styles/LoginPage.css";

const LoginPage = () => {
    const navigation = useNavigation()
    const [{username, password}, setCredentials] = useState({
            username: '',
            password: ''
        }
    )

    const [error, setError] = useState('');

    const login = async (event: React.FormEvent) => {
        event.preventDefault();
        const response = await onLogin({
            username,
            password
        })

        if (response && response.error) {
           setError(response.error);
        } else {
            navigation.navigate("/")
        }
    }


    return ( <div className="Login">
                <Form onSubmit={login}>
                    <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control autoFocus value={username} onChange={(event) => setCredentials(
                            {
                                username: event.target.value,
                                password
                            })}/>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control autoFocus type={"password"} value={password} onChange={(event) => setCredentials({
                            username,
                            password: event.target.value
                        })}/>
                    </Form.Group>
                    <Button block size="lg" type="submit">Login</Button>
                    {error.length > 0 && <p>{error}</p>}
                    <p>Don't have an account? <Link href="/register">Register here.</Link></p>
                </Form>
            </div>
    )
}

export default LoginPage;
