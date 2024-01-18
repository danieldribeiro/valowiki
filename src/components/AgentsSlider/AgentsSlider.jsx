/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import Slider from "react-slick";
import './AgentsSlider.scss';

const VerticalSwipeToSlide = ({ agentData, onAgentClick }) => {
    const sliderRef = useRef(null);

    useEffect(() => {
        // Seleciona o primeiro agente ao montar o componente
        if (agentData.length > 0) {
            const firstAgent = agentData[0];
            onAgentClick(firstAgent);
            styleAgent(firstAgent);
        }
    }, [agentData, onAgentClick]);

    const changeTextColor = () => {
        const agentNames = document.querySelectorAll('.agent-name');

        for (const otherAgent of agentNames) {
            otherAgent.style.color = '';
            otherAgent.style.marginLeft = '0';
        }
    };

    const styleAgent = (agent) => {
        const agentElement = document.querySelector(`.agent-name[data-uuid="${agent.uuid}"]`);
        if (agentElement) {
            agentElement.style.color = '#ce5f4b';
            agentElement.style.marginLeft = '20px';
        }
    };

    const handleAgentClick = (e, agent) => {
        changeTextColor();
        e.target.style.color = '#ce5f4b';
        e.target.style.marginLeft = '20px';
        onAgentClick(agent);
    };

    let count = 0
    const setAgentNumber = () => {
        count += 1
        return count
    }

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
    };

    return (
        <div>
            <Slider {...settings} ref={sliderRef}>
                {agentData.map((agent) => (
                    <div key={agent.uuid} className="agent-name-container">
                        <span className="agent-number">{setAgentNumber()}</span>
                        <h2
                            className="agent-name"
                            data-uuid={agent.uuid}
                            onClick={(e) => handleAgentClick(e, agent)}
                        >
                            {agent.displayName}
                        </h2>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default VerticalSwipeToSlide;
