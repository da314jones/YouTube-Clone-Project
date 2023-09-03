import React from 'react'
import { Card } from 'react-bootstrap'
import TeamInfo from './TeamInfo'
import './About.css'

export default function About() {
  return (
    
    <div className='about-body'>
      <h1 className='text-center font-bold text-5xl' style={{ margin: '0', padding: '0'}}>Team Info</h1>
      <TeamInfo />
      </div>
  )
}

