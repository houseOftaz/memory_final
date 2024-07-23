
const RestartButton = ({ onRestart }) => {

    const handleRestart = (url) => {
        const audio = new Audio(url);
        audio.play();
        onRestart();
    }

    return (

        <button onClick={handleRestart}
                className="restart-button">
            Restart
        </button>

    )
}

export default RestartButton;
