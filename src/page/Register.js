import React from 'react'
import RegisterForm from '../registerForm/RegisterForm'
import styled from 'styled-components'

const RegisterWrapper = styled.div`
        background-color: #6096BA;
        padding: 5em 0 8em 0;
`

const Register = () => {

    return (
        <RegisterWrapper>
            <RegisterForm/>
        </RegisterWrapper>
    )
}

export default Register