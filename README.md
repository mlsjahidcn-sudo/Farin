# 🌸 Farin's AI Buddy

A beautiful, personalized web app built just for **Farin** — her own AI buddy to help with studies, practice Chinese, share love quotes, and chat anytime.

## 💜 What's Inside

| Feature | Description |
|---------|-------------|
| **💬 Smart Chat Buddy** | Ask anything! The buddy responds with love quotes, Chinese help, motivation, or friendly chat |
| **🇨🇳 Chinese Learning Hub** | 6 beginner lessons: Greetings, Numbers, Phrases, Family, Colors, Food |
| **🔊 Audio Pronunciation** | Click the 🔊 button to hear native Chinese pronunciation |
| **📝 Interactive Quizzes** | Test knowledge after each lesson |
| **💜 Love Quotes** | Beautiful quotes from you + famous romantic quotes |
| **🌺 Flower of the Day** | Daily rotating flowers with meanings (she loves flowers!) |
| **📊 Progress Tracking** | Tracks words learned, quizzes taken, and daily streaks |
| **🏆 Achievements** | Unlock badges as she learns |

## 🚀 How to Use (With Backend)

1. **Install dependencies** — Open terminal in this folder and run:
   ```bash
   npm install
   ```
2. **Add your DeepSeek API key** — Copy `.env.example` to `.env` and paste your key:
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` and replace `sk-your-deepseek-api-key-here` with your real key from [platform.deepseek.com](https://platform.deepseek.com/api_keys)
3. **Start the server**:
   ```bash
   npm start
   ```
4. **Open the gift** — Go to `http://localhost:3000` in your browser (Chrome recommended)
5. **Send it to Farin** — You can:
   - Host it online (Railway, Render, VPS, etc.)
   - Run it on your local network and share your IP
   - Zip the folder and email it (she'll need to run `npm start` too)
   - Put it on a USB as a surprise gift

## ✏️ How to Personalize

Open `index.html` in any text editor and look for these sections:

### 1. The Opening Letter (~line 340)
```javascript
"I built this little AI buddy just for you..."
```
Change this to your own personal message!

### 2. Love Quotes (~line 400)
Add your own personal messages:
```javascript
{ text: "Your custom message here", author: "From [Your Name] 💜" }
```

### 3. The Signature (~line 345)
```javascript
"With all my love,<br>Jahid 💜"
```
Change to your name (Jahid) or a sweet nickname.

## 🎁 How to Gift This

### Option A: Online Link (Easiest)
1. Create a free account at [Netlify](https://www.netlify.com/)
2. Drag & drop the `farin-buddy` folder
3. Get a live link like `https://farin-buddy-123.netlify.app`
4. Send her the link with a sweet message!

### Option B: Offline Gift (More Personal)
1. Put the `farin-buddy` folder on a cute USB drive
2. Decorate the USB with a flower sticker
3. Write a small card: "Open `index.html` to meet your new buddy 💜"

### Option C: Email
1. Zip the `farin-buddy` folder
2. Email it with subject: "A little something just for you 🌸"

## 🤖 DeepSeek AI Integration

The backend automatically proxies chat requests to DeepSeek using your server-side API key. Farin never sees or needs to enter the key — it's completely hidden on the backend.

**If the backend is not running or the API key is missing**, the buddy gracefully falls back to built-in smart responses.

To get a key:
1. Go to [platform.deepseek.com](https://platform.deepseek.com/api_keys) and create a free API key
2. Paste it into your `.env` file as `DEEPSEEK_API_KEY`

## 🛠️ Tech Details

- **Backend** — Node.js + Express proxy server hides the DeepSeek API key
- **Frontend** — Single HTML file, responsive design
- **Local Storage** — Saves her progress, streaks, and achievements
- **DeepSeek API** — Real AI conversations through secure backend proxy
- **Text-to-Speech** — Uses browser's built-in Chinese voice
- **Responsive** — Works on phone, tablet, and desktop
- **Falls back gracefully** — Local buddy mode works even without the backend

## 🌟 Bonus Gift Ideas to Pair With This

Since Farin loves flowers, consider pairing the digital gift with:

1. **A real flower delivery** — Order her favorite flowers to arrive the same day she opens the app
2. **A handwritten letter** — The digital one is sweet, but a real handwritten note is timeless
3. **A flower-themed journal** — For her Chinese study notes
4. **A potted plant** — Something that grows, just like your feelings 💜
5. **A playlist** — Curate songs that remind you of her, name it "Farin's Playlist 🌸"

---

*Built with love by Jahid, for Farin.* 🌸💜
