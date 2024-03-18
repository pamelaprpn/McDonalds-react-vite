import * as S from './styled'

const Card = (props) => {
    return(
        <div>
            <img src={props.image} alt=''/>
            <h3>{props.texto}</h3>
            <button>Clique Aqui</button>
        </div>
    )
}

export default Card