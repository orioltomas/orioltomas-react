import React, {useState} from 'react'
import Project from './Project'

const projects = [
    {
        name: 'Ebooks project',
        description: 'Project developed with Vue framework (version 3). The aim of this app is to provide a frontend that shows a list of the ebooks where you can search for the one you are looking for and download it. The ebooks and its information is manually maintained within the project.',
        githubLink: 'https://github.com/orioltomas/ebooks-vue'
    },
    {
        name: 'Oriol Tomas website',
        description: 'Website developed with ReactJS, using Javascript and SCSS preprocessor.',
        githubLink: 'https://github.com/orioltomas/orioltomas-react'
    },
    {
        name: 'Notes application (frontend)',
        description: 'First project developed with ReactJs. Its purpose was to learn some of its basics.',
        githubLink: 'https://github.com/orioltomas/notes-react'
    },
    {
        name: 'Notes application (backend)',
        description: 'This project led me to develop the notes backend by using Node.js and Express.',
        githubLink: 'https://github.com/orioltomas/notes-backend'
    },
    {
        name: 'Tic-tac-toe game',
        description: 'The well known game of tic-tac-toe developed with HTML, Javascript and CSS.\nDownload it and start playing!',
        githubLink: 'https://github.com/orioltomas/tictactoe-game',
        appLink: "https://tictactoe.orioltomas.dev/"
    },
    {
        name: 'Weather application',
        description: 'Developed with HTML, CSS and, mainly, Javascript, this application will let you check the real-time weather in any city of the world!',
        githubLink: 'https://github.com/orioltomas/weather-app',
        appLink: "https://weather.orioltomas.dev/"
    },
    {
        name: 'Oriol Tomas website (old)',
        description: 'This portfolio page was developed with Symfony framework.',
        githubLink: 'https://github.com/orioltomas/portfolio'
    }
]

function Projects () {

    // eslint-disable-next-line
    const [ showProjects, setShowProjects ] = useState(projects)

    return (
        <div className="App-projects">
            { showProjects.map((project, index) => 
                <Project key={ index } project={ project } />
            ) }
        </div>
    )
}

export default Projects
