import { useEffect, useState, useRef, type JSX } from "react";
import ChatInputField from "./ChatInputField";
import type { ChatWindowProps } from "../types/ChatWindowProps";

export function TypingIndicator(): JSX.Element {
    const [dots, setDots] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => (prev + 1) % 4);
        }, 200);
        return () => clearInterval(interval);
    }, []);

    return <div className="self-start text-gray-400">AI is thinking{".".repeat(dots)}</div>;
}

export default function ChatWindow({
    aiIsThinking,
    messages,
    onSend
}: ChatWindowProps): JSX.Element {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, aiIsThinking]);

    return (
        <div className="bg-dark-theme h-screen flex flex-col">
            <h1 className="text-xl font-bold text-white p-4">Verba AI</h1>
            <div className="flex-1 flex flex-col mx-auto w-full max-w-4xl px-3 space-y-2 overflow-y-auto py-2">
                {messages.map((msg, idx) => (
                    <div key={idx} className="flex flex-col">
                        <div
                            className={`bg-gray-600 rounded-full py-2 break-words ${
                                msg.from === "user"
                                    ? "self-end text-white px-4"
                                    : msg.from === "ai"
                                    ? "self-start text-green-400 bg-transparent"
                                    : msg.from === "error"
                                    ? "self-start text-red-400 bg-transparent"
                                    : ""
                            }`}
                        >
                            {msg.text}
                        </div>
                        <div
                            className={`text-xs text-gray-300 py-1 ${
                                msg.from === "user" ? "self-end" : "self-start"
                            }`}
                        >
                            {new Date(msg.timestamp).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: false
                            })}
                        </div>
                    </div>
                ))}

                {aiIsThinking && (
                    <div className="self-start text-gray-400">
                        <TypingIndicator />
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <div className="flex-shrink-0 mx-auto w-full max-w-4xl mt-2 mb-6">
                <ChatInputField onSend={onSend} />
            </div>
        </div>
    );
}
