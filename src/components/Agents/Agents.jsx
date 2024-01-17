import { useState, useEffect } from "react";
import './Agents.scss';
import CharacterSlider from '../AgentsSlider/AgentsSlider';
import AgentsImage from '../AgentsImage/AgentsImage';

const Agents = () => {
    const endpoint = 'https://valorant-api.com/v1/agents?isPlayableCharacter=true';
    const [agentsData, setAgentsData] = useState([]);
    const [selectedAgent, setSelectedAgent] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(endpoint);

                if (!response.ok) {
                    throw new Error(`Erro na requisição: ${response.status}`);
                }

                const data = await response.json();
                setAgentsData(data.data);
                setSelectedAgent(data.data[0]);
            } catch (error) {
                console.error('Erro:', error);
            }
        };

        fetchData();
    }, [endpoint]);

    return (
        <main className='main-agents'>
            <div className='agents-wrapper'>
                <div className='slider-wrapper'>
                    <CharacterSlider agentData={agentsData} onAgentClick={setSelectedAgent} />
                </div>
                <div>
                    <AgentsImage selectedAgent={selectedAgent} />
                </div>
            </div>
            <video src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt29d7c4f6bc077e9e/5eb26f54402b8b4d13a56656/agent-background-generic.mp4" autoPlay muted loop></video>
        </main>
    );
};

export default Agents;
