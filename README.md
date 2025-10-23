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
- [Animations & Effects](#-animations--effects)
- [Quick Start](#-quick-start)
- [API Configuration](#️-api-configuration)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

## 📸 Screenshots

<!-- Add your screenshots here -->
![Hero Section](screenshots/hero.png)
![Chatbot Interface](screenshots/chatbot.png)

## 🌟 Features

✨ **AI-Powered Chatbot** - Google Gemini 2.0 Flash for intelligent health responses  
🎨 **Rich Animations** - 15+ smooth animations including floating backgrounds, scroll effects, and hover interactions  
📱 **Fully Responsive** - Mobile-first design that works perfectly on all devices  
🔒 **Safe & Private** - Content safety filters, no data storage, client-side processing  
⚡ **Fast & Lightweight** - Pure HTML/CSS/JS with no heavy frameworks  
🎯 **Smart Navigation** - Smooth scrolling, active section highlighting, sticky header  
📊 **Animated Statistics** - Counter animations for key metrics  
💬 **Floating Chat Widget** - Minimizable chatbot in bottom-right corner  
♿ **Accessible** - WCAG AA compliant with keyboard navigation  
🌐 **Cross-Browser** - Works on Chrome, Firefox, Safari, Edge

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


## ✨ Animations & Effects

### Background Animations
- **Floating Gradient Circles**: 4 animated gradient orbs that continuously float across the background
- **Blur Effect**: Gaussian blur creates a dreamy, modern aesthetic
- **Infinite Loop**: Smooth, continuous animation using CSS keyframes
- **Color Transitions**: Gradients shift between primary and secondary colors

### Scroll-Based Animations
- **Fade-In Effects**: Elements smoothly fade in as they enter viewport
- **Slide-Up Motion**: Content slides up from below with staggered delays
- **Intersection Observer**: Efficient detection of elements entering viewport
- **Staggered Timing**: Sequential animation of multiple elements for visual flow

### Interactive Hover Effects
- **Card Transformations**: 
  - Scale up on hover (1.05x)
  - Smooth transitions (0.3s ease)
  - Box shadow enhancement
  - Glow effects on borders
- **Button Animations**:
  - Color transitions
  - Scale transformations
  - Icon rotations
  - Ripple effects
- **Navigation Links**:
  - Underline slide-in effect
  - Color fade transitions
  - Active state indicators

### Counter Animations
- **Incremental Counting**: Numbers animate from 0 to target value
- **Easing Function**: Smooth acceleration and deceleration
- **Trigger on Scroll**: Activates when statistics section is visible
- **Duration Control**: Customizable animation speed (2 seconds default)

### Chatbot Animations
- **Typing Indicator**: 
  - 3 animated dots
  - Wave motion effect
  - Opacity pulsing
  - Continuous loop while AI processes
- **Message Entrance**: 
  - Slide-in from bottom
  - Fade-in effect
  - Smooth opacity transition
- **Chat Window**:
  - Slide-up entrance
  - Scale transformation
  - Fade-in backdrop
  - Smooth minimize/maximize

### Floating Elements
- **Medical Cards**: 
  - Continuous floating motion
  - Different speeds for depth perception
  - Rotation on hover
  - Shadow animations
- **Hero Illustration**:
  - Gentle bobbing motion
  - Infinite animation loop
  - Smooth easing

### Pulse & Heartbeat Effects
- **Heartbeat Icon**: 
  - Rhythmic scaling animation
  - Color pulse effect
  - Medical theme enhancement
- **Status Indicators**:
  - Pulsing dot animation
  - Color transitions
  - Attention-grabbing effect
- **Notification Badge**:
  - Scale pulse
  - Color glow

### Navigation Animations
- **Smooth Scroll**: 
  - Eased scrolling to sections
  - Customizable scroll behavior
  - Active link highlighting
- **Mobile Menu**:
  - Slide-in animation
  - Backdrop fade
  - Transform transitions
- **Scroll-to-Top Button**:
  - Fade-in when scrolling down
  - Rotate icon on hover
  - Smooth scroll to top

### Arrow & Direction Indicators
- **Step Arrows**: 
  - Horizontal sliding motion
  - Opacity pulsing
  - Directional flow indication
- **Call-to-Action Arrows**:
  - Bounce animation
  - Color transitions
  - Attention direction

### Loading States
- **Skeleton Screens**: Shimmer effect for loading content
- **Progress Indicators**: Animated progress bars
- **Spinner Animations**: Rotating loader icons

## ⚙️ API Configuration

The chatbot uses Google's Gemini API with the following settings:
- **Model**: gemini-2.0-flash
- **Temperature**: 0.7 (balanced creativity)
- **Max Output Tokens**: 200 (ensures short responses)
- **Safety Settings**: Medium and above blocking for all categories


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

/* Adjust floating speed */
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); } /* Change distance */
}

/* Modify animation duration */
.circle-1 {
    animation: float 20s ease-in-out infinite; /* Change speed */
}
```

### Add New Sections
To add a new section to the page:

1. **HTML Structure** (`index.html`):
```html
<section id="new-section" class="new-section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">New Section Title</h2>
        </div>
        <!-- Your content here -->
    </div>
</section>
```

2. **CSS Styling** (`style.css`):
```css
.new-section {
    padding: 100px 0;
    background: var(--background);
}
```

3. **Navigation Link** (in header):
```html
<a href="#new-section" class="nav-link">
    <i class="fas fa-icon"></i>
    <span>New Section</span>
</a>
```

### Modify Chatbot Behavior
Customize the AI's personality in `script.js`:

```javascript
const SYSTEM_PROMPT = `You are a friendly health assistant.
Your new instructions here...
Keep responses under 3 sentences.`;
```

## 🐛 Troubleshooting

**Chatbot not responding?**
- Check API key in `script.js`
- Verify internet connection
- Check browser console (F12) for errors

**Animations not working?**
- Clear browser cache
- Ensure JavaScript is enabled
- Try a different browser

**CORS errors?**
- Use a local server: `python -m http.server 8000`
- Or deploy to a web host

## 🚀 Deployment

**GitHub Pages**: Settings → Pages → Select branch → Save  
**Netlify**: Import from GitHub → Deploy  
**Vercel**: New Project → Import repo → Deploy


## ⚠️ Disclaimer

**Important**: This chatbot is for informational purposes only and is not a substitute for professional medical advice. Always consult healthcare professionals for medical concerns.

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit (`git commit -am 'Add feature'`)
5. Push (`git push origin feature/improvement`)
6. Create a Pull Request

## 📝 License

MIT License - Free for personal and commercial use.

---

<div align="center">

**Created with ❤️ for better health awareness**

⭐ Star this repo if you find it helpful!

</div>
