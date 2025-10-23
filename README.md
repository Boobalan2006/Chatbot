# SymptomCheck AI - Professional Health Assistant Website

<div align="center">

![SymptomCheck AI](https://img.shields.io/badge/AI-Powered-blue)
![Status](https://img.shields.io/badge/Status-Active-success)
![License](https://img.shields.io/badge/License-MIT-green)

</div>

A complete, professional single-page website with an AI-powered symptom checker chatbot built with Google's Gemini API. Features a modern, animated UI with multiple content sections and a floating chatbot widget in the bottom-right corner.

## 📑 Table of Contents

- [Screenshots](#-screenshots)
- [Features](#-features)
- [Quick Start](#-quick-start)
- [File Structure](#-file-structure)
- [Page Sections](#-page-sections)
- [Animations & Effects](#-animations--effects)
- [API Configuration](#️-api-configuration)
- [Browser Compatibility](#-browser-compatibility)
- [Technologies Used](#️-technologies-used)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Disclaimer](#️-disclaimer)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

## 📸 Screenshots

<!-- Add your screenshots here -->
![Hero Section](screenshots/hero.png)
![Chatbot Interface](screenshots/chatbot.png)

## 🌟 Features

### Website Features
🏠 **Complete Landing Page**: Hero section, features, services, testimonials, and footer
💬 **Floating Chatbot Widget**: Small icon in bottom-right corner that expands to chat window
🎨 **Rich Animations**: Floating backgrounds, scroll animations, hover effects, and transitions
📊 **Animated Statistics**: Counter animations for key metrics
🎯 **Smooth Navigation**: Scroll-to-section navigation with active link highlighting
📱 **Fully Responsive**: Mobile-first design that works on all devices
⬆️ **Scroll to Top**: Convenient button to return to top of page

### Chatbot Features
✨ **AI-Powered**: Uses Google's Gemini 2.0 Flash model for intelligent responses
🎯 **Symptom-Focused**: Only responds to health and symptom-related questions
📝 **Concise Answers**: Provides short, digestible responses (2-4 sentences)
🔒 **Safe**: Built-in content safety filters
⚡ **Fast**: Instant responses with typing indicators
🎭 **Professional Icons**: Uses Font Awesome for clean, medical-themed icons
💾 **Conversation History**: Maintains context across multiple messages

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Google Gemini API key (for chatbot functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/symptomcheck-ai.git
   cd symptomcheck-ai
   ```

2. **Configure API Key**
   - Open `script.js`
   - Replace `YOUR_API_KEY_HERE` with your Google Gemini API key
   ```javascript
   const API_KEY = 'your-actual-api-key-here';
   ```

3. **Run the application**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

4. **Start using**
   - Explore the full landing page with all sections
   - Click the floating chat icon in the bottom-right corner
   - Start chatting about your symptoms

### Getting a Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Get API Key"
4. Copy your API key and paste it in `script.js`

## 📁 File Structure

```
symptomcheck-ai/
├── index.html          # Main HTML structure with semantic markup
├── style.css           # Complete styling with animations and responsive design
├── script.js           # JavaScript logic, API integration, and chatbot functionality
└── README.md           # Project documentation
```

## 📄 Page Sections

### 1. Hero Section
- Eye-catching title with gradient text
- Call-to-action buttons
- Animated statistics (50,000+ consultations, 98% accuracy, 24/7 availability)
- Floating medical cards with icons
- Large animated doctor illustration

### 2. Features Section
6 feature cards highlighting:
- AI-Powered Analysis
- 24/7 Availability
- 100% Confidential
- Instant Response
- Natural Language Processing
- Health Tracking

### 3. Services Section
3 detailed service cards:
- Symptom Analysis
- Health Guidance
- Medical Information

### 4. How It Works Section
3-step process visualization:
1. Describe Symptoms
2. AI Analysis
3. Get Insights

### 5. Testimonials Section
3 user testimonials with 5-star ratings

### 6. Call-to-Action Section
Large button to start consultation

### 7. Footer
- Company information
- Quick links
- Legal links
- Contact information
- Social media links

### 8. Floating Chatbot Widget
- Small chat icon in bottom-right corner
- Notification badge
- Expands to full chat window
- Minimize/close functionality
- Clear chat option

## ✨ Animations & Effects

- **Background**: 4 floating gradient circles
- **Scroll Animations**: Fade-in and slide-up effects on all sections
- **Hover Effects**: Transform, scale, and glow effects on cards
- **Counter Animation**: Numbers count up when scrolled into view
- **Typing Indicator**: Animated dots while AI is responding
- **Smooth Scrolling**: Navigation links scroll smoothly to sections
- **Floating Cards**: Medical info cards float around hero illustration
- **Pulse Effects**: Heartbeat icon and status indicators pulse
- **Arrow Animation**: Pulsing arrows in "How It Works" section

## ⚙️ API Configuration

The chatbot uses Google's Gemini API with the following settings:
- **Model**: gemini-2.0-flash
- **Temperature**: 0.7 (balanced creativity)
- **Max Output Tokens**: 200 (ensures short responses)
- **Safety Settings**: Medium and above blocking for all categories

## 🌐 Browser Compatibility

- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations, flexbox, and grid
- **JavaScript (ES6+)**: Async/await, fetch API, DOM manipulation
- **Google Gemini API**: AI-powered responses
- **Font Awesome 6**: Professional medical and UI icons
- **Google Fonts**: Inter typeface for modern typography

## 🎨 Customization

### Change Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
    --accent-color: #10b981;
    --background: #0f172a;
    /* ... other colors */
}
```

### Modify Response Length
In `script.js`, adjust the `maxOutputTokens`:
```javascript
generationConfig: {
    maxOutputTokens: 200, // Increase for longer responses
}
```

### Update System Prompt
Edit the `SYSTEM_PROMPT` in `script.js` to change the chatbot's behavior and personality.

### Change Animations
Modify animation durations and effects in `style.css`:
```css
.feature-card {
    transition: all 0.3s ease; /* Adjust timing */
}
```

## 🚀 Deployment

### Deploy to GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select branch (usually `main`) and root folder
4. Click Save
5. Your site will be live at `https://yourusername.github.io/symptomcheck-ai`

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://www.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Click "Deploy site"

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

## ⚠️ Disclaimer

**Important**: This chatbot is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider for medical concerns.

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

## 📝 License

This project is licensed under the MIT License - feel free to use it for personal and commercial projects.

## 🙏 Acknowledgments

- Google Gemini API for AI capabilities
- Font Awesome for icons
- Google Fonts for typography

## 📧 Contact

For questions or support, please open an issue on GitHub or contact:
- Email: support@symptomcheck.ai
- Website: [Your Website]

---

<div align="center">

**Created with ❤️ for better health awareness**

⭐ Star this repo if you find it helpful!

</div>
