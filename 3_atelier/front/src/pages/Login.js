import React from 'react';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigation = useNavigate();

    const handleSubmit = () => {
        navigation(`/main`);
    }

    return (
        <>
            <p>Login</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Nom :
                    <input type="text" name="name" />
                </label>
                <label>
                    Password :
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Envoyer" />
            </form>
        </>
    );
};

export default Login;
