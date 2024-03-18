import React from 'react';
import { Header } from '../components/Header/Header'
import { PersonalInfo } from '../components/PersonalInfo/PersonalInfo';
import { Education } from '../components/Education/Education';

export const MainPage = () => {
  return (
    <>
      <Header />
      <PersonalInfo />
      <Education/>
    </>
  )
}
