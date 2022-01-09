import React, {useState} from 'react'
import axios from 'axios'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const onSubmitForm = (e) => {
        e.preventDefault()
        if(password !== password2 || !password){
            alert("parolalar eşleşmiyor")
            return
        }
        axios.post("https://wizardglass.backendless.app/api/users/register", {
            "email" : email,  
            "password" : password  
        }).then(() => {
            window.localStorage.setItem("@user_email", email)
            window.location.href = "/dashboard"
        }).catch(() => {
            alert("Kullanıcı oluşturulamadı")
        })
    } 

    return (
        <div className='allPage'>
            <div className="container">
                <div className="left">
                    <form onSubmit={onSubmitForm} class="form">
                    <p className='logo'>Your logo</p>
                        <p className='login-register'>Register</p>
                        <p className='input-text'>Email</p>
                        <input required type="email" placeholder='username@gmail.com' value={email} onChange={e => setEmail(e.target.value)} className='input'/>
                        <p className='input-text'>Password</p>
                        <input required type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} className='input'/>
                        <p className='input-text'>Password Again</p>
                        <input required type="password" placeholder='Password again' value={password2} onChange={e => setPassword2(e.target.value)} className='input'/>
                        <button onClick={onSubmitForm} className='login-register-btn'>Register</button>
                    </form>
                    <div className='register'>
                        <p className='account-yet'>Do you have an account?</p><a href="/login" className='register-for-free'>Login</a>
                    </div>
                </div>
                <div className="right"></div>
            </div>
        </div>
    )
}

export default Login
