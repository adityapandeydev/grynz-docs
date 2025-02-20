import { useParams } from "react-router-dom";
import DocsLayout from "../layout/DocsLayout";
import { motion } from "framer-motion";

export default function Docs() {
    const { "*": docPath } = useParams();
    
    // This would normally come from your content management system or markdown files
    const content = getDocContent(docPath);

    return (
        <DocsLayout>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="prose prose-lg dark:prose-invert max-w-none"
            >
                <h1 className="text-4xl font-bold mb-8">
                    {content.title}
                </h1>
                <div className="space-y-4">
                    {content.sections.map((section, index) => (
                        <section key={index} className="mb-12">
                            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                {section.content}
                            </p>
                            {section.code && (
                                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                                    <code>{section.code}</code>
                                </pre>
                            )}
                        </section>
                    ))}
                </div>
            </motion.div>
        </DocsLayout>
    );
}

// Helper function to get content based on path
function getDocContent(path: string | undefined) {
    // This is a placeholder. You should implement proper content management
    return {
        title: path ? path.split('/').pop()?.replace(/-/g, ' ') : 'Welcome to Grynz Documentation',
        sections: [
            {
                title: 'Getting Started',
                content: 'Grynz is a modern compiler platform designed to make compilation easy and efficient...',
                code: 'grynz init my-project\ncd my-project\ngrynz build'
            },
            // Add more sections as needed
        ]
    };
}
