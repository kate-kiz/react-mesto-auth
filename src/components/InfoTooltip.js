
import successIcon from '../images/successIcon.svg'
import failureIcon from '../images/failureIcon.svg'

function InfoTooltip({ name, onClose, isOpen, res, text }) {

    return (
        <div className={`popup popup_${name} ${isOpen ? `popup_opened` : ``}`}>
            <div className="popup__container">
                <button
                    className="popup__close"
                    type="button"
                    onClick={onClose}
                ></button>
                <div
                    className='popup__icon'
                    style={{ backgroundImage: `url(${res ? successIcon : failureIcon})` }
                    }
                />
                <p
                    className='popup__info-text'>
                    {text || ''}
                </p>
            </div>
        </div>
    )
}

export default InfoTooltip;
