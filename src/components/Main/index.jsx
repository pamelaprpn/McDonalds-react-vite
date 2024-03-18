import * as S from './styled'
import bigMac from '../../assets/bigmac.svg'
import batata from '../../assets/batata.svg'
import sorvete from '../../assets/sorvete.svg'

const Main = () => {
    return(
        <S.Main>
            <S.Title>
                <img src='' alt='Produto Selecionado'/>
                <h1>BATEU AQUELA <br/> <span>#FOME</span> DE <span>MÉQUI?</span></h1>
            </S.Title>
            <S.Produtos>
                <img src={bigMac} alt='Big Mac'/>
                <img src={batata} alt='Batata'/>
                <img src={sorvete} alt='Sorvete'/>
            </S.Produtos>
        </S.Main>
    )
}

export default Main