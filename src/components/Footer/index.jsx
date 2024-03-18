import googlePlay from '../../assets/pla.svg'
import appStore from '../../assets/app_store.svg'
import logo from '../../assets/logo (2).svg'
import * as S from './styled'

const Footer = () => {
    return(
        <>
            <S.ContainerFooter>
                <S.ContainerMac>
                    <img src={logo} alt="Logo McDonalds"/>
                    <p>© McDonald’s 2024</p>
                </S.ContainerMac>
                <S.ContainerPlay>
                    <img src={googlePlay} alt="Icone Google play"/>
                    <img src={appStore} alt="Icone Apple Store"/>
                </S.ContainerPlay>
            </S.ContainerFooter>
        </>
    )   
}

export default Footer