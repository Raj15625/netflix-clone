import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const Player = () => {

  const [apiData, setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNmU2ZTQ4MDM2NDY3NTdlZjE3ZmE2YTkwYTY1OWNiZiIsIm5iZiI6MTc1MzYzNDYyNS4yMDIsInN1YiI6IjY4ODY1NzQxMjIzMDBhNTBhNzcyZWQzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G61IyrCVKJIpLASprihYnq_BV7lELMx9fXeeeWlbEsU'
  }
};

useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/1087192/videos?language=en-US', options)
  .then(response => response.json())
  .then(response => setApiData(response.results[0]))
  .catch(err => console.error(err));
},[])


  return (
    <div className='player'>
      <img src={back_arrow_icon} alt=' '/>
      <iframe width='90%' height='90%'
       src={`https://www.youtube.com/embed/${apiData.key}`}
        title='trailer'
         frameBorder='0'
          allowFullScreen>

          </iframe>
       <div className="player-info"> 
        <p>apiData.published_at</p>
        <p>apiData.name</p>
        <p>apiData.type</p>

       </div>
    </div>
  )
}

export default Player