import React, { useState } from 'react'
import axios from 'axios'

function Login() {
    //inputtan gelen değerler set edilir
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    //api olarak internetten hazır api kullanıldı
    const onSubmitForm = (e) => {
        e.preventDefault()
        axios.post("https://wizardglass.backendless.app/api/users/login", {
            "login": email,
            "password": password
        }).then(() => {
            //giriş yapma başarılı ise girişi localstorage da tutuyoruz
            window.localStorage.setItem("@user_email", email)
            window.location.href = "/dashboard"
        }).catch(() => {
            alert("Giriş bilgileri hatalı")
        })
    }

    return (
        <div className='allPage'>
            <div className="container">
                <div className="left">

                    <form onSubmit={onSubmitForm} class="form">
                        <p className='logo'>Your logo</p>
                        <p className='login-register'>Login</p>
                        <p className='input-text'>Email</p>
                        <input type="email" placeholder='username@gmail.com' value={email} onChange={e => setEmail(e.target.value)} className='input' />
                        <p className='input-text'>Password</p>
                        <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} className='input' />
                        <a href="" className='forget-password'>Forget Password?</a>
                        <button onClick={onSubmitForm} className='login-register-btn'>Log in</button>
                        <p className='cont-text'>or continue with</p>
                    </form>
                    <div className='log-with'>
                        <div className='log-card'>
                            <button className='google'></button>
                        </div>
                        <div className='log-card'>
                            <button className='github'></button>
                        </div>
                        <div className='log-card'>
                            <button className='facebook'></button>
                        </div>
                    </div>
                    <div className='register'>
                        <p className='account-yet'>Don’t have an account yet?</p><a href="/register" className='register-for-free'>Register for free</a>
                    </div>


                </div>
                <div className="right"></div>
            </div>
        </div>
    )
}

export default Login
