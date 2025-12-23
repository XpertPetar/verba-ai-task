export type Message = {
    from: "user" | "ai" | "error";
    text: string;
};
