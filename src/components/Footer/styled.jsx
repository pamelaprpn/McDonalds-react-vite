import styled, {css} from "styled-components";

const divCentralizada = css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
`

export const ContainerFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em;

    @media (max-width: 430px) {
        padding: 1em;
    }
`

export const ContainerMac = styled.div`
    ${divCentralizada}

    @media (max-width: 430px) {
        gap: .5em;
    }

`
export const ContainerPlay = styled.div`
    ${divCentralizada}

    @media (max-width: 430px) {
        gap: .5em;
    }
`
export const TextFooter = styled.p`
    font-weight: 200;
    font-size: 16px;

    @media (max-width: 430px) {
        font-size: 8px;
    } 
`
export const ImagePlay = styled.img`
    
    @media (max-width: 430px) {
        width: 79px;
        height: 20px;
    }   
    
`