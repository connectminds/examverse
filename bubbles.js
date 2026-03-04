// Create beautiful floating bubbles for dashboard background
function initBubbles() {
    console.log('Initializing bubbles...');
    
    const bubbleLayer = document.getElementById('bubbleLayer');
    if (!bubbleLayer) {
        console.error('Bubble layer not found!');
        return;
    }
    
    const colors = ['#8b5cf6', '#7c3aed', '#6366f1', '#06b6d4', '#0ea5e9', '#facc15', '#f97316', '#f87171', '#10b981', '#14b8a6', '#ec4899', '#f59e0b'];
    
    function createBubble() {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        const size = Math.random() * 100 + 40; // 40-140px
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const startX = Math.random() * window.innerWidth;
        const startY = window.innerHeight + 50; // Start below viewport
        const delay = Math.random() * 3000;
        const horizontalDrift = Math.random() * 200 - 100; // -100 to 100px drift
        const duration = Math.random() * 15 + 20; // Duration of animation
        
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        bubble.style.left = startX + 'px';
        bubble.style.top = startY + 'px';
        bubble.style.background = randomColor;
        bubble.style.opacity = String(Math.random() * 0.5 + 0.25);
        bubble.style.filter = 'blur(40px)';
        // Enhanced multi-layer glow for sleek effect
        bubble.style.boxShadow = `0 0 ${size * 1.5}px ${randomColor}, 0 0 ${size * 0.75}px ${randomColor}, 0 0 ${size * 2}px rgba(${parseInt(randomColor.slice(1,3), 16)}, ${parseInt(randomColor.slice(3,5), 16)}, ${parseInt(randomColor.slice(5,7), 16)}, 0.3)`;
        
        bubble.style.animation = `float-bubble ${duration}s linear infinite`;
        bubble.style.animationDelay = (delay / 1000) + 's';
        bubble.style.zIndex = '2';
        
        bubbleLayer.appendChild(bubble);
    }
    
    // Create initial bubbles
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            createBubble();
        }, i * 80);
    }
    
    // Continuously create new bubbles
    setInterval(() => {
        if (bubbleLayer.children.length < 150) {
            createBubble();
        }
    }, 1000);
    
    console.log('Bubbles initialized successfully');
}

// Add CSS animation for bubbles
const style = document.createElement('style');
const keyframeHeight = window.innerHeight + 200;
style.textContent = `
    @keyframes float-bubble {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        5% {
            opacity: 0.5;
        }
        95% {
            opacity: 0.5;
        }
        100% {
            transform: translateY(-${keyframeHeight}px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize bubbles when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBubbles);
} else {
    initBubbles();
}

