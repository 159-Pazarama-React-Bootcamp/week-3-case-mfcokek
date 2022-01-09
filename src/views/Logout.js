import React from 'react'

export default function Logout() {
    // var olan giriş işlemini sonlandırır
    localStorage.removeItem("@user_email")
    window.location = "/"
    return null
}
