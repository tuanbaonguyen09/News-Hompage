import { createPortal } from "react-dom";
import './Header.scss'
import CloseMenu from '../../assets/images/icon-menu-close.svg'

const Menu = ({nav, isOpen, toggleMenu}) => {
    return createPortal(
        <aside className={`menu ${isOpen && 'active'}`}>
            <nav className="mobileNav">
                {nav.map( (current, index) => {
                    return (
                        <a className="item" key={index}>
                            {current}
                        </a>
                    )
                })}
            </nav>

            <div className="closeBtn" onClick={() => toggleMenu()}>
                <img src={CloseMenu} alt="close menu"/>
            </div>

        </aside>, document.body
    )
}


export default Menu