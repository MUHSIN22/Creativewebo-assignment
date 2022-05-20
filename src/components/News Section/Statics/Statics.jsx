import React from 'react'
import './Statics.scss'

export default function Statics() {
  return (
    <div className="statics-container">
        <div className="static">
          <img src="/images/handshake.png" alt="" className="icon" />
          <big className='static-number'>600</big>
          <strong className="static-title">Media Partner</strong>
        </div>
        <div className="static">
          <img src="/images/handshake.png" alt="" className="icon" />
          <big className='static-number'>2000+</big>
          <strong className="static-title">Trade Visitors</strong>
        </div>
        <div className="static">
          <img src="/images/handshake.png" alt="" className="icon" />
          <big className='static-number'>1200</big>
          <strong className="static-title">Deligates & VIPs</strong>
        </div>
        <div className="static">
          <img src="/images/handshake.png" alt="" className="icon" />
          <big className='static-number'>200</big>
          <strong className="static-title">Conference Speaker</strong>
        </div>
        <div className="static">
          <img src="/images/handshake.png" alt="" className="icon" />
          <big className='static-number'>18000</big>
          <strong className="static-title">SQM Exhibit Area</strong>
        </div>
    </div>
  )
}
