
const Card = ({ value, onClick, isFlipped }) => {
    return (
        <div className={`card ${isFlipped ? 'clicked-carte' : ''}`}
             onClick={onClick}
             data-value={value}>
            {isFlipped && <h2>{value}</h2>}
        </div>
    )
}

export default Card;
