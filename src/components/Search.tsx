import { useState } from "react";
import { useNavigate } from "react-router-dom";

const docs = [
    { name: "Installation", href: "/docs/getting-started/installation" },
    { name: "Configuration", href: "/docs/getting-started/configuration" },
    { name: "C Language", href: "/docs/languages/c" },
    { name: "C++ Language", href: "/docs/languages/cpp" },
    { name: "Rust Language", href: "/docs/languages/rust" },
];

export default function Search() {
    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const filteredDocs = docs.filter((doc) =>
        doc.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="relative w-full md:w-96">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full px-3 sm:px-4 py-2 text-sm border rounded-lg dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setIsOpen(true);
                    }}
                    onFocus={() => setIsOpen(true)}
                />
            </div>
            {isOpen && query && (
                <div className="absolute w-full mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 z-50">
                    <ul className="py-2">
                        {filteredDocs.map((doc) => (
                            <li 
                                key={doc.href}
                                className="px-3 sm:px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                                onClick={() => {
                                    navigate(doc.href);
                                    setIsOpen(false);
                                    setQuery("");
                                }}
                            >
                                {doc.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
