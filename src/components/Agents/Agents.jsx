import './Agents.scss'
import CharacterSlider from '../AgentsSlider/AgentsSlider';


const Agents = () => {

    return(
        <main className='main-agents'>
            <video src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt29d7c4f6bc077e9e/5eb26f54402b8b4d13a56656/agent-background-generic.mp4" autoPlay muted loop></video> */
            <div className='slider-wrapper'>
                <CharacterSlider className='slider'/>
            </div>
        </main>
    )
}

export default Agents