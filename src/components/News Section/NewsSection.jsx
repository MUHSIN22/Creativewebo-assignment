import React from 'react'
import NewsCard from './NewsCard/NewsCard'
import './NewsSection.scss'
import Statics from './Statics/Statics'

export default function NewsSection() {
  return (
    <section className="news-section">
      <Statics />
      <div className="news-wrapper">
        <div className="news-container">
          <h1 className="heading">The Delhi Jewellery and Gems Fair Sparkles in its 8th edition</h1>
          <p className="sub-description description-italic">Brought together over 650 leading brands & over 300 exhibitors from Gems & Jewellery Industry</p>
          <p className="sub-description">28th - 30th september 2019, Pragati maidan, New Delhi</p>
        </div>
        <div className="news-cards-wrapper">
            <NewsCard area="news1"/>
            <NewsCard area="news2"/>
            <NewsCard area="news3"/>
            <NewsCard area="news4"/>
            <NewsCard area="news5"/>
            <NewsCard area="news6"/>
            <NewsCard area="news7"/>
        </div>
      </div>
    </section>
  )
}
