import { useState } from "react";
import "./Carousel.scss";
import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";

const Carousel = ({imgArr}) => {
    
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        if (counter === imgArr.length -1) {
            setCounter(0);
        } else {
            setCounter(counter + 1);
        }
    }

    const handleDecrement = () => {
        if (counter === 0) {
            setCounter(imgArr.length - 1);
        } else {
            setCounter(counter - 1);
        }
    }


    return (
        <div className="carousel">
            <img 
                className="carousel__arrow" 
                src={leftArrow} 
                alt="left arrow"
                onClick={handleDecrement}/>
            <img 
                className="carousel__image" 
                src="" 
                alt="my picture"/>
            <img 
                className="carousel__arrow" 
                src={rightArrow} 
                alt="right arrow"
                onClick={handleIncrement}/>
        </div>
    )
}

export default Carousel;