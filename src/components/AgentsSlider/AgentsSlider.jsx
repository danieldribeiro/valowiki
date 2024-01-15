import { Component } from "react";
import Slider from "react-slick";
import './AgentSlides.scss'

export default class VerticalMode extends Component {

    render() {
        const settings = {
            className: 'slider',
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            draggable: true,
            centerCurrentSlide: true,
            vertical: true,
            verticalSwiping: true,
            arrows: false,
            pauseOnFocus: true,
        }

        return (
        <div>
            <Slider {...settings} is="slider">
            <div className="image-container">
                <img src="https://tiermaker.com/images/chart/chart/valorant-agents-up-to-kay-o-june-2021-1157801/astrapng.png" alt="" />
            </div>
            <div className="image-container">
                <img src="https://tiermaker.com/images/chart/chart/valorant-agents-up-to-kay-o-june-2021-1157801/breachpng.png" alt="" />
            </div>
            <div className="image-container">
                <img src="https://tiermaker.com/images/chart/chart/valorant-agents-up-to-kay-o-june-2021-1157801/brimpng.png" alt="" />
            </div>
            <div className="image-container">
                <img src="https://tiermaker.com/images/chart/chart/valorant-agents-up-to-kay-o-june-2021-1157801/cyphepng.png" alt="" />
            </div>
            <div className="image-container">
                <img src="https://tiermaker.com/images/chart/chart/valorant-agents-up-to-kay-o-june-2021-1157801/jettpng.png" alt="" />
            </div>
            <div className="image-container">
                <img src="https://tiermaker.com/images/chart/chart/valorant-agents-up-to-kay-o-june-2021-1157801/kayopng.png" alt="" />
            </div>
            <div className="image-container">
                <img src="https://tiermaker.com/images/chart/chart/valorant-agents-up-to-kay-o-june-2021-1157801/kjpng.png" alt="" />
            </div>
            <div className="image-container">
                <img src="https://tiermaker.com/images/chart/chart/valorant-agents-up-to-kay-o-june-2021-1157801/omenpng.png" alt="" />
            </div>
            <div className="image-container">
                <img src="https://tiermaker.com/images/chart/chart/valorant-agents-up-to-kay-o-june-2021-1157801/phopng.png" alt="" />
            </div>
            <div className="image-container">
                <img src="https://tiermaker.com/images/chart/chart/valorant-agents-up-to-kay-o-june-2021-1157801/razepng.png" alt="" />
            </div>
            <div className="image-container">
                <img src="https://tiermaker.com/images/chart/chart/valorant-agents-up-to-kay-o-june-2021-1157801/reynapng.png" alt="" />
            </div>
            <div className="image-container">
                <img src="https://tiermaker.com/images/chart/chart/valorant-agents-up-to-kay-o-june-2021-1157801/sagepng.png" alt="" />
            </div>
            <div className="image-container">
                <img src="https://tiermaker.com/images/chart/chart/valorant-agents-up-to-kay-o-june-2021-1157801/skyepng.png" alt="" />
            </div>
            <div className="image-container">
                <img src="https://tiermaker.com/images/chart/chart/valorant-agents-up-to-kay-o-june-2021-1157801/spvapng.png" alt="" />
            </div>
            <div className="image-container">
                <img src="https://tiermaker.com/images/chart/chart/valorant-agents-up-to-kay-o-june-2021-1157801/viperpng.png" alt="" />
            </div>
            <div className="image-container">
                <img src="https://tiermaker.com/images/chart/chart/valorant-agents-up-to-kay-o-june-2021-1157801/yorupng.png" alt="" />
            </div>
            <div className="image-container">
                <img src="https://tiermaker.com/images/chart/chart/valorant-agents-up-to-kay-o-june-2021-1157801/zz1643674990chamberpng.png" alt="" />
            </div>
            <div className="image-container">
                <img src="https://tiermaker.com/images/chart/chart/valorant-agents-up-to-kay-o-june-2021-1157801/zz1646138299neonpng.png" alt="" />
            </div>
            </Slider>
        </div>
        );
    }
}