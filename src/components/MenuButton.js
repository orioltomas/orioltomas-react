function MenuButton () {

    const menuHandle = () => {
        document.querySelector('.App-menu');
    }

    return (
        <button className="App-menu-button" onClick={() => { menuHandle() }}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}

export default MenuButton
