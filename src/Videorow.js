import React from 'react'
import "./Videorow.css"

function Videorow({views,subs,description,timestamp,channel,title,image}) {
  return (
    <div className='videoRow'>
        <img className='videoRow__img' src={image} alt='0'/>
        <div className='videoRow__text'>
            <h3>{title}</h3>
            <p  className='videoRow__headline'>
                {channel} •<span className='videoRow__subs'>
                <span className='videoRow__subsnumber'>{subs}</span> Subscribers 
                    </span> {views} views • {timestamp} 
            </p>
            <p className="videorRow__description">{description }</p>
        </div>

    </div>
  )
}

export default Videorow