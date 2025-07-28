import React, { useEffect, useRef, useState} from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'

const TitleCards = ({title, category}) => {

  const[apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNmU2ZTQ4MDM2NDY3NTdlZjE3ZmE2YTkwYTY1OWNiZiIsIm5iZiI6MTc1MzYzNDYyNS4yMDIsInN1YiI6IjY4ODY1NzQxMjIzMDBhNTBhNzcyZWQzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G61IyrCVKJIpLASprihYnq_BV7lELMx9fXeeeWlbEsU'
  }
};



  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));

    const cardElement = cardsRef.current;
    cardElement.addEventListener('wheel', handleWheel);

    return () => {
      cardElement.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className='title-cards'>
      <h2>{title?title: "Popular on Netflix"}</h2> 
      
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => (
          <div className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
