import React from 'react';
import { styled } from 'styled-components';
import TornPaper from '../../assets/tornPaper1.2.png';
import Hologram from '../../assets/hologram.jpg';
import { CustomInput } from '../CustomInput/CustomInput';
import { CustomCalendar } from '../CustomCalendar/CustomCalendar';
import { CustomUpload } from '../CustomUpload/CustomUpload';


const SectionPaper = styled.div`
    font-family: "Sedgwick Ave Display", sans-serif;
    background-image: url(${TornPaper});
    width: 100%;
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;

    & p{
        position: relative;
        font-size:35px;
        left:100px;
        top:50px;
        align-self:flex-start;
    }
`
const InfoBlock = styled.div`
    z-index:1;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding:20px 20px;
    width: 900px;
    height: 500px;
    top: 60px;
    background-image:url(${Hologram});
    margin-left: 50px;
    border-radius: 20px;

    &:before{
        content: '';
        position: absolute;
        width: 1000px;
        height: 450px;
        right: -30px;
        top: 50px;
        border-radius: 30px;
        backdrop-filter: blur(10px);
    }
    & p{
        margin-top:0px;
        font-size:35px;
        color:white;
    }
`
const AddBackground = styled.div`
    font-family: "Sedgwick Ave Display", sans-serif;
    background-image:url(${TornPaper});
    width: 100%;
    height:400px;
    margin-top: -35px;
    transform: scaleY(-1);
    z-index: -1;

    & p{
        position: relative;
        top:200px;
        left:100px;
        font-size:35px;
        color: black;
        transform: scaleY(-1);
    }
    
`

export const PersonalInfo = () => {
    return (
        <>
            <SectionPaper>
                <p>Personal Information</p>
                <InfoBlock>
                    <CustomInput label="Name" placeholder="Enter your name" />
                    <CustomInput label="Location" placeholder="Location" />
                    <CustomInput label="Phone number" placeholder="Phone number" />
                    <p>Date of birth</p>
                    <CustomCalendar customStyles={{ position: 'relative', top: '15px', left: '100px' }} />
                    <CustomUpload />
                </InfoBlock>
            </SectionPaper>
            <AddBackground>
                <p>Education</p>
            </AddBackground>

        </>
    )
}