import type { Message } from "./Message";

export type ChatWindowProps = {
    aiIsThinking: boolean;
    messages: Message[];
    onSend: (question: string) => void;
};
