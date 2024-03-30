import React from 'react';
import { Header } from '../components/Header/Header'
import { PersonalInfo } from '../components/PersonalInfo/PersonalInfo';
import { Education } from '../components/Education/Education';
import { Skills } from '../components/Skills/Skills';
import { WorkExperience } from '../components/WorkExperience/WorkExperience';
import { FloatButton } from '../components/FloatButton/FloatButton';
import {Modal} from '../components/Modal/Modal';

export const MainPage = () => {
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal  = () =>{
    setOpenModal(true);
  }
  const handlecloseModal = () =>{
    setOpenModal(false);
  }
  return (
    <>
      <Header />
      <PersonalInfo />
      <Education />
      <Skills />
      <WorkExperience />
      <FloatButton
      onClick={handleOpenModal}
      />
      <Modal open={openModal} onCancel={handlecloseModal}/>
    </>
  )
}
