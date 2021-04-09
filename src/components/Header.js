import backgroundImage from './images/bg-header-desktop.svg';

const Header = () => {
    return (
        <div className="Header">
            <img className="header-img" src={backgroundImage} alt='headerImage'></img>
        </div>
    )
}

export default Header
