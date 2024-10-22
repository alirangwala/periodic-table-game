import React from 'react'
import "./Title.css";

interface TitleProps {
    title: string;
    subtitle: string;

  }

const Title = ({title, subtitle}: TitleProps) => {
  return (
    <div className="titleContainer">
      <h1 className="titleText">{title}</h1>
      {subtitle && <p className={subtitle}>{subtitle}</p>}
    </div>

  )
}

export default Title