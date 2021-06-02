import RoomList from './components/RoomList' ;
import Header from './components/Header';
import './App.css';
import data from "./assets/stays.json";
import React, { useState } from 'react';
import Footer from './components/Footer';




function App() {
 
  const [searchLoc, setSearchLoc] = useState('');
  const [counter, setCounter] = useState({adult: 0, children: 0})
  const [stays , setStays] = useState({city: "", country : "", totalGuest : 0});


  const changeStays = () => {
      let dataSearch = searchLoc.toLowerCase().split(', ')

      let city = dataSearch[0];
      let country = dataSearch[1]
      let totalGuest = counter.adult + counter.children;
    
      return (
        setStays({city: city, country: country, totalGuest: totalGuest})
      )
  }

  const optionRoom = data.reduce((acc, cur) =>{
      let x = acc.find(item => item.city === cur.city)
        if (!x) {
        return acc.concat([cur]);
        } else {
        return acc;
      }
  }, [])


  const dataFilter = data.filter(item =>{ return (
        item.city.toLowerCase().includes(stays.city) &&
        item.maxGuests >= stays.totalGuest)})


  const handleInput = (e) => {
    setSearchLoc(e.target.value);
  }
  
  const handleClickInput = (e) => {
    setSearchLoc(e.target.innerHTML);
  }


  return (
    <div className="container">
      <Header 
        optionRoom={optionRoom}
        handleInput={handleInput}
        handleClickInput={handleClickInput} 
        value={searchLoc}
        counter={counter}
        setCounter={setCounter}
        changeStays={changeStays} />

      <RoomList 
        stays={dataFilter} />

    <Footer />
    </div>
  );
}

export default App;
