import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = (props) => {
    const [selectedTheme, setSelectedTheme] = useState("light");
    let bgColor = props.mode === "light" ? "bg-gray-200" : "bg-gray-700";
    let color = props.mode === "light" ? "text-black" : "text-white";
    let borderColor = props.mode === "light" ? "border-transparent" : "border-white";

    const toggleThemeLight = () => {
        setSelectedTheme("light");
        props.toggleThemeLight();
    }

    const toggleThemeBlue = () => {
        setSelectedTheme("blue");
        props.toggleThemeBlue();
    }

    const toggleThemeRed = () => {
        setSelectedTheme("red");
        props.toggleThemeRed();
    }

    const toggleThemeGreen = () => {
        setSelectedTheme("green");
        props.toggleThemeGreen();
    }

    return (
        <>
            <nav className={`${bgColor} ${color} py-3 px-7`}>
                <ul className='flex space-x-5 items-center justify-center'>
                    <Link to="/" className='text-2xl mr-auto flex space-x-2'>
                        <img src="/src/assets/favicon.png" alt="Logo" className='rounded-md w-8 h-8'/>
                        <span>{props.title}</span>
                    </Link>
                    <Link to="/" className='hover:text-yellow-600'>Home</Link>
                    <Link to="/about" className='hover:text-yellow-600'>About</Link>
                    <button className={`rounded-full w-8 h-8 bg-white border-2 border-transparent ${selectedTheme === "light" ? "scale-125 transition-all border-yellow-600" : ""}`} onClick={toggleThemeLight}></button>
                    <button className={`rounded-full w-8 h-8 border-2 bg-[#042743] ${borderColor} ${selectedTheme === "blue" ? "scale-125 transition-all border-yellow-600" : ""}`} onClick={toggleThemeBlue}></button>
                    <button className={`rounded-full w-8 h-8 border-2 bg-[#25080c] ${borderColor} ${selectedTheme === "red" ? "scale-125 transition-all border-yellow-600" : ""}`} onClick={toggleThemeRed}></button>
                    <button className={`rounded-full w-8 h-8 border-2 bg-[#112909] ${borderColor} ${selectedTheme === "green" ? "scale-125 transition-all border-yellow-600" : ""}`} onClick={toggleThemeGreen}></button>
                </ul>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    toggleThemeBlue: PropTypes.func.isRequired,
    toggleThemeRed: PropTypes.func.isRequired,
    toggleThemeGreen: PropTypes.func.isRequired,
    toggleThemeLight: PropTypes.func.isRequired,
    mode: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: "Title",
    toggleThemeBlue: () => { },
    toggleThemeRed: () => { },
    toggleThemeGreen: () => { },
    toggleThemeLight: () => { },
    mode: "light",
}

export default Navbar