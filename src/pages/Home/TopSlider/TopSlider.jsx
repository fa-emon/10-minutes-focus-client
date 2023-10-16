import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../../assets/TopSlider/1.jpg';
import image2 from '../../../assets/TopSlider/2.jpg';
import image3 from '../../../assets/TopSlider/3.jpg';
import image4 from '../../../assets/TopSlider/4.jpg';
import image5 from '../../../assets/TopSlider/5.jpg';
import image6 from '../../../assets/TopSlider/6.jpg';


const TopSlider = () => {
    return (
        <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} stopOnHover={true} showStatus={false} showArrows={true}>
            <div>
                <img src={image1} className="w-full h-[80vh] object-cover rounded-md brightness-90" alt="Slide 1" />
            </div>
            <div>
                <img src={image2} className="w-full h-[80vh] object-cover rounded-md brightness-90" alt="Slide 2" />
            </div>
            <div>
                <img src={image3} className="w-full h-[80vh] object-cover rounded-md brightness-90" alt="Slide 3" />
            </div>
            <div>
                <img src={image4} className="w-full h-[80vh] object-cover rounded-md brightness-90" alt="Slide 4" />
            </div>
            <div>
                <img src={image5} className="w-full h-[80vh] object-cover rounded-md brightness-90" alt="Slide 5" />
            </div>
            <div>
                <img src={image6} className="w-full h-[80vh] object-cover rounded-md brightness-90" alt="Slide 6" />
            </div>
        </Carousel>
    );
};

export default TopSlider;
