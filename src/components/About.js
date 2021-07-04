import orioltomas from './../orioltomas.jpeg'

function About () {
    return (
        <div className="App-about">
            <div className="App-about__content">
                <div className="App-about__image">
                    <img src={ orioltomas } alt="Oriol Tomas"></img>
                </div>
                <div className="App-about__text">
                    I aspire to build meaningful and useful web applications where I try to keep my code clean and apply best practices.<br/>
                    Always eager to learn new programming languages, use new technologies and apply new methodologies, I try to get better everyday in both frontend and backend.<br/>
                    I grow fast on the projects I am involved in, I have good organizational skills and I believe that team work and knowledge sharing can take my work to the next level.
                </div>
            </div>
        </div>
    )
}

export default About
