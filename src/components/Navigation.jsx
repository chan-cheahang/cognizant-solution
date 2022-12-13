import { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <section>
                <nav className='navigation'>
                    <div className='navigation__logo'>
                        <img src='/images/logo.svg' alt='snap logo' />
                    </div>

                    <div className='navigation__container'>
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
                </nav>
            </section>
        )
    }
}

export default Navigation;