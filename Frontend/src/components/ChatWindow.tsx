import type { JSX } from "react";
import ChatInputField from "./ChatInputField";
import type { ChatWindowProps } from "../types/ChatWindowProps";

export default function ChatWindow({ messages, onSend }: ChatWindowProps): JSX.Element {
    return (
        <div className="bg-dark-theme h-screen flex flex-col">
            <h1 className="text-xl font-bold text-white p-4">Verba AI</h1>
            <div className="flex flex-col flex-1 mx-auto w-full max-w-4xl my-6">
                <div className="flex-1 flex flex-col overflow-y-auto my-2 space-y-2 px-3">
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`bg-gray-600 rounded-full py-2 px-4 break-words 
            ${
                msg.from === "user"
                    ? "self-end text-white"
                    : msg.from === "ai"
                    ? "self-start text-green-400 bg-transparent"
                    : msg.from === "error"
                    ? "self-start text-red-400 bg-transparent"
                    : ""
            }`}
                        >
                            {msg.text}
                        </div>
                    ))}
                </div>
                <ChatInputField onSend={onSend} />
            </div>
        </div>
    );
}
