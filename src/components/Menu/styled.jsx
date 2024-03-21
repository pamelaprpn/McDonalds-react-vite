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

`

export const Menu = styled.div`
    ${itemCentralizado}
    gap: 20px;
`

export const NavApp = styled.div`
    ${itemCentralizado}
    gap: 20px;
`
export const NavCart = styled.div`
    ${itemCentralizado}
    gap: 20px;
    border: 1px solid #FFC72C;
    border-radius: 10px;
    background-color: #FFC72C;
    padding: 0.5em 1.25em;

`
