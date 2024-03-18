import styled from "styled-components";
import { Card } from 'antd';

export const CardWrapper = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:1000px;
    margin-top:50px;
    margin-bottom:50px;
    font-family: "FiraMono", sans-serif;
    color:#424242;
`
export const TitleSection = styled.p`
    margin-bottom:10px;
    align-self: flex-start;
    font-size:25px;
`
export const StyledCard = styled(Card)`
    width: 1000px; 
    background-color: #edf4f3;
`