# 🤖 Chatbot Setup Guide - Calon Hafiz

## Features

- ✨ Floating chat button (bottom-right)
- 💬 WhatsApp-like chat interface
- 🧠 Powered by Google Gemini AI
- ☁️ Serverless deployment on Vercel
- 📱 Responsive design
- 🔔 Unread message notifications

## Prerequisites

1. **Gemini API Key**

   - Go to: https://makersuite.google.com/app/apikey
   - Create a new API key
   - Copy the key

2. **Vercel Account**
   - Sign up at: https://vercel.com
   - Install Vercel CLI (optional): `npm i -g vercel`

## Installation Steps

### 1. Install Dependencies

```bash
npm install @google/generative-ai
```

### 2. Environment Variables

#### Local Development

Create `.env` file in root:

```env
GEMINI_API_KEY=your_actual_api_key_here
```

#### Vercel Production

1. Go to your Vercel project dashboard
2. Navigate to: **Settings** → **Environment Variables**
3. Add variable:
   - Name: `GEMINI_API_KEY`
   - Value: Your Gemini API key
   - Environment: **Production**, **Preview**, **Development**

### 3. Deploy to Vercel

#### Option A: Auto Deploy (Recommended)

1. Push code to GitHub
2. Import project to Vercel
3. Vercel will auto-detect and deploy

#### Option B: Manual Deploy

```bash
# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## Project Structure

```
├── api/
│   └── chat.js              # Vercel serverless function
├── src/
│   ├── components/
│   │   └── common/
│   │       └── FloatingChat.vue  # Chat widget component
│   └── App.vue              # Main app (chat added here)
├── .env.example             # Environment template
└── README_CHATBOT.md        # This file
```

## How It Works

### 1. **FloatingChat.vue**

- Floating button at bottom-right
- Click to open/close chat
- Send messages to API
- Display responses

### 2. **API Route (/api/chat.js)**

- Receives chat messages
- Sends to Gemini AI with context
- Returns AI responses
- Runs as Vercel serverless function

### 3. **Gemini AI Context**

The AI is trained with Calon Hafiz information:

- Business details
- Programs offered
- Contact information
- Location
- Features

## API Endpoint

### POST /api/chat

**Request:**

```json
{
  "message": "Bagaimana cara daftar?",
  "history": [
    {
      "role": "user",
      "content": "Halo",
      "timestamp": "10:30"
    }
  ]
}
```

**Response:**

```json
{
  "response": "Untuk mendaftar, Anda bisa...",
  "timestamp": "2024-01-14T10:30:00.000Z"
}
```

## Customization

### Change Chat Position

In `FloatingChat.vue`:

```vue
<!-- Change from bottom-right to bottom-left -->
<div class="fixed bottom-6 left-6 z-50">
```

### Modify AI Personality

In `api/chat.js`, edit `systemContext`:

```javascript
const systemContext = `Your custom context here...`;
```

### Change Colors

Update Tailwind classes in `FloatingChat.vue`:

- Primary color: `bg-primary` → `bg-blue-500`
- Hover effects: `hover:bg-primary-dark`

## Testing Locally

### 1. Install Vercel CLI

```bash
npm i -g vercel
```

### 2. Run Development Server

```bash
# Start Vercel dev server
vercel dev

# Or use Vite with proxy
npm run dev
```

### 3. Test Chat

1. Open browser: `http://localhost:3000`
2. Click chat button (bottom-right)
3. Send a test message

## Troubleshooting

### Chat button not showing

- Check if `FloatingChat.vue` is imported in `App.vue`
- Check browser console for errors

### API not responding

- Verify `GEMINI_API_KEY` is set in Vercel
- Check Vercel function logs
- Ensure API route is at `/api/chat.js`

### CORS errors

- Vercel handles CORS automatically
- If issues persist, add CORS headers in `chat.js`

### Rate limiting

- Gemini API has rate limits
- Implement caching if needed
- Add user message throttling

## Production Checklist

- [ ] Environment variable set in Vercel
- [ ] API key is valid
- [ ] Chat button visible on all pages
- [ ] Messages send/receive correctly
- [ ] Mobile responsive
- [ ] No console errors

## Support

For issues or questions:

- Email: halo@calontahfidz.com
- WhatsApp: 085339915411

## License

© 2024 Calon Hafiz Indonesia

---

Made with ❤️ for Calon Hafiz Indonesia
