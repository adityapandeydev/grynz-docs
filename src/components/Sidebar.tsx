import { Link, useLocation } from "react-router-dom";

const sections = [
    {
        title: "Getting Started",
        links: [
            { name: "Installation", href: "/docs/getting-started/installation" },
            { name: "Configuration", href: "/docs/getting-started/configuration" },
        ],
    },
    {
        title: "Languages",
        links: [
            { name: "C", href: "/docs/languages/c" },
            { name: "C++", href: "/docs/languages/cpp" },
            { name: "Rust", href: "/docs/languages/rust" },
        ],
    },
];

export default function Sidebar() {
    const location = useLocation();

    return (
        <aside className="w-72 border-r border-gray-800 min-h-screen bg-[#102542]/95">
            <div className="sticky top-0 p-6">
                <Link to="/" className="flex items-center space-x-3 mb-8">
                    <span className="h-8 w-8 rounded-lg bg-[#f87060]"></span>
                    <span className="text-xl font-bold text-white">Grynz</span>
                </Link>
                <nav className="space-y-6">
                    {sections.map((section, index) => (
                        <div key={index} className="space-y-3">
                            <h3 className="font-semibold text-gray-900 dark:text-gray-200">
                                {section.title}
                            </h3>
                            <ul className="space-y-2">
                                {section.links.map((link, idx) => (
                                    <li key={idx}>
                                        <Link 
                                            className={`block px-3 py-2 rounded-md text-sm ${
                                                location.pathname === link.href
                                                    ? "bg-[#f87060]/20 text-[#f87060]"
                                                    : "text-gray-400 hover:bg-[#102542]/60"
                                            }`}
                                            to={link.href}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </div>
        </aside>
    );
}
