import useWindowStore from "../../store/window.js";
import { WindowControls } from "#components/index.js";
import WindowWrapper from "#hoc/windowWrapper.jsx";

const TextFile = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;

    if (!data) return null;

    const { name, image, subtitle, description, features, techStack, status } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2>{name}</h2>
            </div>

            <div className="txtfile-body">

                {/* Hero image */}
                {image && (
                    <img src={image} alt={name} className="txtfile-hero" />
                )}

                {/* Title + status badge */}
                <div className="txtfile-title-row">
                    {subtitle && <h3 className="txtfile-subtitle">{subtitle}</h3>}
                    {status && (
                        <span className="txtfile-status-badge">{status}</span>
                    )}
                </div>

                {/* Description paragraphs */}
                {Array.isArray(description) && description.length > 0 && (
                    <div className="txtfile-description">
                        {description.map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                    </div>
                )}

                {/* Features list */}
                {Array.isArray(features) && features.length > 0 && (
                    <div className="txtfile-section">
                        <p className="txtfile-section-title">Key Features</p>
                        <ul className="txtfile-features">
                            {features.map((f, idx) => (
                                <li key={idx}>
                                    <span className="txtfile-feature-dot" />
                                    <span>{f}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Tech stack badges */}
                {Array.isArray(techStack) && techStack.length > 0 && (
                    <div className="txtfile-section">
                        <p className="txtfile-section-title">Tech Stack</p>
                        <div className="txtfile-tags">
                            {techStack.map((tech, idx) => (
                                <span key={idx} className="txtfile-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </>
    );
};

const TextFileWindow = WindowWrapper(TextFile, "txtfile");
export default TextFileWindow;