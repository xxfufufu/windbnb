import SearchRoom from './SearchRoom'
import AddGuest from './AddGuest'
import SearchButton from './SearchButton'
import React, { useState } from 'react'
import './style/Header.css'
import foto from '../assets/logo.png'


const Header = ({
                optionRoom, 
                handleInput, 
                handleClickInput, 
                value, 
                decrement, 
                increment, 
                counter, 
                setCounter, 
                changeStays
                }) => {
    const [viewHeader, setViewHeader] = useState(false);
    const [viewSearch, setViewSearch] = useState(false);
    const [viewGuest, setViewGuest] = useState(false);        
    return (
        <header className="containerHeader">
        {viewHeader ? null : <img className="logo" src={foto} alt="logo"></img>}
        <div className={viewHeader ? 'header-active' : 'header-hidden'}>
            <SearchRoom 
                optionRoom={optionRoom}
                handleInput={handleInput} 
                handleClickInput={handleClickInput} 
                value={value}
                viewHeader={viewHeader}
                setViewHeader={setViewHeader}
                viewSearch={viewSearch}
                setViewSearch={setViewSearch}
                viewGuest={viewGuest}
                setViewGuest={setViewGuest} />
            <AddGuest 
                viewHeader={viewHeader}
                setViewHeader={setViewHeader}
                viewSearch={viewSearch}
                setViewSearch={setViewSearch}
                viewGuest={viewGuest}
                setViewGuest={setViewGuest}
                counter={counter} 
                decrement={decrement}
                increment={increment} 
                setCounter={setCounter} />
            <SearchButton 
                viewSearch={viewSearch}
                setViewSearch={setViewSearch}
                viewGuest={viewGuest}
                setViewGuest={setViewGuest}
                changeStays={changeStays}
                viewHeader={viewHeader}
                setViewHeader={setViewHeader} />
             {viewHeader ? <div className="close-active" onClick={() => setViewHeader(false)}>x</div> : null}
        </div>
        </header>
    );
}

export default Header;