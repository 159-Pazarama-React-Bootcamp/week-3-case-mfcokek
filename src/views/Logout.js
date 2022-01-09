import React from 'react'

export default function Logout() {
    localStorage.removeItem("@user_email")
    window.location = "/"
    return null
}