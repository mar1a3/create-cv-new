import React, { ReactNode } from 'react';
import { styled, createGlobalStyle } from 'styled-components';
import { Card } from 'antd';

export const CardFont = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap');
`
interface CustomCardProps {
    title?: ReactNode;
    children?: ReactNode;
}

const CardWrapper = styled.div`
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
const TitleSection = styled.p`
    margin-bottom:10px;
    align-self: flex-start;
    font-size:25px;
`
const StyledCard = styled(Card)`
    width: 1000px; 
    background-color: #edf4f3;
`
export const CustomCard: React.FC<CustomCardProps> = ({title, children}) => (
    <>
        <CardFont />
        <CardWrapper>
            <TitleSection>{title}</TitleSection>
            <StyledCard>
                <div>{children}</div>
            </StyledCard>
        </CardWrapper>
    </>
);



