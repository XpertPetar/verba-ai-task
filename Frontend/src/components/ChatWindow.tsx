import { useEffect, useState, type JSX } from "react";
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
    return (
        <div className="bg-dark-theme h-screen flex flex-col">
            <h1 className="text-xl font-bold text-white p-4">Verba AI</h1>
            <div className="flex flex-col flex-1 mx-auto w-full max-w-4xl my-6">
                <div className="flex-1 flex flex-col overflow-y-auto my-2 space-y-2 px-3">
                    {messages.map((msg, idx) => (
                        <>
                            <div
                                key={idx}
                                className={`bg-gray-600 rounded-full py-2 break-words 
            ${
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
                                className={`text-xs text-gray-300 ${
                                    msg.from === "user" ? "self-end" : "self-start"
                                }`}
                            >
                                {new Date(msg.timestamp).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    hour12: false
                                })}
                            </div>
                        </>
                    ))}
                    {aiIsThinking && <TypingIndicator />}
                </div>
                <ChatInputField onSend={onSend} />
            </div>
        </div>
    );
}
