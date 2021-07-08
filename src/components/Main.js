import macbookcode from './../macbook-code.png';

function Main ({ anchorId }) {

    const handleClick = () => {
        var element = document.getElementById(anchorId);
        element.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    }

    return (
        <div className="App-main">
            <div className="App-main__content">
                <div className="App-main__name">
                    <span className="App-main__name--desktop">ORIOL<br/>TOMAS</span>
                    <span className="App-main__name--mobile">ORIOL TOMAS</span>
                </div>
                <div className="App-main__developer">FULL STACK DEVELOPER</div>
                <img className="App-main__image" src={ macbookcode } alt="Web development"></img>

                <div className="App-main__more" onClick={ () => handleClick() }>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Main
