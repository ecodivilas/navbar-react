import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(true)
    
    function handleToggle () {
        setToggleNav(prev => !prev)
    }

    return (
    <>
        <div className="w-full relative bg-blue-950 text-blue-50 h-12 flex justify-between p-3 shadow-xl">Romeo <button className="md:hidden" onClick={handleToggle}><GiHamburgerMenu size={22} /></button></div>
        {toggleNav && <div className="w-full bg-blue-900 h-screen text-white">
            <ul className="p-3 md:absolute md:top-0 md:left-0 flex flex-col md:flex-row justify-start md:justify-between gap-6 md:px-[20rem] w-full h-full"> 
                <li>Home</li>
                <li>Store</li>
                <li>User</li>
                <li>Settings</li>
            </ul>
        </div>}
    </>
    )
}

// Mobile-first development

export default Navbar