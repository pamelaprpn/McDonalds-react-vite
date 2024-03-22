import * as S from './styled'
import bigMac from '../../assets/bigmac.svg'
import batata from '../../assets/batata.svg'
import sorvete from '../../assets/sorvete.svg'
import { useState } from 'react'

const Main = () => {

    const [item, setItem] = useState(bigMac)
    

    return(
        <S.Main>
            <S.TitleContainer>
                <S.ImageItem src={item} alt='Produto Selecionado'/>
                <S.Title>BATEU AQUELA <br/> <S.Destaque>#FOME</S.Destaque> DE <S.Destaque>MÉQUI</S.Destaque>?</S.Title>
            </S.TitleContainer>
            <S.Produtos>
                <S.ImageProduto onClick={() => {setItem(bigMac)}} src={bigMac} alt='Big Mac'/>
                <S.ImageProduto onClick={() => {setItem(batata)}} src={batata} alt='Batata'/>
                <S.ImageProduto onClick={() => (setItem(sorvete))} src={sorvete} alt='Sorvete'/>
            </S.Produtos>
        </S.Main>
    )
}

export default Main