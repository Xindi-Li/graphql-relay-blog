import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import CreateUserMutation from '../mutations/CreateUserMutation';
import LoginUserMutation from '../mutations/LoginUserMutation';

const styles = {
    inputText: {
        display: 'block',
        fontSize: '20px',
        marginBottom: '10px',
    },
    inputButton: {
        display: 'block',
        padding: 10,
        background: 'white',
        border: '2px solid indianred',
        color: 'indianred',
        borderRadius: 6,
        marginBottom: '10px',
    },
};

class Login extends Component {
    state = {
        login: true,
        username: '',
        password: '',
        fullname: '',
    };

    confirm = () => {
        const { login, username, password, fullname } = this.state;
        if (login) {
            LoginUserMutation(username, password, user => {
                if (!user) {
                    alert('wrong user');
                    return;
                }
                localStorage.setItem('User', JSON.stringify(user));
                this.props.history.push('/');
            });
        } else {
            CreateUserMutation(username, password, fullname, user => {
                localStorage.setItem('User', JSON.stringify(user));
                this.props.history.push('/');
            });
        }
    };

    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <h4>{this.state.login ? 'Login' : 'Sign Up'}</h4>
                <div>
                    <input
                        style={styles.inputText}
                        value={this.state.username}
                        onChange={e => {
                            this.setState({ username: e.target.value });
                        }}
                        type="text"
                        placeholder="Username"
                    />
                    <input
                        style={styles.inputText}
                        value={this.state.password}
                        onChange={e => {
                            this.setState({ password: e.target.value });
                        }}
                        type="password"
                        placeholder="Password"
                    />
                    {!this.state.login && (
                        <input
                            style={styles.inputText}
                            value={this.state.fullname}
                            onChange={e => {
                                this.setState({ fullname: e.target.value });
                            }}
                            type="text"
                            placeholder="Fullname"
                        />
                    )}
                </div>
                <div>
                    <button
                        style={styles.inputButton}
                        onClick={() => this.confirm()}
                    >
                        {this.state.login ? 'Log in' : 'Sign up'}
                    </button>
                    <button
                        style={styles.inputButton}
                        onClick={() =>
                            this.setState({ login: !this.state.login })
                        }
                    >
                        {this.state.login
                            ? 'Need to create an account?'
                            : 'Already have an account?'}
                    </button>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);
