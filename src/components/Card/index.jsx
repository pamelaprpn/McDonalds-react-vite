import * as S from './styled'

const Card = (props) => {
    return(
        
            <S.Card>
                <S.Image src={props.image} alt='Propaganda'/>
                
                
                <S.Info>
                    <S.Title>{props.texto}</S.Title>
                    <S.Button>Clique Aqui</S.Button>
                </S.Info>
            </S.Card>
        
    )
}

export default Card