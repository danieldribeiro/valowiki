/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './AgentsImage.scss';

const AgentsImage = ({ selectedAgent }) => {

    const changeAstraImage = () => {
        const image = document.querySelector('img')

        if(image['alt'] === 'Astra'){
            console.log('Astra')
        }
    }

    return (
        <div className="image-container">
            {selectedAgent && (
                <img src={selectedAgent.fullPortraitV2} className="agent-image" alt={selectedAgent.displayName} onChange={changeAstraImage}/>
            )}
        </div>
    );
};

export default AgentsImage;