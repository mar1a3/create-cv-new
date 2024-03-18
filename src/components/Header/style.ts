import styled from "styled-components";
import Paper from '../../assets/tornPaper1.2.png';

export{};

export const HeaderWrapper = styled.div`
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