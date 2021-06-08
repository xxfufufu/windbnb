import './style/AddGuest.css'


export const Counter = ({counter, increment, decrement}) => {
    return (
        <div className="counter">
            <button className="buttonCounter" onClick={increment}>+</button>
            <div className="valueCounter">{counter}</div>
            <button className="buttonCounter" onClick={decrement}>-</button>
    </div>
    );
}


export const AddCounter = ({title, ages, counter, increment, decrement}) => {
    return (
       <div className="counterContainer">
           <div className="labelCounter">
               <div className="title">{title}</div>
               <div className="old">{ages}</div>
           </div>
           <Counter counter={counter} 
                    increment={increment}
                    decrement={decrement} />
       </div>
    );
}



const AddGuest = ({counter, setCounter, viewHeader, setViewHeader, viewGuest, setViewGuest, setViewSearch}) => {

    const incrementAdult = () => setCounter({...counter, adult: (counter.adult + 1)})
    const decrementAdult = () => {if(counter.adult=== 0) {
                return setCounter({...counter, adult: 0})} 
                else { return setCounter({...counter, adult: (counter.adult - 1)})}}

    const incrementChildren = () => setCounter({...counter, children: (counter.children + 1)})
    const decrementChildren = () => {if(counter.children=== 0) {
                return setCounter({...counter, children: 0})} 
                else { return setCounter({...counter, children: (counter.children - 1)})}}
    const hanldleClickGuest = () => {
        setViewSearch(false);
        setViewGuest(true);
    }

    const handleGuestHeader = () => {
        setViewSearch(false)
        setViewGuest(true)
        setViewHeader(true)
    }

    return (
        viewHeader ?
        <div className="containerAddGuest-active">
            <div className={viewGuest ? "addGuest-active" :"addGuest-pasive"} onClick={hanldleClickGuest}>
                <label className="label-guest">AddGuest</label>
                <input className="input-guest" type="text" value={counter.adult + counter.children + " guest"} disabled/>
            </div>
            <div className={viewGuest ?"guestCounter-active" : "guestCounter-pasive"} >
            <AddCounter 
                title="Adult" 
                ages="Ages 13 and above" 
                counter={counter.adult} 
                setCounter={setCounter.adult}
                increment={incrementAdult}
                decrement={decrementAdult} />
            <AddCounter 
                title="Children"
                ages="Ages 2 - 12"
                counter={counter.children}
                setCounter={setCounter.children} 
                increment={incrementChildren}
                decrement={decrementChildren} />
            </div>
        </div> :
        <div className="containerAddGuest" onClick={handleGuestHeader}>
            <label className="label-guest">Add Guest</label>
        </div>
    );
}

export default AddGuest;