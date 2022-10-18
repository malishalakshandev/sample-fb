import './Profile.css';
import image from './profile.png';

function Profile(props){
    return(
        <div className="Profile-main">
            <img src={image} className="Profile-photo"/>
            <span>{props.name}</span>
        </div>
    );
}

export default Profile;