import styled from "styled-components";


export const Card = styled.div`
    border-radius: 10px;
    width: 17.5em;

    &:hover{
        transform: translateY(-7px)
    } 
       
`

export const Image = styled.img`
    width: 100%;
    position: relative;
    bottom: -10px;
`

export const Info = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
    border-radius: 10px;
    
`

export const Title = styled.h3`
    font-weight: 700;
    font-size: 20px;
    padding-bottom: 1em;
    text-align: center;

    @media (max-width: 430px) {
        font-size: 15px;
    }
    
`
export const Button = styled.button`
    border: 1px solid #FFBC0D;
    border-radius: 10px;
    width: 162px;
    height: 41px;
    background-color: #FFBC0D;
    font-weight: 400;
    font-size: 20px;

    &:hover {
        background-color: #f11614;
    }

    @media (max-width: 430px) {
        font-size: 15px;
    }
`


