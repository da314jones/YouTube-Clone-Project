import React from 'react'
import { Card } from 'react-bootstrap'
import TeamInfo from './TeamInfo'
import './About.css'

export default function About() {
  return (
    <>
      <h1 className='text-center font-bold text-5xl'>Team Info</h1>
      <TeamInfo />
    </>
  )
}

