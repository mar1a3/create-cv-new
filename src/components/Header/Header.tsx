import React from 'react';
import { styled, createGlobalStyle } from 'styled-components';
import Paper from '../../assets/tornPaper1.2.png'

export const HeaderFont = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Belanosima:wght@400;600;700&display=swap');
`

const HeaderWrapper = styled.div`
  font-family: "Belanosima", sans-serif;
  margin: 0 auto;
  padding:20px 20px;
  display: flex;
  flex-direction:column;
  justify-content:center;
  width: 1000px;
  height: 200px;
  background-image:url(${Paper});
  background-position:0px -50px;
  border-radius: 0px 0px 20px 20px;
  & h1{
    font-size: 45px;
    font-weight: 600;
    color:#424242;
  }
`

export const Header = () => {
  return (
    <>
      <HeaderFont />
      <HeaderWrapper>
        <h1>Create CV</h1>
      </HeaderWrapper>
    </>
  )
}

