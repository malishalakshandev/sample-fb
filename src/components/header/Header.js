import Button from '../core/button/Button';
import Logo from '../core/logo/Logo';
import MenuBar from '../core/menubar/MenuBar';
import Profile from '../core/profile/Profile';
import SearchBox from '../core/searchbox/SearchBox';
import './Header.css';

function Header(){
    return (
        <div className="Header-main">
            <div class="row">
                <div class="col-md-3">
                    <Logo/>
                    <SearchBox/>
                </div>
                <div class="col-md-6">
                    <MenuBar/>
                </div>
                <div class="col-md-3">
                    <Profile name="Malisha"/>
                    <Button icon="fa fa-plus"/>
                    <Button icon="fa fa-comment" count="5"/>
                    <Button icon="fa fa-bell" count="12"/>
                    <Button icon="fa fa-caret-down"/>
                </div>
            </div>
        </div>
    );
}

export default Header;