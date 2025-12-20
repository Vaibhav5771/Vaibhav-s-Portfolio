import WindowWrapper from "#hoc/windowWrapper.jsx";
import { techStack } from "#constants/index.js";
import { Check, Flag } from "lucide-react";
import {WindowControls} from "#components/index.js";

const Terminal = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="terminal" />
                <h2>Tech Stack</h2>
            </div>

            <div className="techstack">
                <p>
                    <span className="font-bold">@vaibhav % </span>
                    show tech stack
                </p>

                {/* header row */}
                <div className="label flex gap-8 font-semibold mb-2">
                    <p className="w-32">Category</p>
                    <p>Technologies</p>
                </div>

                {/* content */}
                <ul className="content space-y-3">
                    {techStack.map(({ category, items }) => (
                        <li key={category} className="flex gap-4 items-start">
                            <Check className="check mt-1" size={18} />

                            <div className="flex gap-8">
                                <h3 className="w-32">{category}</h3>
                                <p>
                                    {items.map((item, i) => (
                                        <span key={item}>
                      {item}
                                            {i < items.length - 1 && ", "}
                    </span>
                                    ))}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>

                {/* footer */}
                <div className="footnote mt-4 text-sm">
                    <p className="flex items-center gap-2">
                        <Check size={16} />
                        5 of 5 stacks loaded successfully (100%)
                    </p>

                    <p className="flex items-center gap-2 text-black">
                        <Flag size={14} fill="black" />
                        Render time: 6ms
                    </p>
                </div>
            </div>
        </>
    );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");
export default TerminalWindow;
