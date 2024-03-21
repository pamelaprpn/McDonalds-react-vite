import * as S from './styled'
import logo from '../../assets/logo.svg'
import app from '../../assets/app.svg'
import app_pedido from '../../assets/app_pedido.svg'

const Header = () => {
    return(
        <>
            <S.Header>
                <div className="logo">
                    <img src={logo} alt='Logo Mac'/>
                </div>
                <S.Menu>
                    <S.NavApp>
                        <img src={app} alt='Logo app'/>
                        <S.TextNavApp>Baixe o App</S.TextNavApp>
                    </S.NavApp>
                    <S.NavCart>
                        <S.TextNavCart>Peça seu Méqui</S.TextNavCart>
                        <img src={app_pedido} alt='Logo carrinho'/>
                    </S.NavCart>
                </S.Menu>
            </S.Header>
        </>
    )
}

export default Header;