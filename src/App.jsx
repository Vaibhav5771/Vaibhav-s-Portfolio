import React from 'react'
import gsap from 'gsap';
import {NavBar, Dock, Welcome, Home} from "#components";
import { Draggable } from "gsap/Draggable";
import {
    Terminal,
    Resume,
    Finder,
    TextFileWindow,
    ImageFileWindow,
    Contact,
    TrashWindow,
    GalleryWindow,
    VideoPlayerWindow,
} from "#windows";





gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <NavBar />
            <Welcome />
            <Dock />
            <Terminal />
            <Resume />
            <Finder />
            <TrashWindow />
            <VideoPlayerWindow />
            <TextFileWindow />
            <ImageFileWindow />
            <GalleryWindow />
            <Contact />
            <Home />
        </main>
    )
}
export default App
