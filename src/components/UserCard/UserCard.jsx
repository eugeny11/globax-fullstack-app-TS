import React, {useState} from "react";
import './UserCard.css'
import Phone from '../../img/Phone.png'
import Message from '../../img/Message.png'
import Popup from "../Popup/Popup";

const UserCard = ({user}) => {

    const [showPopup, setShowPopup] = useState(false);

    const handleCardClick = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return ( 
        <>
            <div className="user-card" onClick={handleCardClick}>
                <h2>{user.name}</h2>
                <div className="user-card--info">
                    <div className="user-card--field"><img src={Phone} alt='Phone' /><div>{user.phone}</div></div>
                    <div className="user-card--field"><img src={Message} alt='Message' /><div>{user.email}</div></div>
                </div>
            </div>
            {showPopup &&
             <Popup user={user} closePopup={closePopup} />
            }
           
        </>
        )
  
}

export default UserCard