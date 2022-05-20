import React from 'react'
import './PrimaryButton.scss'

export default function PrimaryButton({children,speciality}) {
  return (
    <button className={"btn-primary " + speciality}>
      {children}
    </button>
  )
}
