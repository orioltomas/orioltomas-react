import macbook from './../macbook.png';

function Main () {
    return (
        <div className="App-main">
            <div className="App-main__content">
                <div className="App-main__name">ORIOL<br/>TOMAS</div>
                <div className="App-main__developer">FULL STACK DEVELOPER</div>
            <div className="App-main__more">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                </div>
            </div>
            <img className="App-main__image" src={ macbook } alt="Web development"></img>
        </div>
    )
}

export default Main
