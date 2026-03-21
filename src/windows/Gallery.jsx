import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { WindowControls } from "#components/index.js";
import WindowWrapper from "#hoc/windowWrapper.jsx";
import { gallery } from "#constants/index.js";

const Gallery = () => {
    const [index, setIndex] = useState(0);

    const prev = () =>
        setIndex((i) => (i === 0 ? gallery.length - 1 : i - 1));

    const next = () =>
        setIndex((i) => (i === gallery.length - 1 ? 0 : i + 1));

    return (
        <>
            <div id="window-header">
                <WindowControls target="gallery" />
                <h2 className="font-bold text-center flex-1">Gallery</h2>
                <div className="w-6"></div>
            </div>

            <div className="gallery-viewer">
                <button onClick={prev} className="nav left">
                    <ChevronLeft />
                </button>

                <div className="image-container">
                    <img
                        src={gallery[index].img}
                        alt={`Gallery ${index + 1}`}
                    />
                </div>

                <button onClick={next} className="nav right">
                    <ChevronRight />
                </button>
            </div>
        </>
    );
};

const GalleryWindow = WindowWrapper(Gallery, "gallery");
export default GalleryWindow;