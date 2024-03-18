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
`

export const ContainerMac = styled.div`
    ${divCentralizada}

`
export const ContainerPlay = styled.div`
    ${divCentralizada}
`