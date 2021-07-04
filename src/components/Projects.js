import React, {useState} from 'react'
import Project from './Project'

const projects = [
    {
        name: 'Oriol Tomas website',
        description: 'Website developed with ReactJS, using Javascript and SCSS preprocessor.',
        link: 'https://github.com/orioltomas/orioltomas-react'
    },
    {
        name: 'Notes application (frontend)',
        description: 'First project developed with ReactJs. Its purpose was to learn some of its basics.',
        link: 'https://github.com/orioltomas/notes-react'
    },
    {
        name: 'Notes application (backend)',
        description: 'This project led me to develop the notes backend by using Node.js and Express.',
        link: 'https://github.com/orioltomas/notes-backend'
    },
    {
        name: 'Tic-tac-toe game',
        description: 'The well known game of tic-tac-toe developed with HTML, Javascript and CSS.\nDownload it and start playing!',
        link: 'https://github.com/orioltomas/tictactoe-game'
    },
    {
        name: 'Weather application',
        description: 'Developed with HTML, CSS and, mainly, Javascript, this application will let you check the real-time weather in any city of the world!',
        link: 'https://github.com/orioltomas/weather-app'
    },
    {
        name: 'Oriol Tomas website (old)',
        description: 'This portfolio page was developed with Symfony framework.',
        link: 'https://github.com/orioltomas/portfolio'
    }
]

function Projects () {

    // eslint-disable-next-line
    const [ showProjects, setShowProjects ] = useState(projects)

    return (
        <div className="App-projects">
            { showProjects.map(project => 
                <Project project={ project } />
            ) }
        </div>
    )
}

export default Projects
