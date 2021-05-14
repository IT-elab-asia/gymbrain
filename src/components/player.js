import React from 'react'

import VideoPlayer from 'react-video-js-player'

import App from '../App'

import videoDemo from '../img/videoplayback.mp4'
import '../css/Video.css'

const VideoJS = () => {
    const videoSrc = videoDemo;
    const poster = "https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F161786280_186271256634037_2715145329097943867_n.jpg%3Foh%3D335ab15f3af90d3911ef94d51def1357%26oe%3D6079CABB&t=l&u=77761492925%40c.us&i=1615877688&n=wjGSWGqNg6IZSDLfUbFPu7FEBetmsQ0bx%2FXRiDW9Hc0%3D";
    
    
        return(
            <div>
                <h1>
                    Video first
                </h1>
                <VideoPlayer controls controlsList="nodownload" src={videoSrc} poster={poster} width="720" height="420" />
               
            </div>
            
        );
    }

export default VideoJS;