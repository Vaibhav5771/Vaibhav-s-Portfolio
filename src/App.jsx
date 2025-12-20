import React from 'react'
import gsap from 'gsap';
import { NavBar, Dock , Welcome} from "#components";
import { Draggable } from "gsap/Draggable";
import { Terminal } from "#windows";
import TerminalWindow from "#windows/Terminal.jsx";

gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <NavBar />
            <Welcome />
            <Dock />
            <Terminal />
        </main>
    )
}
export default App
