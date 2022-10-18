import Menu from './Menu';
import './MenuBar.css';

function MenuBar(){
    return (
        <div className="MenuBar-main">
            <Menu name="Home" icon="fas fa-home" />
            <Menu name="Watch" icon="fab fa-youtube" count="4" />
            <Menu name="Groups" icon="fas fa-users" count="8" />
            <Menu name="Games" icon="fas fa-chess-board" />
        </div>
    );
}

export default MenuBar;