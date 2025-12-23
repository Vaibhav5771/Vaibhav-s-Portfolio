import useWindowStore from "../../store/window.js";
import {WindowControls} from "#components/index.js";
import WindowWrapper from "#hoc/windowWrapper.jsx";

const TextFile = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;

    if (!data) return null;

    const { name, image, subtitle, description } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2>{name}</h2>
            </div>

            <div className="p-5 space-y-6 bg-white">
                {image && (
                    <img src={image} alt={name} className="w-full h-auto rounded" />
                )}

                {subtitle && (
                    <h3 className="text-xl font-semibold">{subtitle}</h3>
                )}

                {Array.isArray(description) && description.length > 0 && (
                    <div className="space-y-3 text-base text-gray-800 leading-relaxed">
                        {description.map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

const TextFileWindow = WindowWrapper(TextFile, "txtfile");

export default TextFileWindow;
