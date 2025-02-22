import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
    code: string;
    language?: string;
}

export default function CodeBlock({ code, language = 'bash' }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group">
            <pre className={`language-${language} bg-[#102542]/30 rounded-lg p-4 overflow-x-auto`}>
                <code className="text-sm text-gray-100">{code}</code>
            </pre>
            <button
                onClick={copyToClipboard}
                className="absolute top-2 right-2 p-2 rounded-md bg-[#102542]/80 text-[#f87060] opacity-0 group-hover:opacity-100 transition-opacity"
            >
                {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
        </div>
    );
}