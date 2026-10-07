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

    // --- 5.5 27 QUESTIONS. ONE STORY. ---
    const storyQuestions = [
        { q: "What does having your younger brother in your life mean to you?", a: "It's an unexplainable happiness — a true support and companion.", extra: "" },
        { q: "What's one of your earliest memories with your younger brother?", a: "The first time I drove an XL with you when I was in 8th standard.", extra: "<div class='img-placeholder mt-1' style='height: 200px;'>[Memory Photo Placeholder]</div>" },
        { q: "How do you think you've changed over the years?", a: "My looks and attitude have changed drastically.", extra: "<div style='display:flex; justify-content:center; gap:20px; margin-top:20px;'><div class='img-placeholder' style='width:120px; height:120px;'>Then</div><div class='img-placeholder' style='width:120px; height:120px;'>Now</div></div>" },
        { q: "What do you think both of us need to become better brothers?", a: "We need to become more understanding and stronger companions for each other.", extra: "" },
        { q: "Do you remember one of my earliest birthdays?", a: "Your first birthday — that orange dress.", extra: "<div class='img-placeholder mt-1' style='height: 150px; width:150px; margin: 20px auto 0;'>[Childhood Photo]</div>" },
        { q: "What is the strangest thing about sharing your birthday with your younger brother?", a: "First of all, most people don't believe it. Sometimes even I feel strange.", extra: "" },
        { q: "How have you felt about sharing the same birthday over the years?", a: "In childhood, I thought the same birthday thing was different and I was happy about it. But for the past four years, sometimes I feel like having separate dates would be better.", extra: "<p style='font-size:1rem; font-style:italic; margin-top:15px; color:var(--text-secondary);'>Some feelings change as we grow. That's part of growing up too.</p>" },
        { q: "What funny thing did you do to prove that we actually share the same birthday? 😂", a: "While giving chocolate to people, I would bring my ID card too as proof. 😂", extra: "" },
        { q: "What would your perfect birthday celebration look like?", a: "A grand get-together with my close ones and your close ones, at a pleasant place.", extra: "" },
        { q: "What is the most unforgettable birthday you've celebrated?", a: "The birthday I celebrated in 2006. 😹 The most unexpected things happened — sudden rain, Mom's sudden pain, and somehow, the gain.", extra: "" },
        { q: "When you imagined yourself at 27, what did you think your life would look like?", a: "I imagined myself as a supervisor-type guy with social status at 27.", extra: "<div style='margin-top:20px; font-weight:bold; letter-spacing:2px;'>EXPECTATION @ 27</div>" },
        { q: "How different is reality from what you imagined?", a: "I didn't expect I would struggle this much — with a mysterious mindset and a minimal successful life.", extra: "<div style='margin-top:20px; font-weight:bold; letter-spacing:2px; color:var(--text-secondary);'>REALITY @ 27</div>" },
        { q: "What is something people have said about you that made you genuinely proud?", a: "People have mentioned me as a trustworthy, trouble-solving therapist. At that moment, I felt like, wow...<br><br>I have also put in a lot of effort to build myself and make my family more sophisticated with limited resources. It's not everyone's cup of tea.", extra: "<div style='margin-top:20px; font-family:var(--font-serif); font-style:italic;'>Maybe success isn't always measured by a title.</div>" },
        { q: "What are your biggest dreams?", a: "To become an artist and a billionaire.", extra: "<div class='mt-2'><span class='q-visual-text' style='animation-delay: 0.2s;'>ARTIST.</span><span class='q-visual-text' style='animation-delay: 1.2s;'>BILLIONAIRE.</span><span class='q-visual-text accent-color' style='animation-delay: 2.2s;'>WHY NOT BOTH?</span></div>" },
        { q: "What would you tell your younger self about your twenties?", a: "Don't waste your time. Nothing is more expensive or important than time. Take care of your physical and mental health. Stay away from unwanted things. Learn lots of skills. Make money. Be happy.", extra: "<div class='mt-2'><span class='q-visual-text' style='animation-delay: 0.2s; font-size:1.8rem;'>TIME MATTERS.</span><span class='q-visual-text' style='animation-delay: 0.7s; font-size:1.8rem;'>TAKE CARE OF YOURSELF.</span><span class='q-visual-text' style='animation-delay: 1.2s; font-size:1.8rem;'>LEARN. BUILD. MAKE MONEY.</span><span class='q-visual-text accent-color' style='animation-delay: 1.7s; font-size:1.8rem;'>BE HAPPY.</span></div>" },
        { q: "What do you want from the next seven years?", a: "I think the next seven years are very important to me. At least I want to try once whatever I want to become and shine at it. And I also need proper quality time with my family.", extra: "<div style='margin-top:20px;'><span class='accent-color' style='font-size:2rem; font-weight:bold; font-family:var(--font-serif);'>27 &rarr; 34</span><br><span style='font-style:italic;'>The next seven chapters.</span></div>" },
        { q: "What's something embarrassing that still makes you cringe?", a: "A lot of embarrassing things happened in my life. Most of them don't even have a proper reason.", extra: "<button class='secondary-btn mt-2' style='font-size:0.8rem; pointer-events:none;'>Probably better left unexplained 😂</button>" },
        { q: "What was one of the hardest things you experienced growing up?", a: "In childhood, people thought I was good at nothing. No success, no words of appreciation — just so much comparison. Imagine a situation where they are speaking like this to someone.", extra: "<div style='margin-top:20px; font-family:var(--font-serif); font-style:italic; color:var(--text-secondary);'>Things people said. Things he survived.</div>" },
        { q: "What's one of your own weaknesses that you know you need to work on?", a: "My laziness, lethargy, and unwanted anger.", extra: "<div style='margin-top:20px; font-family:var(--font-serif); font-style:italic;'>Knowing what to change is already part of changing.</div>" },
        { q: "What is one thing you're currently struggling with?", a: "My current struggles and pain because I didn't use my time well in the past.", extra: "<div style='margin-top:20px; font-family:var(--font-serif); font-weight:bold; letter-spacing:2px;'><span style='color:var(--text-secondary)'>PAST</span> &rarr; LESSONS &rarr; <span class='accent-color'>NEXT</span></div>" },
        { q: "If you had to describe your younger brother in Tamil, what would you call him?", a: "Arumayana aarvakolarana arivana sagotharar.", extra: "<div style='margin-top:15px; font-style:italic; color:var(--text-secondary);'>\"A wonderful, curious, intelligent brother.\"</div>" },
        { q: "If you had to describe your younger brother in one brutally honest sentence? 😂", a: "Paavam daa avan.", extra: "" },
        { q: "If your life so far were a story, what would you call it?", a: "A Story of a Self-Made Survivor", extra: "<div class='mt-2'><span class='q-visual-text' style='animation-delay: 1s; font-size:1.5rem; color:var(--text-secondary);'>27 chapters written.</span><span class='q-visual-text' style='animation-delay: 2.5s; font-size:1.5rem; color:var(--text-secondary);'>Many more waiting to be written.</span></div>" }
    ];

    const qSlider = document.getElementById('questions-slider');
    const qCurrent = document.getElementById('q-current');
    const btnPrev = document.getElementById('prev-question');
    const btnNext = document.getElementById('next-question');
    const qOutro = document.getElementById('questions-outro');
    
    let currentQIndex = 0;

    if(qSlider) {
        // Build cards
        storyQuestions.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = `q-card ${index === 0 ? 'active' : ''}`;
            card.dataset.index = index;
            card.innerHTML = `
                <div class="q-question serif">"${item.q}"</div>
                <div class="q-answer">${item.a}</div>
                ${item.extra ? `<div class="q-extra">${item.extra}</div>` : ''}
            `;
            qSlider.appendChild(card);
        });

        const cards = qSlider.querySelectorAll('.q-card');

        const updateCards = () => {
            cards.forEach((card, i) => {
                card.className = 'q-card';
                if (i === currentQIndex) {
                    card.classList.add('active');
                    // Retrigger animations if any by forcing reflow
                    const extras = card.querySelectorAll('.q-visual-text');
                    extras.forEach(el => {
                        el.style.animation = 'none';
                        el.offsetHeight; // trigger reflow
                        el.style.animation = null; 
                    });
                } else if (i < currentQIndex) {
                    card.classList.add('prev');
                }
            });
            qCurrent.innerText = String(currentQIndex + 1).padStart(2, '0');
            
            btnPrev.disabled = currentQIndex === 0;
            
            if (currentQIndex === storyQuestions.length - 1) {
                btnNext.innerText = "Finish";
            } else {
                btnNext.innerText = "Next \u2192";
            }
        };

        btnNext.addEventListener('click', () => {
            if (currentQIndex < storyQuestions.length - 1) {
                currentQIndex++;
                updateCards();
            } else {
                // Show Outro
                qSlider.style.display = 'none';
                document.querySelector('.questions-nav').style.display = 'none';
                document.querySelector('.question-progress').style.display = 'none';
                qOutro.classList.remove('hidden');
                setTimeout(() => qOutro.classList.add('active'), 50);
            }
        });

        btnPrev.addEventListener('click', () => {
            if (currentQIndex > 0) {
                currentQIndex--;
                updateCards();
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            const section = document.getElementById('questions-story');
            if(section && section.getBoundingClientRect().top < window.innerHeight && section.getBoundingClientRect().bottom > 0) {
                if(e.key === 'ArrowRight' && currentQIndex < storyQuestions.length) btnNext.click();
                if(e.key === 'ArrowLeft' && currentQIndex > 0) btnPrev.click();
            }
        });
    }

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
