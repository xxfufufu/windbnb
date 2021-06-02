import './style/CardRoom.css';

const CardRoom = ({room}) => {
    return (
        <>
            <div className="room">
                <div className="room-img">
                    <img className="gambar" src={room.photo} alt="room-img"/>
                </div>
                    <div className="room-desc">
                        <div className="desc-detail">
                            {room.superHost ? <div className="super-host">super host</div> : null}
                            {room.beds !== null ? <div className="type">{room.type}.</div> : <div className="type">{room.type}</div>}
                            {room.beds !== null ? <div className="beds">{room.beds} beds</div> : null}
                        </div>
                        <div className='ratting'>
                            <i className="fas fa-star star"></i>
                            <div className="number-ratting">{room.rating}</div>
                        </div>
                    </div>
                    <div className="room-title">{room.title}</div>
                </div> 
        </>
    );
}

export default CardRoom;