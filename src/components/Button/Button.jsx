/* eslint-disable react/prop-types */
import './Button.scss'

const Button = (props) => {
    return(
        <a href={props.href} className={`button-container ${props.className}`} target='_blank' rel="noreferrer">
            <span className='button'>{props.texto}</span>
        </a>
    )
}

export default Button