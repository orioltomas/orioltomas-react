function Project ({ project }) {
    return (
        <div className="App-project">
            <div className="App-project__name">{ project.name }</div>
            <div className="App-project__description">{ project.description }</div>
            <a className="App-project__button" href={ project.link } target="_blank" rel="noreferrer">
                Check it
            </a>
        </div>
    )
}

export default Project
