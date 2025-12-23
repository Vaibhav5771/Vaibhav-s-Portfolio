import React from "react";
import useWindowStore from "../../store/window.js";
import { WindowControls } from "#components/index.js";
import WindowWrapper from "#hoc/windowWrapper.jsx";

const ImageFile = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;

    if (!data) return null;

    const { name, imageUrl } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile" />
                <h2>{name}</h2>
            </div>

            <div className="p-5 bg-white">
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt={name}
                        className="w-full h-auto max-h-[70vh] object-contain rounded"
                    />
                )}
            </div>
        </>
    );
};

const ImageFileWindow = WindowWrapper(ImageFile, "imgfile");

export default ImageFileWindow;
