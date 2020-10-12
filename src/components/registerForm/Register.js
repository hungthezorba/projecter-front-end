import React from 'react'
import './Register.css'

export default class Register extends React.Component {

    render() {
        return (
            <div class="form-container">
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
                    <div id="name-section" class="row-custom">
                        <div id="first-name-section" class="row-custom" class="col">
                            <div class="form-label">
                                <label for="first-name">First name</label>
                            </div>
                            <div>
                                <input type="text" class="form-input" id="first-name"/>
                            </div>
                        </div>
                        <div id="last-name-section" class="row-custom" class="col">
                            <div class="form-label">
                                <label for="last-name">Last name</label>
                            </div>
                            <div>
                                <input type="text" class="form-input" id="last-name"/>
                            </div>
                        </div>
                    </div>
                    <div id="email-section" class="row-custom">
                        <div class="form-label">
                            <label for="email">Email address</label>
                        </div>
                        <div>
                            <input type="text" class="form-input" id="email"/>
                        </div>
                    </div>

                </div>
                <div class="form-footer">
                    <div id="check-section">
                        <div class="check-box-custom">
                            <label class="check-label" for="term-condition">
                                I agree to the terms and conditions
                                <input type="checkbox" id="term-condition"/>
                                <span class="checkmark"></span>
                            </label>

                        </div>
                        <div class="check-box-custom">
                            <label class="check-label" for="email-updates">
                                Receive email updates from TenderMate
                                <input type="checkbox" id="email-updates"/>
                                <span class="checkmark"></span>
                            </label>

                        </div>
                    </div>
                    <div id="submit-section">
                        <div>
                            <input type="submit" value="Sign up"/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        )
    }
}