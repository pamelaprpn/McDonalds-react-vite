import * as S from './styled'
import Card from '../Card'
import sofa from '../../assets/sofa.svg'
import restaurante from '../../assets/restaurante.svg'
import banner from '../../assets/banner.svg'


const Body = () => {
    return(
        <>
            <S.Body>
                <S.Titulo>Promoção</S.Titulo>
                <S.CardsContainer>
                    <Card image={sofa} texto='Que tal um #MéquiNoSofá?' />
                    <Card image={restaurante} texto='Venha conhecer nossa nova loja' />
                    <Card image={banner} texto='Confira as medidas que o Méqui adotou!' />
                </S.CardsContainer>
            </S.Body>
        </>
    )
}

export default Body