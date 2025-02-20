"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useSidebar } from "../contexts/side-bar-context"
import logo from '../../../public/images/logo.png'
import "./nav.css"
import { useThemeDark } from "../contexts/theme-toggler-context"

let Nav =  ()  => {

    const { toggleSidebar } = useSidebar();
    const { toggleTheme } = useThemeDark();

    return (
        <div className="nav">
            <i onClick={toggleSidebar} className='bx bx-menu'>
            {/* &times; */}
            </i>
            
            <form action="#">
                <div className="form-input">
                    <input type="search" placeholder="Search..." />
                    <button className="search-btn" type="submit">
                        <i className='bx bx-search'></i>
                    </button>
                </div>
            </form>

            <input type="checkbox" id="theme-toggle" onChange={toggleTheme} hidden />
            <label htmlFor="theme-toggle" className="theme-toggle"></label>
            

            <Link href="#" className="notif">
                <i className='bx bx-bell'></i>
                <span className="count">12</span>
            </Link>

            {/* Big Logo */}
            <Link href="#" className="profile">
                <Image src={logo} alt="Asr Programming group" />
            </Link>
        </div>
    )
}

export default Nav