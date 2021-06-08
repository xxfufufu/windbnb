import './style/SearchRoom.css'

const SearchRoom = ({
                    optionRoom, 
                    handleInput, 
                    handleClickInput, 
                    value, 
                    viewHeader, 
                    setViewHeader, 
                    viewSearch, 
                    setViewSearch,
                    setViewGuest
                    }) => {

                        const handleClickSearch = () => {
                            setViewSearch(true)
                            setViewGuest(false)
                        }

                        const handleSearchHeader = () => {
                            setViewSearch(true)
                            setViewGuest(false)
                            setViewHeader(true)
                        }
    return (
        viewHeader ?
        <div className="containerSearchRoom-active">
            <div className={viewSearch ? "searchRoom-active" : "searchRoom-pasive"} onClick={handleClickSearch}>
                <label className="label-search">Add Location</label>
                <input className="input-search" type="text" placeholder="Please Add Location . . ." onChange={handleInput} value={value} disabled />
            </div>
            <ul className={viewSearch ? "list-active" :"list-pasive"}>
                {optionRoom.map((a, i) => { return (
                    <li key={i}>
                        <i className="fas fa-thumbtack"></i>
                        <div onClick={handleClickInput} className="lala">{a.city}, {a.country}</div>
                    </li>
                )})}
            </ul>
        </div> :
        <div className="containerSearchRoom" onClick={handleSearchHeader}> 
            <label className="label-search">Add Location</label>
        </div> 

    );
}

export default SearchRoom;