# SymptomCheck AI - Professional Health Assistant Website

A complete, professional single-page website with an AI-powered symptom checker chatbot built with Gemini API. Features a modern, animated UI with multiple content sections and a floating chatbot widget in the bottom-right corner.

## Features

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

## Quick Start

1. Open `index.html` in a web browser
2. Explore the full landing page with all sections
3. Click the floating chat icon in the bottom-right corner
4. Start chatting about your symptoms

## File Structure

```
single page/
├── index.html          # Main HTML structure
├── style.css           # Styling and animations
├── script.js           # JavaScript logic and API integration
└── README.md           # Documentation
```

## Page Sections

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

## Animations & Effects

- **Background**: 4 floating gradient circles
- **Scroll Animations**: Fade-in and slide-up effects on all sections
- **Hover Effects**: Transform, scale, and glow effects on cards
- **Counter Animation**: Numbers count up when scrolled into view
- **Typing Indicator**: Animated dots while AI is responding
- **Smooth Scrolling**: Navigation links scroll smoothly to sections
- **Floating Cards**: Medical info cards float around hero illustration
- **Pulse Effects**: Heartbeat icon and status indicators pulse
- **Arrow Animation**: Pulsing arrows in "How It Works" section

## API Configuration

The chatbot uses Google's Gemini API with the following settings:
- **Model**: gemini-2.0-flash
- **Temperature**: 0.7 (balanced creativity)
- **Max Output Tokens**: 200 (ensures short responses)
- **Safety Settings**: Medium and above blocking for all categories

## Browser Compatibility

- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

## Disclaimer

⚠️ **Important**: This chatbot is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider for medical concerns.

## Customization

### Change Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
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
Edit the `SYSTEM_PROMPT` in `script.js` to change the chatbot's behavior.

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations
- **JavaScript (ES6+)**: Async/await, fetch API
- **Google Gemini API**: AI responses
- **Font Awesome 6**: Professional icons
- **Google Fonts**: Inter typeface

## License

Free to use for personal and commercial projects.

---

**Created with ❤️ for better health awareness**
