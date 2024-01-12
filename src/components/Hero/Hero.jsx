import './Hero.scss'
import Button from '../Button/Button'

const Hero = () => {
    return(
        <section className='hero'>
            <p>A mais completa wiki de Valorant</p>
            <video src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce292b05bc900c63/659c99223ea361883557812f/VALORANT_EP8124_001_R007_InGameHomepage_v01_For_Website_Mobile_v2.mp4" className='video' autoPlay muted loop></video>
            <h1>VALOWIKI</h1>
            <Button href='https://playvalorant.com/pt-br/' texto='Jogue grátis' className='hero-button'></Button>
        </section>
    )
}

export default Hero