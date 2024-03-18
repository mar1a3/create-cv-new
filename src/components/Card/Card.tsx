import React, { ReactNode } from 'react';
import { CardWrapper, TitleSection, StyledCard } from './style';

interface CardProps {
    title?: ReactNode;
    children?: ReactNode;
}

export const MainCard: React.FC<CardProps> = ({ title, children }) => (
    <>
        <CardWrapper>
            <TitleSection>{title}</TitleSection>
            <StyledCard>
                <div>{children}</div>
            </StyledCard>
        </CardWrapper>
    </>
);



