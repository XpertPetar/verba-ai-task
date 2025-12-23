import type { JSX } from "react";
import ChatWindow from "../components/ChatWindow";
import { useState } from "react";
import type { Message } from "../types/Message";
import axios from "axios";

export default function ChatPage(): JSX.Element {
    const [messages, setMessages] = useState<Message[]>([]);
    const [aiIsThinking, setAiIsThinking] = useState<boolean>(false);

    function askAiQuestion(question: string) {
        if (!question.trim()) return;

        setMessages((prev) => [
            ...prev,
            { from: "user", text: question, timestamp: new Date().toISOString() }
        ]);

        setAiIsThinking(true);
        setAiIsThinking(true);

        setTimeout(() => {
            axios
                .post("http://localhost:3000/api/chat", { message: question })
                .then((response) => {
                    setAiIsThinking(false);
                    setMessages((prev) => [
                        ...prev,
                        {
                            from: "ai",
                            text: response.data.reply,
                            timestamp: response.data.timestamp
                        }
                    ]);
                })
                .catch((error) => {
                    setAiIsThinking(false);
                    setMessages((prev) => [
                        ...prev,
                        {
                            from: "error",
                            text: "Error: AI server error",
                            timestamp: new Date().toISOString()
                        }
                    ]);
                    console.error(error);
                });
        }, 1500);
    }

    return (
        <>
            <ChatWindow
                aiIsThinking={aiIsThinking}
                messages={messages}
                onSend={askAiQuestion}
            ></ChatWindow>
        </>
    );
}
