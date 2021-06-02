import CardRoom from './CardRoom';
import './style/RoomList.css'

const RoomList = ({stays}) => {
    const x = stays.map(item => item.country)
    const countryFilter = x.filter((a,b) => x.indexOf(a)===b)
    
    return (
        <section>
            <div className="headerRoom">
                <p className="stay-at">Stay in {countryFilter}</p>
                <p>{stays.length} stays</p>
            </div>
            <div className="containerRoom">
                {stays.map((item, index) => { return(
                    <CardRoom key={index} room={item}/>)
                })}
            </div>
        </section>
    );
}

export default RoomList;