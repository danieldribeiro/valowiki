import Transition from '../components/Transitions/Transition';
import Main from "../containers/Main/Main";
import '../main.scss'

const Agents = () => {
    return(
        <Transition>
            <Main page="/Agents" />
        </Transition>
    )
}

export default Agents