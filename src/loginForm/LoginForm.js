import React from 'react'
import './Login.css'


export default class LoginForm extends React.Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const target = e.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
                <div style={{margin: '0 auto', width: '100%'}} class="form-container">
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
                        <input type="text" class="form-input" id="username" name="username" value={this.state.username} onChange={this.handleChange} />
                    </div>
                </div>
                <div id="password-section" class="row-custom">
                    <div class="form-label">
                        <label for="password">Password</label>
                    </div>
                    <div>
                        <input type="password" class="form-input" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
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