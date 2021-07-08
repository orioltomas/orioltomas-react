import React, {useState} from 'react'
import About from './About'
import Projects from './Projects'

function Tabs ({ anchorId }) {
    const [ tab, setTab ] = useState('about-me')

    const handleBtn = (tab) => {
        setTab(tab);
    }

    let aboutTabClasses, projectsTabClasses;
    aboutTabClasses = projectsTabClasses = "App-tabs__tab";
    if (tab === 'about-me') {
        aboutTabClasses += " active";
    } else {
        projectsTabClasses += " active";
    }


    return (
        <div id={ anchorId } className="App-tabs">
            <div className="App-tabs__header">
                <button className={ aboutTabClasses } onClick={ () => handleBtn('about-me') }>About me</button>
                <button className={ projectsTabClasses } onClick={ () => handleBtn('projects') }>Projects</button>
            </div>
            <div className="App-tabs__content">
                { tab === 'about-me' ? <About /> : <Projects /> }
            </div>
        </div>
    )
}

export default Tabs
