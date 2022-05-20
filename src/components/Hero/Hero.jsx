import React from 'react'
import PrimaryButton from '../utils/primaryButton/PrimaryButton'
import './Hero.scss'

export default function Hero() {
  return (
    <section className="hero" style={{backgroundImage: `url('/images/hero.jpg')`}}>
        <img src="/images/diamond.png" alt="" className="diamond" />
        <h1 className="hero-title">
            Meet the expo 2020 <br />
            Delhi Jewellery and Gems Fair
        </h1>
        <div className="btn-wrapper">
            <PrimaryButton>Book your stand</PrimaryButton>
            <PrimaryButton speciality={["btn-outline"]}>Register as a visitor</PrimaryButton>
        </div>
    </section>
  )
}
