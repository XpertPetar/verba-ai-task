//import { FiSend } from "react-icons/fi";
//import { IoSend } from "react-icons/io5";
import { MdSend } from "react-icons/md";
import { useState, type JSX } from "react";
import type { ChatInputFieldProps } from "../types/ChatInputFieldProps";

export default function ChatInputField({ onSend }: ChatInputFieldProps): JSX.Element {
    const [question, setQuestion] = useState<string>("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        onSend(question);
        setQuestion("");
    }

    return (
        <form className="w-full flex" onSubmit={handleSubmit}>
            <input
                className="flex-grow bg-gray-600 rounded-l-full py-3 px-6 border-none outline-none text-white"
                placeholder="Ask Verba AI..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            ></input>
            <button type="submit" className="bg-gray-600 text-white rounded-r-full py-3 px-6">
                <MdSend />
            </button>
        </form>
    );
}
