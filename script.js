document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. CINEMATIC OPENING SEQUENCE ---
    const bgMusic = document.getElementById('bg-music');
    
    setTimeout(() => { showElement('.step-1'); }, 1000);
    setTimeout(() => { hideElement('.step-1'); showElement('.step-2'); }, 3500);
    setTimeout(() => { hideElement('.step-2'); showElement('.step-3'); }, 6000);
    setTimeout(() => { hideElement('.step-3'); showElement('.step-4'); }, 8500);

    function showElement(selector) {
        const el = document.querySelector(selector);
        if(el) {
            el.style.display = 'block';
            setTimeout(() => { el.style.opacity = '1'; el.style.transition = 'opacity 1.5s ease'; }, 50);
        }
    }
    function hideElement(selector) {
        const el = document.querySelector(selector);
        if(el) {
            el.style.opacity = '0';
            setTimeout(() => { el.style.display = 'none'; }, 1500);
        }
    }

    // Begin Button
    document.getElementById('begin-btn').addEventListener('click', () => {
        document.getElementById('the-birthday').scrollIntoView({ behavior: 'smooth' });
        // Attempt to play music (browsers may block without interaction)
        try {
            bgMusic.volume = 0.3;
            // bgMusic.play(); // Uncomment when you add the actual audio file
        } catch(e) {}
    });

    // --- 2. SCROLL REVEAL ANIMATIONS ---
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        revealElements.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // --- 3. DYNAMIC FACTS CARDS (Section 4) ---
    // REPLACE: Edit these 27 facts
    const facts = [
        "Your weird habit of checking the fridge 3 times.",
        "That time you tried to cook and burnt water.",
        "Your secret talent for whistling loud.",
        "How you pretend not to care but always do.",
        "The way you always let me win when we were kids.",
        "Your obsession with that one old t-shirt.",
        "How you sneeze exactly 3 times.",
        "Fact 8 placeholder",
        "Fact 9 placeholder",
        "Fact 10 placeholder",
        "Fact 11 placeholder",
        "Fact 12 placeholder",
        "Fact 13 placeholder",
        "Fact 14 placeholder",
        "Fact 15 placeholder",
        "Fact 16 placeholder",
        "Fact 17 placeholder",
        "Fact 18 placeholder",
        "Fact 19 placeholder",
        "Fact 20 placeholder",
        "Fact 21 placeholder",
        "Fact 22 placeholder",
        "Fact 23 placeholder",
        "Fact 24 placeholder",
        "Fact 25 placeholder",
        "Fact 26 placeholder",
        "Fact 27 placeholder"
    ];

    const cardsContainer = document.querySelector('.fact-cards-container');
    if(cardsContainer) {
        // Just generate the first 9 for visual appeal, or all 27 if you want
        // Limiting to 12 for better grid display, but you can change to 27
        const displayFacts = facts.slice(0, 12); 
        
        displayFacts.forEach((fact, index) => {
            const card = document.createElement('div');
            card.className = 'fact-card';
            card.innerHTML = `
                <div class="card-inner">
                    <div class="card-front">${index + 1}</div>
                    <div class="card-back">${fact}</div>
                </div>
            `;
            card.addEventListener('click', () => {
                card.classList.toggle('flipped');
            });
            cardsContainer.appendChild(card);
        });
    }

    // --- 4. QUIZ LOGIC (Section 5) ---
    // Simple progression
    const quizQuestions = document.querySelectorAll('.quiz-question');
    const quizBtns = document.querySelectorAll('.quiz-btn');
    
    // Add more questions programmatically or handle simple click progression
    quizBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const currentQ = this.closest('.quiz-question');
            currentQ.classList.remove('active');
            
            // Assume we just have 1 question in HTML for simplicity, 
            // if more are added, show next. Else show result.
            const nextQ = currentQ.nextElementSibling;
            if(nextQ && nextQ.classList.contains('quiz-question')) {
                nextQ.classList.add('active');
            } else {
                document.getElementById('quiz-result').classList.remove('hidden');
                document.getElementById('quiz-result').style.animation = 'fadeIn 1s';
            }
        });
    });

    // --- 5. 27 POINTS (Section 7) ---
    // REPLACE: Edit these points
    const pointsList = [
        "Your patience with me",
        "Your sense of humour",
        "The way you protect our family",
        "Your quiet confidence",
        "How you handle tough situations",
        "Simply being my brother"
    ];
    
    const pointsContainer = document.getElementById('points-container');
    if(pointsContainer) {
        pointsList.forEach((text, i) => {
            const div = document.createElement('div');
            div.className = 'point-item';
            div.innerHTML = `<span>${String(i+1).padStart(2, '0')} —</span> ${text}`;
            pointsContainer.appendChild(div);
        });
    }

    // Animate points on scroll
    window.addEventListener('scroll', () => {
        const points = document.querySelectorAll('.point-item');
        points.forEach(point => {
            const top = point.getBoundingClientRect().top;
            if(top < window.innerHeight - 50) {
                point.classList.add('visible');
            }
        });
    });

    // --- 6. FINAL SURPRISE SEQUENCE (Section 11) ---
    setTimeout(() => { showElement('.f-step-1'); }, 1000);
    // In actual implementation, we might trigger this via IntersectionObserver when user reaches final section
    const finalSectionObserver = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            setTimeout(() => { showElement('.f-step-1'); }, 500);
            setTimeout(() => { hideElement('.f-step-1'); showElement('.f-step-2'); }, 3000);
            setTimeout(() => { hideElement('.f-step-2'); showElement('.f-step-3'); }, 5500);
            setTimeout(() => { hideElement('.f-step-3'); showElement('.f-step-4'); }, 8000);
            finalSectionObserver.disconnect();
        }
    }, { threshold: 0.5 });
    
    const finalSection = document.getElementById('final-message');
    if(finalSection) finalSectionObserver.observe(finalSection);

    // Surprise Button
    document.getElementById('surprise-btn').addEventListener('click', () => {
        const overlay = document.getElementById('surprise-overlay');
        const heartbeat = document.querySelector('.heartbeat');
        const content = document.querySelector('.surprise-content');
        
        overlay.style.display = 'flex';
        heartbeat.style.display = 'block';
        
        // Play celebration audio properly now that user interacted
        try {
            bgMusic.volume = 1.0;
            // bgMusic.play(); 
        } catch(e) {}
        
        setTimeout(() => {
            heartbeat.style.display = 'none';
            content.style.display = 'block';
            content.style.animation = 'fadeIn 2s';
            
            // Fire Confetti
            fireConfetti();
            
        }, 2500);
    });

    function fireConfetti() {
        if(typeof confetti !== 'undefined') {
            var duration = 15 * 1000;
            var animationEnd = Date.now() + duration;
            var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 3000 };

            function randomInRange(min, max) {
                return Math.random() * (max - min) + min;
            }

            var interval = setInterval(function() {
                var timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                var particleCount = 50 * (timeLeft / duration);
                
                confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
                confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
            }, 250);
        }
    }
});

// Global modal functions
function openLightbox(imgSrc, title, caption) {
    // Uncomment these when you have real images
    // document.getElementById('lightbox-img').src = imgSrc;
    document.getElementById('lightbox-title').innerText = title;
    document.getElementById('lightbox-caption').innerText = caption;
    document.getElementById('lightbox').style.display = 'flex';
}
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function openEnvelope(sender, msg) {
    document.getElementById('env-sender').innerText = "From " + sender;
    document.getElementById('env-msg').innerText = msg;
    document.getElementById('envelope-modal').style.display = 'flex';
}
function closeEnvelope() {
    document.getElementById('envelope-modal').style.display = 'none';
}

function revealChapter(el) {
    el.classList.remove('blurred');
    const hiddenText = el.querySelector('.hidden-text');
    if(hiddenText) {
        hiddenText.innerText = "The next adventure...";
    }
}

function openVideo() {
    document.getElementById('video-modal').style.display = 'flex';
    // document.getElementById('bday-video').play();
}
function closeVideo() {
    document.getElementById('video-modal').style.display = 'none';
    // document.getElementById('bday-video').pause();
}
