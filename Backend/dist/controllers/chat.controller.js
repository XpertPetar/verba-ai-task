import { getMockAIResponse } from "../services/chat.service.js";
export function handleChat(req, res) {
    const { message } = req.body;
    if (!message) {
        return res.status(400).json({
            error: "Message is required"
        });
    }
    const aiResponse = getMockAIResponse(message);
    res.json({
        reply: aiResponse,
        timestamp: new Date().toISOString()
    });
}
