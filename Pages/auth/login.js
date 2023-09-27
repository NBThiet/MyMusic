import React from 'react';
import { loginEndpoint } from '../../api/ApiSpotify';

function Login() {
    return (
        <div>
            <a href={loginEndpoint}>LOGIN</a>
        </div>
    );
}

export default Login;
