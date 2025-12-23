# **Verba AI Chat App**

A web-based chat interface with a mock AI backend. Users can send messages and the AI will answer with simple rule based logic based on the user message.

---

## **Tech Stack**

-   **Frontend:** React + TypeScript + TailwindCSS
-   **Backend:** Node.js + Express

---

## **How to Run the App**

### **Backend**

1. Navigate to the backend folder:

```bash
cd Backend
npm install
npm run dev
```

### **Frontend**

2. Navigate to the frontend folder:

```bash
cd Frontend
npm install
npm run dev
```

3. Open the app in your browser (usually http://localhost:5173)

---

## **How This Would Integrate with a Real AI Agent**

1. Replace the mock response logic with an API call to an AI service like OpenAI.

2. Forward the user's message to the AI API and retrieve its response.

3. Return the AI's response to the frontend as JSON.

4. Optionally, store all messages and previous chats in a database for persistent history across sessions.
