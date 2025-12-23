import type { JSX } from "react";
import ChatWindow from "../components/ChatWindow";
import { useState } from "react";
import type { Message } from "../types/Message";
import axios from "axios";

export default function ChatPage(): JSX.Element {
    const [messages, setMessages] = useState<Message[]>([]);

    function askAiQuestion(question: string) {
        if (!question.trim()) return;
        setMessages((prev) => [...prev, { from: "user", text: question }]);

        //Simulating backend ai response
        setTimeout(() => {
            axios
                .post("http://localhost:3000/api/chat", { message: question })
                .then((response) => {
                    setMessages((prev) => [...prev, { from: "ai", text: response.data.reply }]);
                })
                .catch((error) => {
                    setMessages((prev) => [
                        ...prev,
                        { from: "error", text: "Error: AI server error" }
                    ]);
                    console.error(error);
                });
        }, 500);
    }

    return (
        <>
            <ChatWindow messages={messages} onSend={askAiQuestion}></ChatWindow>
        </>
    );
}
