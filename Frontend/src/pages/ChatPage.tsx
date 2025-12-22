import type { JSX } from "react";
import ChatWindow from "../components/ChatWindow";
import { useState } from "react";
import type { Message } from "../types/Message";

export default function ChatPage(): JSX.Element {
    const [messages, setMessages] = useState<Message[]>([]);

    function askAiQuestion(question: string) {
        if (!question.trim()) return;
        setMessages((prev) => [...prev, { from: "user", text: question }]);

        //Simulating backend ai response
        setTimeout(() => {
            setMessages((prev) => [...prev, { from: "ai", text: "Mock AI reply" }]);
        }, 500);
    }

    return (
        <>
            <ChatWindow messages={messages} onSend={askAiQuestion}></ChatWindow>
        </>
    );
}
