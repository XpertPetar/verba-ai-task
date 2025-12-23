export function mockAi(message) {
    const text = message.toLowerCase();
    if (text.includes("test")) {
        return "What are you testing? Everything works";
    }
    else if (text === "are you real") {
        return "no";
    }
    return "Mock AI response";
}
