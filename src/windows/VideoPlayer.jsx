import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";
import { WindowControls } from "#components/index.js";
import WindowWrapper from "#hoc/windowWrapper.jsx";
import { videos } from "#constants/index.js";
import useWindowStore from "../../store/window.js";

const VideoPlayer = () => {
    const [index, setIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    const stripRef = useRef(null);
    const thumbRefs = useRef([]);

    // Only autoplay when the video window is actually open
    const isOpen = useWindowStore((state) => state.windows.video?.isOpen);

    const prev = () => setIndex((i) => (i === 0 ? videos.length - 1 : i - 1));
    const next = () => setIndex((i) => (i === videos.length - 1 ? 0 : i + 1));

    const current = videos[index];

    // autoplay=1 only when window is open, otherwise src has no autoplay
    const embedUrl = isOpen
        ? `https://www.youtube.com/embed/${current.youtubeId}?autoplay=1&rel=0&modestbranding=1&color=white`
        : `https://www.youtube.com/embed/${current.youtubeId}?autoplay=0&rel=0&modestbranding=1&color=white`;

    // Auto-scroll thumbnail strip to keep active thumb visible
    useEffect(() => {
        const strip = stripRef.current;
        const thumb = thumbRefs.current[index];
        if (!strip || !thumb) return;

        const stripRect = strip.getBoundingClientRect();
        const thumbRect = thumb.getBoundingClientRect();
        const offset =
            thumbRect.left - stripRect.left - stripRect.width / 2 + thumbRect.width / 2;

        strip.scrollBy({ left: offset, behavior: "smooth" });
    }, [index]);

    return (
        <>
            {/* ── Title Bar ── */}
            <div id="window-header" style={{ width: isExpanded ? "900px" : "680px" }}>
                <WindowControls target="video" />
                <h2>{current.title}</h2>
            </div>

            {/* ── YouTube iFrame ── */}
            <div className="video-frame-wrapper" style={{ width: isExpanded ? "900px" : "680px" }}>
                <iframe
                    key={`${current.youtubeId}-${isOpen}`}
                    src={embedUrl}
                    title={current.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>

            {/* ── Description ── */}
            <div className="video-info-row" style={{ width: isExpanded ? "900px" : "680px" }}>
                <p>{current.description}</p>
            </div>

            {/* ── Bottom Controls ── */}
            <div className="video-bottom-bar" style={{ width: isExpanded ? "900px" : "680px" }}>

                {/* Thumbnail strip */}
                <div className="video-thumb-strip" ref={stripRef}>
                    {videos.map((v, i) => (
                        <button
                            key={v.id}
                            ref={(el) => (thumbRefs.current[i] = el)}
                            onClick={() => setIndex(i)}
                            className={`video-thumb-btn ${i === index ? "active" : ""}`}
                            title={v.title}
                        >
                            <div className="video-thumb-img-wrap">
                                <img
                                    src={`https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg`}
                                    alt={v.title}
                                />
                                {i === index && <div className="video-thumb-highlight" />}
                            </div>
                            <span className="video-thumb-label">{v.title}</span>
                        </button>
                    ))}
                </div>

                {/* Prev / Counter / Next */}
                <div className="video-nav-row">
                    <button onClick={prev} className="video-nav-btn">
                        <ChevronLeft size={14} />
                        <span>Prev</span>
                    </button>
                    <span className="video-counter">
                        {index + 1} / {videos.length}
                    </span>
                    <button onClick={next} className="video-nav-btn">
                        <span>Next</span>
                        <ChevronRight size={14} />
                    </button>
                </div>

            </div>
        </>
    );
};

const VideoPlayerWindow = WindowWrapper(VideoPlayer, "video");
export default VideoPlayerWindow;