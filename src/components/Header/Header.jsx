import './Header.scss'
import MainLogo from '../../assets/images/logo.svg'
const Header = () => {

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
        </header>
    )
}

export default Header