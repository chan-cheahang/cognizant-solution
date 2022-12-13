import { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
    state = {
        openNavigation: false
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
                                <img src='images/icon-close-menu.svg' alt='' onClick={this.toggleNavigation} />
                            </div>

                            <ul className='navigation__list'>
                                <li className='navigation__secondary' tabIndex='1'>
                                    <a href='#'>Features <img className='chevron' src='images/icon-arrow-down.svg' alt='' /></a>
                                </li>
                                <li className='navigation__secondary' tabIndex='2'>
                                    <a href='#'>Company <img className='chevron' src='images/icon-arrow-down.svg' alt='' /></a>
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
                            <img src='images/icon-menu.svg' alt='' onClick={this.toggleNavigation} />
                        </div>
                    </nav>
                </section>

                <div className={`overlay ${this.state.openNavigation && 'active'}`}></div>
            </>
        )
    }
}

export default Navigation;