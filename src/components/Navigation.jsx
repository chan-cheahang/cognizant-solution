import { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
    state = {
        openFeatures: false,
        openCompany: false,
        openNavigation: false
    }

    toggleFeatures = () => {
        if (this.state.openCompany) this.setState({ openCompany: false });
        this.setState({ openFeatures: !this.state.openFeatures });
    }

    toggleCompany = () => {
        if (this.state.openFeatures) this.setState({ openFeatures: false });
        this.setState({ openCompany: !this.state.openCompany });
    }

    toggleNavigation = () => {
        this.setState({ openNavigation: !this.state.openNavigation });
    }

    render() {
        return (
            <>
                <section>
                    <nav className='navigation'>
                        <div className='navigation__logo'>
                            <img src='/images/logo.svg' alt='snap logo' />
                        </div>

                        <div className={`navigation__container ${this.state.openNavigation && 'active'}`}>
                            <div className='btn-close'>
                                <img src='images/icon-close-menu.svg' alt='close mobile navigation icon' onClick={this.toggleNavigation} />
                            </div>

                            <ul className='navigation__list'>
                                <li className='navigation__secondary' tabIndex='1'>
                                    <a href='#' onClick={this.toggleFeatures}>Features <img className='chevron' src='images/icon-arrow-down.svg' alt='chevron down icon' /></a>
                                    <ul className={`navigation__secondary_features ${this.state.openFeatures && 'active'}`}>
                                        <li>
                                            <a href='#'><img src='images/icon-todo.svg' alt='To do list' />Todo List</a>
                                        </li>
                                        <li>
                                            <a href='#'><img src='images/icon-calendar.svg' alt='Calendar' />Calendar</a>
                                        </li>
                                        <li>
                                            <a href='#'><img src='images/icon-reminders.svg' alt='Reminders' />Reminders</a>
                                        </li>
                                        <li>
                                            <a href='#'><img src='images/icon-planning.svg' alt='Planning' />Planning</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className='navigation__secondary' tabIndex='2'>
                                    <a href='#' onClick={this.toggleCompany}>Company <img className='chevron' src='images/icon-arrow-down.svg' alt='chevron down icon' /></a>
                                    <ul className={`navigation__secondary_company ${this.state.openCompany && 'active'}`}>
                                        <li><a href='#'>History</a></li>
                                        <li><a href='#'>Our Team</a></li>
                                        <li><a href='#'>Blog</a></li>
                                    </ul>
                                </li>
                                <li tabIndex='3'><a href='#'>Careers</a></li>
                                <li tabIndex='4'><a href='#'>About</a></li>
                            </ul>

                            <div className='navigation__auth'>
                                <a href='#'>Login</a>
                                <a href='#'>Register</a>
                            </div>
                        </div>

                        <div className='btn-menu'>
                            <img src='images/icon-menu.svg' alt='open mobile navigation icon' onClick={this.toggleNavigation} />
                        </div>
                    </nav>
                </section>

                <div className={`overlay ${this.state.openNavigation && 'active'}`}></div>
            </>
        )
    }
}

export default Navigation;