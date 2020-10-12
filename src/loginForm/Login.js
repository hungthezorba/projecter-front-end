import React from 'react'
import './Login.css'


export default class Login extends React.Component {

    render() {
        return (
                <div class="form-container">
        <form class="form" id="login-form">
            <div class="form-header">
                <div id="heading-container">
                    <h3 id="heading">Sign in</h3>
                </div>
            </div>
            <div class="form-body">
                <div id="username-section" class="row-custom">
                    <div class="form-label">
                        <label for="username">Username</label>
                    </div>
                    <div>
                        <input type="text" class="form-input" id="username"/>
                    </div>
                </div>
                <div id="password-section" class="row-custom">
                    <div class="form-label">
                        <label for="password">Password</label>
                    </div>
                    <div>
                        <input type="password" class="form-input" id="password"/>
                    </div>
                </div>
            </div>
            <div class="form-footer">
                <div class="options-section">
                    <div>
                        <p>Forgot your password?</p>
                    </div>
                    <div>
                        <p>Sign up</p>
                    </div>
                </div>
                <div id="submit-section">
                    <div>
                        <input type="submit" value="Sign in"/>
                    </div>
                </div>
            </div>
        </form>
    </div>
        )
    }
}