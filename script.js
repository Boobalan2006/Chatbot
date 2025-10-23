// Gemini API Configuration
const GEMINI_API_KEY = 'AIzaSyDf8-vSXxw7g68RF4cdARIIikeERFG7G94';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

// DOM Elements
const chatWindow = document.getElementById('chatWindow');
const chatToggleBtn = document.getElementById('chatToggleBtn');
const minimizeChatBtn = document.getElementById('minimizeChatBtn');
const chatMessages = document.getElementById('chatMessages');
const chatForm = document.getElementById('chatForm');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');
const typingIndicator = document.getElementById('typingIndicator');
const clearChatBtn = document.getElementById('clearChatBtn');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const scrollTopBtn = document.getElementById('scrollTopBtn');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-link');
const startChatBtn = document.getElementById('startChatBtn');
const learnMoreBtn = document.getElementById('learnMoreBtn');
const ctaChatBtn = document.getElementById('ctaChatBtn');

// State
let conversationHistory = [];
let isProcessing = false;
let isChatOpen = false;

// System Prompt for Symptom Checker
const SYSTEM_PROMPT = `You are a professional medical symptom checker AI assistant. Your role is to:

1. ONLY respond to health and symptom-related questions
2. Provide SHORT, CONCISE answers (2-4 sentences maximum)
3. Use bullet points for lists (maximum 3-4 items)
4. If asked non-medical questions, politely redirect: "I can only help with health and symptom-related questions. Please describe your symptoms."
5. Always remind users to consult a healthcare professional for serious concerns
6. Be empathetic but brief
7. Avoid long paragraphs - keep responses digestible

Format your responses clearly and concisely. Do not provide lengthy explanations.`;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeChat();
    setupEventListeners();
    autoResizeTextarea();
});

function initializeChat() {
    conversationHistory = [
        {
            role: 'user',
            parts: [{ text: SYSTEM_PROMPT }]
        },
        {
            role: 'model',
            parts: [{ text: 'Understood. I will only respond to symptom and health-related questions with short, concise answers.' }]
        }
    ];
}

function setupEventListeners() {
    // Chat toggle
    chatToggleBtn.addEventListener('click', toggleChat);
    minimizeChatBtn.addEventListener('click', toggleChat);

    // Form submission
    chatForm.addEventListener('submit', handleSubmit);

    // Textarea auto-resize
    messageInput.addEventListener('input', () => {
        autoResizeTextarea();
    });

    // Clear chat
    clearChatBtn.addEventListener('click', clearChat);

    // Enter to send (Shift+Enter for new line)
    messageInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            chatForm.dispatchEvent(new Event('submit'));
        }
    });

    // Scroll to top button
    window.addEventListener('scroll', handleScroll);
    scrollTopBtn.addEventListener('click', scrollToTop);

    // Mobile menu
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                    nav.classList.remove('active');
                }
            }
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // CTA buttons
    if (startChatBtn) startChatBtn.addEventListener('click', openChat);
    if (learnMoreBtn) learnMoreBtn.addEventListener('click', () => {
        document.querySelector('#features').scrollIntoView({ behavior: 'smooth' });
    });
    if (ctaChatBtn) ctaChatBtn.addEventListener('click', openChat);

    // Animate stats on scroll
    animateStatsOnScroll();

    // Intersection Observer for animations
    setupScrollAnimations();
}

function autoResizeTextarea() {
    messageInput.style.height = 'auto';
    messageInput.style.height = Math.min(messageInput.scrollHeight, 120) + 'px';
}

// Chat widget functions
function toggleChat() {
    isChatOpen = !isChatOpen;
    chatWindow.classList.toggle('active');
    
    if (isChatOpen) {
        messageInput.focus();
        document.querySelector('.chat-badge').style.display = 'none';
    }
}

function openChat() {
    if (!isChatOpen) {
        toggleChat();
    }
}

// Navigation functions
function toggleMobileMenu() {
    nav.classList.toggle('active');
}

function handleScroll() {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Animate stats counter
function animateStatsOnScroll() {
    const stats = document.querySelectorAll('.stat-number');
    let animated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                stats.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    animateValue(stat, 0, target, 2000);
                });
            }
        });
    }, { threshold: 0.5 });

    if (stats.length > 0) {
        observer.observe(stats[0].parentElement.parentElement);
    }
}

