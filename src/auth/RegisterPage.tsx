import React, {useState} from "react";
import {AuthForm} from "./auth.components";
import {onRegister} from "./auth.api";
import {Link} from "react-navi";

import { Button, Form } from "react-bootstrap";
import "./styles/RegisterPage.css";

const RegisterPage = () => {

    const [{username, password, repeatPassword}, setRegisterData] = useState({
        username: '',
        password: '',
        repeatPassword: ''
    })

    const [error, setError] = useState('')

    const register = async (event: React.FormEvent) => {
        event.preventDefault();
        if(password === repeatPassword) {
            const response = await onRegister({
                username,
                password
            })
            if(response && response.error) {
                setError(response.error);
            }
        } else {
            setError('Password in both lines should match!')
        }
    }

    return(
        <div className="Register">
            <Form onSubmit={register}>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                        <Form.Control autoFocus value={username} name="username" onChange={(event) => setRegisterData({
                            username: event.target.value,
                            password,
                            repeatPassword
                        })}/>
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                        <Form.Control autoFocus value={password} name="password" type="password" onChange={(event) => setRegisterData({
                            username,
                            password: event.target.value,
                            repeatPassword
                        })}/>
                </Form.Group>
                <Form.Group controlId="repeatPassword">
                    <Form.Label>Repeat password</Form.Label>
                        <Form.Control autoFocus value={repeatPassword} name="repeatPassword" type="password" onChange={(event) => setRegisterData({
                            username,
                            password,
                            repeatPassword: event.target.value
                        })}/>
                </Form.Group>
                <Button block size="lg" type="submit">Sign up</Button>
                {error.length > 0 && <p>{error}</p>}
                <p>Already have an account? <Link href="/login">Go to sign in page.</Link></p>
            </Form>
        </div>
    )
}

export default  RegisterPage;
