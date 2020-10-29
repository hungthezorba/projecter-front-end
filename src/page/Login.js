import React from 'react'
import LoginForm from '../loginForm/LoginForm'
import styled from 'styled-components'

const LoginWrapper = styled.div`
        background-color: #6096BA;
        padding: 5em 0 8em 0;
`

const Login = () => {

    return (
        <LoginWrapper>
            <LoginForm/>
        </LoginWrapper>
    )
}

export default Login