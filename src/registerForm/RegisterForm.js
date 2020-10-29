import React from 'react'
import './Register.css'

export default class RegisterForm extends React.Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
            agreeTerms: false,
            receiveUpdates: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.submit = this.submit.bind(this)
    }

    handleChange(e) {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        
        this.setState({
            [name]: value
        })
    }

    submit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div style={{margin: '0 auto', width: '100%'}} class="form-container">
            <form class="form" id="login-form">
                <div class="form-header">
                    <div id="heading-container">
                        <h3 id="heading">Sign up</h3>
                    </div>
                </div>
                <div class="form-body">
                    <div id="username-section" class="row-custom">
                        <div class="form-label">
                            <label for="username">Username</label>
                        </div>
                        <div>
                            <input type="text" class="form-input" id="username" name="username" value={this.state.username} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div id="password-section" class="row-custom">
                        <div class="form-label">
                            <label for="password">Password</label>
                        </div>
                        <div>
                            <input type="password" class="form-input" id="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div id="name-section" class="row-custom">
                        <div id="first-name-section" class="row-custom" class="col">
                            <div class="form-label">
                                <label for="first-name">First name</label>
                            </div>
                            <div>
                                <input type="text" class="form-input" id="first-name" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div id="last-name-section" class="row-custom" class="col">
                            <div class="form-label">
                                <label for="last-name">Last name</label>
                            </div>
                            <div>
                                <input type="text" class="form-input" id="last-name" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div id="email-section" class="row-custom">
                        <div class="form-label">
                            <label for="email">Email address</label>
                        </div>
                        <div>
                            <input type="text" class="form-input" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                        </div>
                    </div>

                </div>
                <div class="form-footer">
                    <div id="check-section">
                        <div class="check-box-custom">
                            <label class="check-label" for="term-condition">
                                I agree to the terms and conditions
                                <input type="checkbox" id="term-condition" name="agreeTerms" value={this.state.agreeTerms} onChange={this.handleChange}/>
                                <span class="checkmark"></span>
                            </label>

                        </div>
                        <div class="check-box-custom">
                            <label class="check-label" for="receive-updates">
                                Receive email updates from TenderMate
                                <input type="checkbox" id="receive-updates" name="receiveUpdates" value={this.state.receiveUpdates} onChange={this.handleChange}/>
                                <span class="checkmark"></span>
                            </label>

                        </div>
                    </div>
                    <div id="submit-section">
                        <div>
                            <input className={this.state.agreeTerms ? '' : 'cancel-button'} type="submit" onClick={this.submit} value="Sign up"/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        )
    }
}