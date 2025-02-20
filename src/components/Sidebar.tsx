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
        <aside className="w-72 border-r border-gray-200 dark:border-gray-800 min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="sticky top-0 p-6">
                <Link to="/" className="flex items-center space-x-3 mb-8">
                    <span className="h-8 w-8 rounded-lg bg-blue-600"></span>
                    <span className="text-xl font-bold dark:text-white">Grynz</span>
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
                                                    ? "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100"
                                                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
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
