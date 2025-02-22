import Sidebar from "../components/Sidebar";
import DarkModeToggle from "../components/DarkModeToggle";
import Search from "../components/Search";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-white dark:bg-gray-900">
            <div className="hidden md:block">
                <Sidebar />
            </div>
            
            <div className="flex-1">
                <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                    <div className="flex items-center justify-between px-4 py-3">
                        <div className="flex-1 md:w-96">
                            <Search />
                        </div>
                        <div className="flex items-center space-x-4 ml-4">
                            <a 
                                href="https://github.com/adityapandeyde/grynz"
                                className="text-sm sm:text-base text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                            <DarkModeToggle />
                        </div>
                    </div>
                </header>
                <main className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
