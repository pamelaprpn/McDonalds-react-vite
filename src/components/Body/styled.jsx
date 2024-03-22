import styled from "styled-components";

export const Body = styled.section`
    background-color: #FEB706;
    padding-bottom: 2em;

`
export const Titulo = styled.h2`
    color: white;
    font-weight: 700;
    font-size: 36px;
    text-align: center;
    padding: 2em 0;

    @media (max-width: 430px) {
        font-weight: 600;
        font-size: 24px;
    }
`
export const CardsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 5em;

    @media (max-width: 430px) {
        flex-direction: column;
        gap: 20px;
    }
    
    
`