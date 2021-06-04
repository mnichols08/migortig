import React from 'react'

import SignIn from '../../components/sign-in/'
import SignUp from '../../components/sign-up/'

import './styles.scss'

const AuthPage = () => (
    <div className="auth">
        <SignIn />
        <SignUp />
    </div>
)

export default AuthPage