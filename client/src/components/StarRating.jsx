import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// import YellowStar from '../assets/icons8-star-48-yellow.png'

const YellowStar = (props) => (<img src={'../assets/icons8-star-24-yellow.png'}/>)

const EmptyStar = (props) => (<img src={'../assets/icons8-star-24-empty.png'}/>)

const FYellowStar = styled(YellowStar)`
  height: 5px;
  width: 5px;
`;

const FEmptyStar = styled(EmptyStar)`
`;

const StarRating = (props) => {
  const [ stars, setStars ] = useState([]);
  const [ isLoading, setIsLoading] = useState(true)

  function displayStars(stars) {
    const starArray = [];
    for (let i = 0; i < 5; i++) {
      (i < stars) ?
      starArray.push(<FYellowStar key={i}/>) :
      starArray.push(<EmptyStar key={i}/>)
    }
    setStars(starArray)
  }

  useEffect(() => {
    displayStars(props.rating)
    setIsLoading(false)
  }, [])

  return (
      isLoading?
    <a> ... </a> :
    <a> {stars} </a>
  );
}



export default StarRating;