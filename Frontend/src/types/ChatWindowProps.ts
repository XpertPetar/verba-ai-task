import type { Message } from "./Message";

export type ChatWindowProps = {
    messages: Message[];
    onSend: (question: string) => void;
};
