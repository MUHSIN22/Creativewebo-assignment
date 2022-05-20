import React, { useEffect, useRef } from 'react'
import PrimaryButton from '../utils/primaryButton/PrimaryButton'
import './Header.scss'

export default function Header() {
    const menuRef = useRef(null)
    const headerRef = useRef(null)

    const handleHamburger = (event) => {
        event.target.classList.toggle("hamburger--active")
        menuRef.current.classList.toggle("menu--active")
    } 

    useEffect(() => {
        window.addEventListener("scroll",() => {
            if(window.scrollY > 100){
                headerRef.current.classList.add("main-header--active")
            }else{
                let activeHeader = document.querySelector(".main-header--active")
                if(activeHeader){
                    headerRef.current.classList.remove("main-header--active")
                }
            }
        })
    },[])
  return (
    <header className="main-header" ref={headerRef}>
        <h1 className="logo">Logo</h1>
        <ul className="links" ref={menuRef}>
            <li className="link">Fair info</li>
            <li className="link">Exhibitor</li>
            <li className="link">Visitors</li>
            <li className="link">Press</li>
            <li className="link">Travel Info</li>
            <li className="link">
                <PrimaryButton>Register Now</PrimaryButton>
            </li>
        </ul>
        <div className="hamburger" onClick={handleHamburger}>
            <div className="h-line"></div>
            <div className="h-line"></div>
            <div className="h-line"></div>
        </div>
    </header>
  )
}
