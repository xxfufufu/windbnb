import './style/SearchButton.css'

const SearchButton = ({changeStays, viewHeader, setViewHeader, setViewSearch}) => {
    const handleViewHeader = () => {
        setViewHeader(true)
        setViewSearch(true)};
    return (
        
        viewHeader ? 
            <div className="containerSearchButton-active">
                <div className="iconSearch" onClick={changeStays}>
                    <i className="fas fa-search"></i>
                    <div>Search</div>
                </div> 
            </div> :
            <div className="containerSearchButton">
                <div onClick={handleViewHeader}><i className="fas fa-search"></i></div>
            </div>
       
    );
}

export default  SearchButton;