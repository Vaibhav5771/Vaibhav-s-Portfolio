import React, { Fragment } from "react";
import { Search } from "lucide-react";
import { WindowControls } from "#components/index.js";
import WindowWrapper from "#hoc/windowWrapper.jsx";
import { locations } from "#constants/index.js";
import useWindowStore from "../../store/window.js";
import clsx from "clsx";

const Trash = () => {
    const { openWindow } = useWindowStore();
    const trashLocation = locations.trash;

    const openItem = (item) => {
        if (item.fileType === 'pdf') return openWindow("resume");
        if (item.kind === 'folder') return; // Trash folders typically don't navigate
        if (['fig', 'url'].includes(item.fileType) && item.href) return window.open(item.href, "_blank")
        openWindow(`${item.fileType}${item.kind}`, item);
    };

    const renderList = (name, items) => (
        <div>
            <h3>{name}</h3>
            <ul>
                {items.map((item) => (
                    <li
                        key={item.id}
                        className={clsx(
                            item.id === trashLocation.id ? "active" : "not-active",
                        )}
                    >
                        <img src={item.icon} className="w-4" alt={item.name} />
                        <p className="text-sm font-medium truncate">{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <Fragment>
            {/* Header */}
            <div id="window-header">
                <WindowControls target="trash" />
                <Search className="icon" />
            </div>

            {/* Body – Following Finder structure */}
            <div className="bg-white flex h-full">
                {/* Sidebar */}
                <div className="sidebar">
                    {renderList('Favorites', [trashLocation])}
                </div>

                {/* Content */}
                <ul className="content">
                    {trashLocation.children.map((item) => (
                        <li
                            key={item.id}
                            className={item.position}
                            onClick={() => openItem(item)}
                        >
                            <img src={item.icon} alt={item.name} />
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
};

const TrashWindow = WindowWrapper(Trash, "trash");
export default TrashWindow;