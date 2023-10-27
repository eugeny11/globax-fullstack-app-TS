import React from "react";
import './Popup.css'
import Close from '../../img/Close.svg'

const Popup = (props) => {

    const {user, closePopup} = props

    return (
    <div className="popup" onClick={closePopup}>
        <div className="popup-content" onClick={e => e.stopPropagation()}> 
            <div className="popup-content--header">
            <h2>{user.name}</h2>
                <button className="popup-close" onClick={closePopup}>
                    <img src={Close} alt='close'/>
                </button>
            </div>
            <div className="popup-content--contacts">
                <div className="popup-contact-line">
                    <div className="popup-contact-line--title">Телефон</div>
                    <div className="popup-contact-line--info">{user.phone}</div>
                </div>
                <div className="popup-contact-line">
                    <div className="popup-contact-line--title">Почта</div>
                    <div className="popup-contact-line--info">{user.email}</div>
                </div>
                <div className="popup-contact-line">
                    <div className="popup-contact-line--title">Дата приёма</div>
                    <div className="popup-contact-line--info">{user.hire_date}</div>
                </div>
                <div className="popup-contact-line">
                    <div className="popup-contact-line--title">Должность</div>
                    <div className="popup-contact-line--info">{user.position_name}</div>
                </div>
                <div className="popup-contact-line">
                    <div className="popup-contact-line--title">Подразделение</div>
                    <div className="popup-contact-line--info">{user.department}</div>
                </div>
            </div>
            <div className="popup-content--additional-info">
                <div className="popup-content--additional-title">
                Дополнительная информация:
                </div>
                <div className="popup-content--additional-text">
                Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы.
                </div>
            </div>
        </div>
    </div>
    )
}

export default Popup