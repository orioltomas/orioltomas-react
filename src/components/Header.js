import linkedin from './../linkedin.png';
import github from './../github.png';

function Header () {
    return (
        <header className="App-header">
            <div className="App-header__find">Find me:</div>
            <div className="App-header__icon">
                <a href="https://es.linkedin.com/in/oriol-tomàs-fortuny-938506124" target="_blank" rel="noreferrer">
                    <img src={ linkedin } alt="LinkedIn"></img>
                </a>
            </div>
            <div className="App-header__icon">
                <a href="https://github.com/orioltomas" target="_blank" rel="noreferrer">
                    <img src={ github } alt="Github"></img>
                </a>
            </div>
        </header>
    )
}

export default Header
