import React, { useState } from 'react';
import '../App.scss';
import NavBar from '../components/NavBar/NavBar'
import TopBar from '../components/TopBar/TopBar'
import BottomBar from '../components/BottomBar/BottomBar'
import LangSelect from '../components/LangSelect/LangSelect'
import SwitchMode from '../components/SwitchMode/SwitchMode'
import Home from '../components/MainPart/Home/Home'
import Logo from '../components/Logo/Logo'

const MainPage = () => {
    const [mainPart, setMainPart] = useState(<Home />)
    const [topText, setTopText] = useState("Nicolas Yang | Portfolio")

    return (
        <div className="App">
            <video id="background-video" loop autoPlay>

                <source src="https://static.videezy.com/system/resources/previews/000/041/249/original/4K_2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <header>
                <Logo />
                <TopBar text={topText} />
                <SwitchMode />
            </header>
            <main>
                <NavBar setTopText={setTopText} setMainPart={setMainPart} />
                {mainPart}
            </main>
            <footer>
                <LangSelect />
                <BottomBar />
            </footer>
        </div>
    );
}

export default MainPage
