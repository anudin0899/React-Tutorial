import React, { useState } from 'react'
import Style from "./index.module.css"
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { CiGlobe } from "react-icons/ci";
import { useTheme } from '../../Context/ThemeContext/ThemeContext';
import LanguageSelector from '../Language_Selector/Lang_Selector';

const Header = () => {

    const [Mobile, setMobile] = useState(false);
    const [LangSelector, setLangSelector] = useState(false);

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={Style.Header}>
            <div className={Style.container}>
                <div className={Style.wrapper}>
                    <div className={Style.logo}>
                        <h1 className='logo'>Demo</h1>
                        {/* <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netfix" /> */}
                    </div>
                    <ul className={Mobile ? Style.navMenu_list : Style.flexSB} >
                        {Mobile && (<div className={Style.logo}>
                            <h1 className='logo'>Demo</h1>
                        </div>)}
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/stepper'>Stepper</Link></li>
                        <li><Link to='/products'>Pagination</Link></li>
                        <li><Link to='/otp'>Otp</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                    <button className={Style.toggles} onClick={() => setMobile(!Mobile)}>
                        {Mobile ? <span><FaTimes /></span> : <span><FaBars /></span>}
                    </button>

                    <div className={Style.account}>
                        <div className={Style.accountItems}>
                            <i> <BiSearch /> </i>
                            {/* <i> <AiTwotoneBell /> </i> */}
                            <i>
                                <CiGlobe onClick={() => setLangSelector(!LangSelector)} />
                                {LangSelector && <LanguageSelector />}
                            </i>
                            <i> <AiOutlineUser /> </i>
                        </div>
                        <div className={Style.switch}>
                            <label className={Style.switchLabel}>
                                <input
                                    type="checkbox"
                                    onChange={toggleTheme}
                                    checked={theme === "dark"}
                                />
                                <span className={`${Style.slider} ${Style.round}`}></span>
                            </label>
                        </div>
                        {/* <button >Dark Mode</button> */}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Header