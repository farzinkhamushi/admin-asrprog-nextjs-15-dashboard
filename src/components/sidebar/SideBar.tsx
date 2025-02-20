"use client"
import Link from "next/link"
import { useState } from "react"
import "./sidebar.css"
import { useSidebar } from "../contexts/side-bar-context"


let SideBar = () => {
    
    let data = [
        {
            id: 1,
            isActive : 'false',
            title: 'Dashboard',
            i:'bx bxs-dashboard',
            href: ''
        },
        {
            id: 2,
            isActive : 'false',
            title: 'Shop',
            i:'bx bx-store-alt',
            href: ''
        },
        {
            id: 3,
            isActive : 'false',
            title: 'Analytics',
            i:'bx bx-analyse',
            href: ''
        },
        {
            id: 4,
            isActive : 'false',
            title: 'Tickets',
            i:'bx bx-message-square-dots',
            href: ''
        },
        {
            id: 5,
            isActive : 'false',
            title: 'Users',
            i:'bx bx-group',
            href: ''
        },
        {
            id: 6,
            isActive : 'false',
            title: 'Settings',
            i:'bx bx-cog',
            href: ''
            
        },
    ];

    //bx bx-log-out-circle        Logout

    let [list_data,setListData] = useState(data);
    let activator = (id:number) => {
        setListData(
            list_data.map((li) => 
                li.id == id ? {...li,isActive:"true"} : {...li,isActive:"false"}
            )
        );
    };

    
        const { isSidebarOpen } =  useSidebar();


    return (

        <div className={`sidebar ${isSidebarOpen ? "" : "close"}`}>
            <Link href="#" className="logo">
                <i className='bx bx-code-alt'></i>
                <div className="logo-name"><span>Asmr</span>Prog</div>
            </Link>
            <ul className="side-menu">
                {list_data.map((li)=>(
                    <li key={li.id} className={`${li.isActive === "true" ? "active" : "" }`} >
                        <Link onClick={ () => activator(li.id)} href={li.href}>
                            <i className={li.i}></i>{li.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className="side-menu">
                <li>
                    <Link href="#" className="logout">
                        <i className='bx bx-log-out-circle'></i>
                        Logout
                    </Link>
                </li>
            </ul>
        </div>
    )
}


export default SideBar