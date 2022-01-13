import React from 'react'

export default function Dashboard() {
    // var olan giriş işlemi localde olduğu için isim çekilir 
    const user_email = localStorage.getItem("@user_email")
    return (
        <div>
            <p>Hoşgeldin {user_email}</p>
            <a href="/logout">çıkış yap</a>
        </div>
    )
}
