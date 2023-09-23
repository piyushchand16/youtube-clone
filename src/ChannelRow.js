import React from 'react'
import"./ChannelRow.css"
import  Avatar  from '@mui/material/Avatar';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function ChannelRow({image,channel,verified,subs,noOfVideos,description}) {
  return (
    <div className='channelRow'>
        <Avatar className='channelRow__logo' src="https://d31ezp3r8jwmks.cloudfront.net/rrggk40pbkppfi0tas3j73qr4lub"/>
        <div className="channelRow__text">
            <h4>{channel} {verified &&<CheckCircleOutlineIcon />}</h4>
            <p>{subs} subscribers • {noOfVideos} videos</p>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ChannelRow