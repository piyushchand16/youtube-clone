import React from 'react'
import "./VideoCard.css"
import  Avatar  from '@mui/material/Avatar';


function VideoCard({image, title, channel, views, timestamp, channelImage}) {
  return (
    <div className='videoCard'>
        <img className='videoCard_thumbnnail' src={image} alt="" />
        <div className="videoCard__info">
            <Avatar className='video__avatar' src={channelImage}/>
            <div className="videoCard__text">
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views} &#x2022; {timestamp}
                </p>
            </div>
        </div>
    </div>
  )
}

export default VideoCard