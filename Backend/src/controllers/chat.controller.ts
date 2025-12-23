import { getMockAIResponse } from "../services/chat.service.js";
import { Request, Response } from "express";

export function handleChat(req: Request, res: Response) {
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
