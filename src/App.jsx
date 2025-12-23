import React from 'react'
import gsap from 'gsap';
import { NavBar, Dock , Welcome} from "#components";
import { Draggable } from "gsap/Draggable";
import {Terminal, Safari, Resume, Finder, TextFileWindow, ImageFileWindow, Contact} from "#windows";




gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <NavBar />
            <Welcome />
            <Dock />
            <Terminal />
            <Safari />
            <Resume />
            <Finder />
            <TextFileWindow />
            <ImageFileWindow />
            <Contact />
        </main>
    )
}
export default App
