'use client'
import { useEffect } from "react"

export default function SWRegister() {
    useEffect(() => {
        if('serviceWorker' in navigator) {
            navigator.serviceWorker
            .register('serviceWorker.js')
            .then((registration) => console.log('scope is: ', registration.scope))
        }
    }, [])

    return (
        <div></div>
    )
}