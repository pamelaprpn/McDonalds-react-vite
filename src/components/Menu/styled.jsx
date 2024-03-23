import styled, {createGlobalStyle, css} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;

}
`
const itemCentralizado = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 1em;

    @media (max-width: 430px) {
        display: flex;
        justify-content: space-between;
        padding: 1em;
    }

`

export const Menu = styled.div`
    ${itemCentralizado}
    gap: 30px;

    @media (max-width: 430px) {
        gap: 10px;
    }
`



export const NavApp = styled.div`
    ${itemCentralizado}
    gap: 10px;

    @media (max-width: 430px) {
        gap:.5em;
    }
`
export const NavCart = styled.div`
    ${itemCentralizado}
    gap: 10px;
    border: 1px solid #FFC72C;
    border-radius: 10px;
    background-color: #FFC72C;
    padding: 0.5em 1.25em;

    &:hover {
        background-color: #f11614;
    }

    @media (max-width: 430px) {
        padding: 0.25em 0.75em;
        
    }  

`


export const TextNavApp = styled.p`
    font-weight: 400;
    font-family: "Inter", sans-serif;
    font-size: 12px;

    @media (max-width: 430px) {
        font-weight: 400;
        font-family: "Inter", sans-serif;
        font-size: 10px;
    }
`

export const TextNavCart = styled.p`
    font-weight: 700;
    font-size: 12px;
    font-family: "Inter", sans-serif;

    @media (max-width: 430px) {
        font-weight: 700;
        font-family: "Inter", sans-serif;
        font-size: 10px;
    }
`
