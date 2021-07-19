function Project ({ project }) {
    return (
        <div className="App-project">
            <div className="App-project__name">{ project.name }</div>
            <div className="App-project__description">{ project.description }</div>
            <a className="App-project__button" href={ project.githubLink } target="_blank" rel="noreferrer">
                <span></span>
                <span></span>
                CODE
            </a>
            { project.appLink !== undefined ? 
            <a className="App-project__button App-project__button--app" href={ project.appLink } target="_blank" rel="noreferrer">
                <span></span>
                <span></span>
                TRY IT
            </a> : '' }
        </div>
    )
}

export default Project
