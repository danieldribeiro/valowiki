// import Header from "../containers/Header/Header";
import Main from "../containers/Main/Main";
import '../main.scss'
import Transition from '../components/Transitions/Transition';

const Home = () => {
    return (
        <Transition>
            <Main page="/" />
        </Transition>
    );
}

export default Home