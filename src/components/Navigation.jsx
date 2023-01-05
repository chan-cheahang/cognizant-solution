import React, { useState } from "react";
import './Navigation.css';

const Navigation = () => {
    const [openFeatures, setOpenFeatures] = useState(false);
    const [openCompany, setOpenCompany] = useState(false);
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleFeatures = () => {
        if (openCompany) setOpenCompany(false);
        setOpenFeatures(!openFeatures);
    }

    const toggleCompany = () => {
        if (openFeatures) setOpenFeatures(false);
        setOpenCompany(!openCompany);
    }

    const toggleNavigation = () => {
        setOpenNavigation(!openNavigation);
    }

    return (
        <>
            <section>
                <nav className='navigation'>
                    <div className='navigation__logo'>
                        <img src='/images/logo.svg' alt='snap logo' />
                    </div>

                    <div className={`navigation__container ${openNavigation && 'active'}`}>
                        <div className='btn-close'>
                            <img src='images/icon-close-menu.svg'
                                alt='close mobile navigation icon'
                                onClick={toggleNavigation}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter') toggleNavigation()
                                }}
                            />
                        </div>

                        <ul className='navigation__list'>
                            <li className='navigation__secondary'
                                tabIndex='1'
                                onClick={toggleFeatures}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter') toggleFeatures()
                                }}>
                                <a href='#'>Features <img className='chevron' src='images/icon-arrow-down.svg' alt='chevron down icon' /></a>
                                <ul className={`navigation__secondary_features ${openFeatures && 'active'}`}>
                                    <li>
                                        <a href='#' tabIndex={openFeatures ? 1.1 : -1}><img src='images/icon-todo.svg' alt='To do list' /><span>Todo List</span></a>
                                    </li>
                                    <li>
                                        <a href='#' tabIndex={openFeatures ? 1.2 : -1}><img src='images/icon-calendar.svg' alt='Calendar' /><span>Calendar</span></a>
                                    </li>
                                    <li>
                                        <a href='#' tabIndex={openFeatures ? 1.3 : -1}><img src='images/icon-reminders.svg' alt='Reminders' /><span>Reminders</span></a>
                                    </li>
                                    <li>
                                        <a href='#' tabIndex={openFeatures ? 1.4 : -1}><img src='images/icon-planning.svg' alt='Planning' /><span>Planning</span></a>
                                    </li>
                                </ul>
                            </li>
                            <li className='navigation__secondary'
                                tabIndex='2'
                                onClick={toggleCompany}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter') toggleCompany()
                                }}>
                                <a href='#'>Company <img className='chevron' src='images/icon-arrow-down.svg' alt='chevron down icon' /></a>
                                <ul className={`navigation__secondary_company ${openCompany && 'active'}`}>
                                    <li><a href='#' tabIndex={openCompany ? 2.1 : -1}><span>History</span></a></li>
                                    <li><a href='#' tabIndex={openCompany ? 2.2 : -1}><span>Our Team</span></a></li>
                                    <li><a href='#' tabIndex={openCompany ? 2.3 : -1}><span>Blog</span></a></li>
                                </ul>
                            </li>
                            <li><a href='#' tabIndex='3'>Careers</a></li>
                            <li><a href='#' tabIndex='4'>About</a></li>
                        </ul>

                        <div className='navigation__auth'>
                            <a href='#' tabindex='5'>Login</a>
                            <a href='#' tabindex='6'>Register</a>
                        </div>
                    </div>

                    <div className='btn-menu'>
                        <img src='images/icon-menu.svg' alt='open mobile navigation icon' onClick={toggleNavigation} />
                    </div>
                </nav>
            </section>

            <div className={`overlay ${openNavigation && 'active'}`}></div>
        </>
    );
}

export default Navigation;