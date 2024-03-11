import './Header.scss'
import MainLogo from '../../assets/images/logo.svg'
import { useState } from 'react'
import MenuBtn from '../../assets/images/icon-menu.svg'
import Menu from './Menu'
const Header = () => {
    const [menuState, setMenuState] = useState(false)
    const toggleMenu = () => {
        setMenuState(!menuState)
    }

    const Nav = [
        "Home",
        "New",
        "Popular",
        "Trending",
        "Categories",
    ]

    return (
        <header>
            <a>
                <img src={MainLogo}/>
            </a>
            <nav>
                {
                    Nav.map((current, index) => {
                        return (
                        <a className="item" key={index}>
                            {current}
                        </a>
                        )
                    })
                }
            </nav>
            <div className='menuBtn' onClick={() => toggleMenu()}>
                <img src={MenuBtn} alt='mySvgImage' />
            </div>
            <Menu nav={Nav} isOpen={menuState} toggleMenu={toggleMenu}/>
        </header>
    )
}

export default Header
