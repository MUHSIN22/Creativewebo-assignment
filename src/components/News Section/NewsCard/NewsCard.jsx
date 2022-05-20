import React, { useEffect, useState } from 'react'
import './NewsCard.scss'

export default function NewsCard({area}) {
  const [title,setTitle] = useState("");


  useEffect(() => {
    switch (area) {
      case "news1":
        setTitle("Fair information")
        break;
      case "news2":
        setTitle("Why Delhi jewellery fair");
        break;
      case "news3":
        setTitle("Who are visiting");
        break;
      case "news5":
        setTitle("Exhibitor Registration");
        break;
      case "news6":
        setTitle("Who are Exhibiting")
        break;
      case "news7":
        setTitle("News & Media");
        break;
      default:
        break;
    }
  },[])
  return (
    <div className="news-card" style={
      {
        backgroundImage: `url('/images/${area}.png')`,
        gridArea: area
      }}>
        {
          title !== ""?
          <div className="navigation-wrapper">
            <strong className="navigation text">{title}</strong>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="rgba(255,255,255,1)"/></svg>
          </div>
          :
          <div className="full-navigation">
            <div className="full-navigation-wrapper">
              <strong className="navigation text">Visitor Registration</strong>
              <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, earum!</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="rgba(255,255,255,1)"/></svg>
            </div>
          </div>
        }
    </div>
  )
}
