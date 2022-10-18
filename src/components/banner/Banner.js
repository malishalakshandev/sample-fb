import Cover from '../core/cover/Cover';
import PageHeader from '../core/pageheader/PageHeader';
import './Banner.css';
import image from './image.jpg';

function Banner(){
    return(
        <div className="Banner-main">
            <div className="container Banner-container">
                <Cover image="banner.png"/>
            </div>
            <PageHeader image={image} name="Industrail Master" username="@industrialmaster" 
            category="School" buttonText="Contact Us" link="industrailmaster.com"/>
        </div>
    );
}

export default Banner;