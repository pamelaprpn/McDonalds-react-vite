import styled  from "styled-components";

export const Main = styled.main`
    background-color: #FFC72C;
    padding: 3em 0;
    
`
export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 430px) {
        padding-bottom: 2em;
    }
   
`

export const Title = styled.h1`
    font-weight: 800;
    color: white;
    font-family: "Inter", sans-serif;
    font-size: 50px;

    @media (max-width: 430px) {
        font-weight: 600;
        font-size: 20px;

    }

`
export const Destaque = styled.span`
    color: #DB0007;
    font-weight: 800;
    font-family: "Inter", sans-serif;
    font-size: 50px;

    @media (max-width: 430px) {
        font-weight: 600;
        font-size: 20px;
        
    }
`

export const ImageItem = styled.img`
    width: 324px;
    height: 300px;
    
    @media (max-width: 430px) {
        width: 144px;
        height: 120px;
    }
`

export const ImageProduto = styled.img`
    @media (max-width: 430px) {
        width: 58px;
        height: 50px;
    }
`

export const Produtos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3em;

`

