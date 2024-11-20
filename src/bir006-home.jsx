import React from 'react'
import Herosection from './components/Bir006-Herosection';
import Bir006Special from './components/Bir006-Special';
import Bir006Timer from './components/Bir006-Timer';
import Bir006Wishes from './components/Bir006-Wishes';
import Bir006Glance from './components/Bir006-Glance';
import Bir006Magical from './components/Bir006-Magical';
import Bir006Contact from './components/Bir006-Contact';
import Bir006_invitation from './components/Bir006-invitation';

const bir006_home = () => {

  return (
    <>
     <Herosection />
      <Bir006Timer />
      <Bir006Special />
      <Bir006Glance />
      <Bir006Wishes />
      <Bir006Magical />
      <Bir006Contact />
      <Bir006_invitation />
 
    </>
  )
}

export default bir006_home