function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// Scroll animations
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.feature-card, .service-card, .step-item, .testimonial-card');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

async function handleSubmit(e) {
    e.preventDefault();
    
    const message = messageInput.value.trim();
    
    if (!message || isProcessing) return;
    
    // Open chat if not open
    if (!isChatOpen) {
        openChat();
    }
    
    // Add user message to chat
    addMessage(message, 'user');
    
    // Clear input
    messageInput.value = '';
    autoResizeTextarea();
    
    // Show typing indicator
    showTypingIndicator();
    
    // Disable send button
    isProcessing = true;
    sendBtn.disabled = true;
    
    try {
        // Get AI response
        const response = await getGeminiResponse(message);
        
        // Hide typing indicator
        hideTypingIndicator();
        
        // Add bot response
        addMessage(response, 'bot');
        
    } catch (error) {
        console.error('Error:', error);
        hideTypingIndicator();
        addMessage('I apologize, but I encountered an error. Please try again or rephrase your question.', 'bot');
        showToast('Error connecting to the AI service');
    } finally {
        isProcessing = false;
        sendBtn.disabled = false;
        messageInput.focus();
    }
}

async function getGeminiResponse(userMessage) {
    // Add user message to conversation history
    conversationHistory.push({
        role: 'user',
        parts: [{ text: userMessage }]
    });
    
    const requestBody = {
        contents: conversationHistory,
        generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 200, // Limit response length
        },
        safetySettings: [
            {
                category: "HARM_CATEGORY_HARASSMENT",
                threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
                category: "HARM_CATEGORY_HATE_SPEECH",
                threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
                category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
                category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                threshold: "BLOCK_MEDIUM_AND_ABOVE"
            }
        ]
    };
    
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
    });
    
    if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
        throw new Error('Invalid response from API');
    }
    
    const botResponse = data.candidates[0].content.parts[0].text;
    
    // Add bot response to conversation history
    conversationHistory.push({
        role: 'model',
        parts: [{ text: botResponse }]
    });
    
    // Keep conversation history manageable (last 10 exchanges + system prompt)
    if (conversationHistory.length > 22) {
        conversationHistory = [
            conversationHistory[0], // System prompt
            conversationHistory[1], // System acknowledgment
            ...conversationHistory.slice(-20) // Last 20 messages
        ];
    }
    
    return botResponse;
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const avatarDiv = document.createElement('div');
    avatarDiv.className = 'message-avatar';
    avatarDiv.innerHTML = sender === 'bot' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    // Format the message text (preserve line breaks and basic formatting)
    const formattedText = formatMessage(text);
    contentDiv.innerHTML = formattedText;
    
    messageDiv.appendChild(avatarDiv);
    messageDiv.appendChild(contentDiv);
    
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function formatMessage(text) {
    // Convert markdown-style formatting to HTML
    let formatted = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
        .replace(/\*(.*?)\*/g, '<em>$1</em>') // Italic
        .replace(/\n/g, '<br>'); // Line breaks
    
    // Convert bullet points
    if (formatted.includes('•') || formatted.includes('-')) {
        const lines = formatted.split('<br>');
        let inList = false;
        let result = [];
        
        lines.forEach(line => {
            const trimmed = line.trim();
            if (trimmed.startsWith('•') || trimmed.startsWith('-')) {
                if (!inList) {
                    result.push('<ul>');
                    inList = true;
                }
                result.push(`<li>${trimmed.substring(1).trim()}</li>`);
            } else {
                if (inList) {
                    result.push('</ul>');
                    inList = false;
                }
                if (trimmed) {
                    result.push(`<p>${trimmed}</p>`);
                }
            }
        });
        
        if (inList) {
            result.push('</ul>');
        }
        
        formatted = result.join('');
    }
    
    return formatted;
}

function showTypingIndicator() {
    typingIndicator.classList.add('active');
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTypingIndicator() {
    typingIndicator.classList.remove('active');
}

function clearChat() {
    // Keep only the initial bot message
    const initialMessage = chatMessages.querySelector('.bot-message');
    chatMessages.innerHTML = '';
    chatMessages.appendChild(initialMessage);
    
    // Reset conversation history
    initializeChat();
    
    showToast('Chat cleared');
}

function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
