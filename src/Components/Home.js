import "./styles/global.css";
import React from 'react';
import Banner from '../Components/Banner/Banner';
import FilterAnimation from '../Components/FilterAnimation/FilterAnimation'

const Home = () => {
  return ( 
    <div>
      <Banner/>
       <FilterAnimation/>
    </div>
  );
};

export default Home;
