/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Hero from '../../components/Hero/Hero'
import Agents from '../../components/Agents/Agents'

const Main = ({ page }) => {
    let content;

    switch (page) {
        case '/':
            content = <Hero/>;
            break;
        case '/Agents':
            content = <Agents />;
            break;
    }

    return (
        <>
            {content}
        </>
    )
}

export default Main