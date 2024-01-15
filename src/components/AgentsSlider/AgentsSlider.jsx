import { Component, createRef  } from "react";
import Slider from "react-slick";
import './AgentsSlider.scss'

export default class VerticalSwipeToSlide extends Component {
    constructor(props) {
        super(props);

        this.sliderRef = createRef();
        this.endpoint = 'https://valorant-api.com/v1/agents?isPlayableCharacter=true';

        this.state = {
            agentsData: [],
        };
    }

    componentDidMount() {
        fetch(this.endpoint)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro na requisição: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                this.setState({ agentsData: data.data });
                console.log(data.data)
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    }    

    handleSlideClick = (e) => {
        console.log(e)
    }

    render() {
        const { agentsData } = this.state;

        const settings = {
            className: 'slider',
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            swipeToSlide: true,
            arrows: false,
        }

        return (
        <div>
            <Slider {...settings}>
                {agentsData.map((agent, e) => (
                    <div key={agent.uuid} className="image-container" onClick={() => this.handleSlideClick(e)}>
                        <h2>{agent.displayName}</h2>
                    </div>
                ))}
            </Slider>
        </div>
        )
    }
}