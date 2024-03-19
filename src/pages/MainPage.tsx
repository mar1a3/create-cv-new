import React from 'react';
import { Header } from '../components/Header/Header'
import { PersonalInfo } from '../components/PersonalInfo/PersonalInfo';
import { Education } from '../components/Education/Education';
import { Skills } from '../components/Skills/Skills';
import { WorkExperience } from '../components/WorkExperience/WorkExperience';

export const MainPage = () => {
  return (
    <>
      <Header />
      <PersonalInfo />
      <Education />
      <Skills/>
      <WorkExperience/>
    </>
  )
}
