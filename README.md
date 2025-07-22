🚀 VIDEO STREAMING APP -USING WEBRTC

A full-stack real-time video streaming application using *WebRTC* for peer-to-peer communication.

This app allows users to create or join rooms and communicate with live video directly from their browsers.

🚀 Features

- Real-time video streaming via WebRTC
- Peer-to-peer connection (no server load for video/audio)
- Room creation & joining using room IDs
- Frontend built with *Vite + Vanilla JS* (or React — you can adjust this)
- Backend signaling server using *Node.js + Express*
- WebSocket-based signaling using *Socket.io*

## 📁 Project Structure

1. Video-Streaming-WebRtc/
├── backend/
│ ├── server.js
│ ├── package.json
├── frontend/
│ ├── index.html
│ ├── src/
│ ├── vite.config.js
├── README.md

🛠 Tech Stack

 🌐 Frontend
- *Vite* – Lightning-fast build tool
- *JavaScript* – Core scripting for app logic
- *HTML5 & CSS3* – Layout and styling
- (Optional: React.js – If your UI is component-based)

 🧠 Backend
- *Node.js* – Runtime environment
- *Express.js* – Web framework for routing and server-side logic

📡 Real-Time Communication
- *WebRTC* – Peer-to-peer video/audio streaming
- *Socket.io* – Signaling channel for WebRTC connection establishment

 ⚙ Tools & Dev Environment
- *VS Code* – Development IDE
- *npm* – Package management
- *Git & GitHub* – Version control and collaboration

2. TO Run the Backend
 - cd Backend
 - npm install
 - nodemmon server.js

 Server will start on http://localhost:5000

3. To Run the Frontend
  - cd frontend
  - npm install
  - npm run dev

Frontend runs on http://localhost:5173

🧪 How It Works

  - User A opens the app and creates a room.

  - A unique room ID is generated.

  - User B enters the same room ID to join.

  - The backend handles signaling using WebSockets.

  - WebRTC establishes a direct P2P connection between users.

  - Video and audio stream directly between peers.

🙋‍♂ Author
  Ansul Jain

🤝 Contributing
Pull requests are welcome. For any major change, open an issue to discuss the idea first.

🚀 Upcoming Features

✅ Add a waiting screen before the second user joins.

✅ Add user names or IDs for personalized calls.

✅ Add recording functionality (using MediaRecorder API).

✅ Add mute/unmute and video on/off toggle.

✅ Mobile responsiveness and layout improvements.