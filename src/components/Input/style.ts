import styled from "styled-components";

export{};

export const Wrapper = styled.div`
        color:#424242;
        margin-bottom:30px;
    & p{
        font-size: 20px;
        width:400px;
    }
    & input{
        margin-top: 5px;
        background-color:transparent;
    }
    & input::placeholder{
        color:#424242;
}
`