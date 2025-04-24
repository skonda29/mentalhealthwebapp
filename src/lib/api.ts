import { getSessionId } from './session';

export async function sendChatMessage(message: string) {
  const sessionId = getSessionId();
  const response = await fetch('http://127.0.0.1:8000/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      session_id: sessionId,
      query: message,
    }),
  });
  const data = await response.json();
  return data.response;
}
