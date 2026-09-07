// ============================================================
//  BTS × ARMY 14th ANNIVERSARY - COMPLETE JAVASCRIPT
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    // ============================================================
    // 1. OVERLAY - DOOR OPENING ANIMATION
    // ============================================================
    const overlay = document.getElementById('overlay');
    const doorLeft = document.getElementById('doorLeft');
    const doorRight = document.getElementById('doorRight');
    const overlayContent = document.getElementById('overlayContent');
    const enterBtn = document.getElementById('enterBtn');
    const doorFrame = document.querySelector('.overlay-door-frame');
    const doorHint = document.querySelector('.overlay-door-hint');

    let isDoorOpen = false;
    let isEntered = false;

    // Function to open doors
    function openDoors() {
        if (isDoorOpen) return;

        isDoorOpen = true;
        console.log('🚪 Doors opening...');

        // Open the doors with 3D effect
        doorLeft.classList.add('open');
        doorRight.classList.add('open');

        // Hide the hint
        if (doorHint) {
            doorHint.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            doorHint.style.opacity = '0';
            doorHint.style.transform = 'translateX(-50%) scale(0.8)';
            setTimeout(() => {
                doorHint.style.display = 'none';
            }, 500);
        }

        // Show content behind doors
        setTimeout(() => {
            overlayContent.classList.add('visible');
            console.log('✅ Content revealed!');
        }, 600);
    }

    // Function to close overlay and enter main site
    function closeOverlay() {
        if (isEntered) return;
        isEntered = true;
        
        console.log('🎉 Entering the ARMY!');
        overlay.classList.add('hidden');
        document.body.style.overflow = 'auto';

        // Trigger celebration effect
        setTimeout(() => {
            createCelebration();
        }, 300);
    }

    // --- Event Listeners ---

    // 1. Click on the door hint (CLICK TO OPEN)
    if (doorHint) {
        doorHint.addEventListener('click', function(e) {
            e.stopPropagation();
            if (!isDoorOpen) {
                openDoors();
            }
        });
    }

    // 2. Click on the door frame (anywhere on the doors)
    if (doorFrame) {
        doorFrame.addEventListener('click', function(e) {
            // Don't trigger if clicking on the hint
            if (e.target.closest('.overlay-door-hint')) return;
            // Don't trigger if clicking on content (text/button area)
            if (e.target.closest('.overlay-content')) return;
            if (!isDoorOpen) {
                openDoors();
            }
        });
    }

    // 3. "ENTER THE ARMY" BUTTON
    if (enterBtn) {
        enterBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('🔵 Enter button clicked! isDoorOpen:', isDoorOpen);
            
            if (!isDoorOpen) {
                // Doors are closed - open them first
                openDoors();
            } else {
                // Doors are open - enter the site!
                closeOverlay();
            }
        });
    }

    // 4. Click on overlay content - DO NOT BLOCK BUTTON
    if (overlayContent) {
        overlayContent.addEventListener('click', function(e) {
            // Only prevent closing the doors, but don't block button clicks
            e.stopPropagation();
        });
    }

    // 5. Keyboard support - press Enter or Space
    document.addEventListener('keydown', function(e) {
        if ((e.key === 'Enter' || e.key === ' ') && !overlay.classList.contains('hidden')) {
            if (!isDoorOpen) {
                openDoors();
            } else {
                closeOverlay();
            }
        }
    });

    console.log('💜 BTS Logo Door loaded - Click the door or "Click to Open"! 💜');

    // ============================================================
    // 2. NAVIGATION TOGGLE (Mobile)
    // ============================================================
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // ============================================================
    // 3. NAVBAR SCROLL EFFECT
    // ============================================================
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

// ============================================================
// REAL-TIME COUNTUP - SINCE JUNE 13, 2013
// ============================================================
function updateCountup() {
    const debutDate = new Date(2013, 5, 13, 0, 0, 0); // June 13, 2013
    const now = new Date();
    
    let diff = (now.getTime() - debutDate.getTime()) / 1000; // difference in seconds
    
    // Calculate years
    let years = Math.floor(diff / (365.25 * 24 * 60 * 60));
    diff -= years * (365.25 * 24 * 60 * 60);
    
    // Calculate months (approximate)
    let months = Math.floor(diff / (30.44 * 24 * 60 * 60));
    diff -= months * (30.44 * 24 * 60 * 60);
    
    // Calculate days
    let days = Math.floor(diff / (24 * 60 * 60));
    diff -= days * (24 * 60 * 60);
    
    // Calculate hours
    let hours = Math.floor(diff / (60 * 60));
    diff -= hours * (60 * 60);
    
    // Calculate minutes
    let minutes = Math.floor(diff / 60);
    let seconds = Math.floor(diff % 60);
    
    // Update DOM
    const yearsEl = document.getElementById('yearsDisplay');
    const monthsEl = document.getElementById('monthsDisplay');
    const daysEl = document.getElementById('daysDisplay');
    const hoursEl = document.getElementById('hoursDisplay');
    const minutesEl = document.getElementById('minutesDisplay');
    const secondsEl = document.getElementById('secondsDisplay');
    
    if (yearsEl) yearsEl.textContent = String(years).padStart(2, '0');
    if (monthsEl) monthsEl.textContent = String(months).padStart(2, '0');
    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
}

// Update every second
updateCountup();
setInterval(updateCountup, 1000);

console.log('⏰ Real-time countup started - Since June 13, 2013');
    // ============================================================
    // 5. LOVE STORY TIMELINE - THE REAL BTS JOURNEY (2013-2027)
    // ============================================================
    const timelineData = [
        { 
            year: '2013', 
            title: 'The Beginning',
            description: 'June 13, 2013. Seven boys from a small company debuted with "No More Dream." They were young, average age just 19, and from a company no one knew. After their first stage, Jin cried because he felt the performance wasn\'t good enough. They had big dreams but the world wasn\'t ready to listen yet.'
        },
        { 
            year: '2014', 
            title: 'First Glimpse of Hope',
            description: '"Boy In Luv" finally got people\'s attention. For the first time, BTS entered a music show #1 candidate. They even made their first US appearance with a free concert in LA. But every time they got close to winning, it slipped away. The boys kept pushing, kept dreaming, kept fighting.'
        },
        { 
            year: '2015', 
            title: 'THE FIRST WIN - I Need U',
            description: 'THIS WAS OUR YEAR! "I Need U" finally did it. On May 5, 2015, BTS got their first music show win on The Show. And on M!Countdown just days later. Jimin cried in the backstage. Suga said the trophy felt heavy — not because of its weight, but because of the responsibility it carried. After all those near-misses, after all those tears, they finally did it. And we were there. 💜'
        },
        { 
            year: '2016', 
            title: 'The Wings Era - First Daesang',
            description: '"Fire" exploded like its name. Then "Blood Sweat & Tears" took over the world. The Wings album sold 751,000 copies, becoming the best-selling album of 2016 in Korea. But the biggest moment? At the Melon Music Awards, BTS won their FIRST EVER DAESANG — Album of the Year. They couldn\'t believe it. They had dreamed of this for years, and now it was real. Jimin cried thinking about the long road it took to get there. From nobodies to daesang winners. This was only the beginning.'
        },
        { 
            year: '2017', 
            title: 'Love Yourself & Billboard History',
            description: '"DNA" was EVERYTHING. It did something no one thought possible — BTS entered the Billboard Hot 100 at #85. They were only the second Korean act ever to do this, after PSY. Their album "Love Yourself: Her" hit #7 on the Billboard 200. The whole world was finally paying attention. And we had been saying it all along — THEY ARE LEGENDS.'
        },
        { 
            year: '2018', 
            title: 'First #1 Album & Global Takeover',
            description: '"Love Yourself: Tear" became the FIRST K-POP ALBUM EVER to hit #1 on the Billboard 200. They sold 135,000 units in one week. This wasn\'t just a win — this was HISTORY. BTS wasn\'t just a K-pop group anymore. They were global icons. And the best part? They did it speaking in their own language.'
        },
        { 
            year: '2019', 
            title: 'Grammys & World Domination',
            description: '"Boy With Luv" with Halsey took over the world. At the 2019 Grammys, BTS became the FIRST K-pop group to present an award. They performed at the Billboard Music Awards with Halsey. Everything we dreamed of was happening. They were on the biggest stages in the world — and they were still the same seven boys from a tiny company who never gave up.'
        },
        { 
            year: '2020', 
            title: 'Dynamite - #1 on Hot 100',
            description: '"Dynamite" debuted at #1 on the Billboard Hot 100. 33.9 million streams, 300,000 sales in one week. They broke PSY\'s record and became the highest-charting Korean act EVER. In the middle of a dark year, BTS brought us light and joy. They made history again. And we were there to watch it happen.'
        },
        { 
            year: '2021', 
            title: 'Grammy Nominations & Hot 100 Domination',
            description: '"Butter" spent 10 weeks at #1 on the Hot 100 — the LONGEST-RUNNING #1 of 2021. BTS got their SECOND Grammy nomination for Best Pop Duo/Group Performance. They won Artist of the Year at the American Music Awards. From crying backstage after their first win to selling out stadiums worldwide — they came so far, and we grew right alongside them.'
        },
        { 
            year: '2022', 
            title: 'Yet To Come - A New Chapter',
            description: '"Yet To Come" was a promise — the best is still ahead. "Run BTS" became our new anthem. They reminded us that even after all the achievements, they\'re still the same seven boys who just wanted to make music. We looked back at how far we\'d come, and we knew: this journey was never just about the awards. It was about US. Together, always.'
        },
        { 
            year: '2023', 
            title: '10 Years & Still Fighting',
            description: 'A DECADE OF BTS. "Take Two" was a gift FOR US, and we cried so hard. 10 years of love, of struggle, of triumph, of being there for each other. They went through so much to get here. Small company. No money. No recognition. Constant rejection. And they NEVER GAVE UP. Neither did we. They are family — and we will always be ARMY.'
        },
        { 
            year: '2024', 
            title: 'Stronger Through The Solo Years',
            description: 'Even apart, they shined. Each member proved their individual brilliance. But the world waited. We waited. Because we knew — BTS is not just a group. They\'re a promise. A family. A home. And home is always worth waiting for. 💜'
        },
        { 
            year: '2025', 
            title: 'Together, Always',
            description: 'THEY CAME BACK. Seeing them together again felt like coming home. Every ARMY around the world felt it. This is where we belong. Right here. With them. Forever.'
        },
        { 
            year: '2026', 
            title: '13 Years of Purple Love',
            description: '13 years after that June day in 2013, BTS and ARMY are still here. Still fighting. Still loving. Still believing in each other. They taught us that nothing is impossible when you have a dream — and a family to share it with. "I purple you" isn\'t just words. It\'s our promise. Forever.'
        },
        { 
            year: '2027', 
            title: '14 Years & Forever Bulletproof',
            description: '14 YEARS. From a small company with no money and no recognition to the biggest band in the world. From crying backstage after their first win to holding Grammy nominations and Hot 100 #1s. They did it. WE did it. This is our story. This is OUR history. And it\'s not over. BTS × ARMY. FOREVER. ALWAYS. BORAHAE! 💜'
        }
    ];

    const timelineGrid = document.getElementById('timelineGrid');
    if (timelineGrid) {
        timelineData.forEach(item => {
            const div = document.createElement('div');
            div.className = 'timeline-item';
            div.innerHTML = `
                <div class="year">${item.year}</div>
                <h4>${item.title}</h4>
                <p>${item.description}</p>
            `;
            timelineGrid.appendChild(div);
        });
    }

    // ============================================================
    // 6. SCHEDULE DATA
    // ============================================================
    const scheduleData = [
        { time: '6:00 PM', title: 'Welcome Reception', desc: 'Arrival & BTS playlist' },
        { time: '6:30 PM', title: 'Opening Ceremony', desc: 'Anniversary toast & introductions' },
        { time: '7:00 PM', title: 'Dinner Service', desc: 'Purple-themed dinner buffet' },
        { time: '8:00 PM', title: 'Love Story Video', desc: 'A journey through 14 years' },
        { time: '8:30 PM', title: 'Dance & Celebration', desc: 'BTS dance party begins!' },
        { time: '9:30 PM', title: 'Memory Sharing', desc: 'ARMYs share their favorite moments' },
        { time: '10:00 PM', title: 'Grand Finale', desc: 'Closing ceremony & fireworks' }
    ];

    const scheduleGrid = document.getElementById('scheduleGrid');
    if (scheduleGrid) {
        scheduleData.forEach(item => {
            const div = document.createElement('div');
            div.className = 'schedule-item';
            div.innerHTML = `
                <div class="schedule-time">${item.time}</div>
                <div class="schedule-info">
                    <h4>${item.title}</h4>
                    <p>${item.desc}</p>
                </div>
            `;
            scheduleGrid.appendChild(div);
        });
    }

    // ============================================================
    // 7. GALLERY DATA
    // ============================================================
    const galleryData = [
        { icon: 'fa-heart', title: 'Love', desc: 'Our eternal bond' },
        { icon: 'fa-star', title: 'Dreams', desc: 'Chasing stars together' },
        { icon: 'fa-moon', title: 'Moments', desc: 'Under the purple sky' },
        { icon: 'fa-music', title: 'Melodies', desc: 'Our BTS soundtrack' },
        { icon: 'fa-camera', title: 'Memories', desc: 'Captured in time' },
        { icon: 'fa-seedling', title: 'Growth', desc: 'Blooming like lilac' }
    ];

    const galleryGrid = document.getElementById('galleryGrid');
    if (galleryGrid) {
        galleryData.forEach(item => {
            const div = document.createElement('div');
            div.className = 'gallery-item';
            div.innerHTML = `
                <i class="fas ${item.icon}"></i>
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
            `;
            galleryGrid.appendChild(div);
        });
    }

    // ============================================================
    // 8. BTS QUOTE ROTATOR (Gallery)
    // ============================================================
    const btsQuotes = [
        '"You are the cause of my euphoria."',
        '"The stars are shining because of you."',
        '"In the garden of memories, we bloom."',
        '"Our love is beautiful and timeless."',
        '"Together we are stronger than the storm."',
        '"From the first moment to forever, you are my purple heart."'
    ];

    const quoteElement = document.getElementById('galleryQuote');
    let quoteIndex = 0;

    if (quoteElement) {
        setInterval(() => {
            quoteIndex = (quoteIndex + 1) % btsQuotes.length;
            quoteElement.style.transition = 'opacity 0.5s ease';
            quoteElement.style.opacity = '0';
            setTimeout(() => {
                quoteElement.textContent = btsQuotes[quoteIndex];
                quoteElement.style.opacity = '1';
            }, 500);
        }, 7000);
    }

    // ============================================================
    // 9. PLAYLIST DATA
    // ============================================================
    const playlistData = [
        { title: 'Euphoria', artist: 'BTS (Jungkook)' },
        { title: 'Mikrokosmos', artist: 'BTS' },
        { title: 'Forever Young', artist: 'BTS' },
        { title: 'Spring Day', artist: 'BTS' },
        { title: 'Magic Shop', artist: 'BTS' },
        { title: 'Answer: Love Myself', artist: 'BTS' },
        { title: 'Butterfly', artist: 'BTS' },
        { title: 'Lights', artist: 'BTS' }
    ];

    const playlistGrid = document.getElementById('playlistGrid');
    if (playlistGrid) {
        playlistData.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'playlist-item';
            div.innerHTML = `
                <div class="song-number">#${String(index + 1).padStart(2, '0')}</div>
                <h4>${item.title}</h4>
                <p>${item.artist}</p>
            `;
            playlistGrid.appendChild(div);
        });
    }

    // ============================================================
    // 10. RSVP FORM
    // ============================================================
    const rsvpForm = document.getElementById('rsvpForm');
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('rsvpName').value.trim();
            const email = document.getElementById('rsvpEmail').value.trim();
            const guests = document.getElementById('rsvpGuests').value;
            const song = document.getElementById('rsvpSong').value.trim();

            if (!name || !email) {
                alert('Please fill in your name and email address.');
                return;
            }

            const submitBtn = this.querySelector('.rsvp-submit');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-check"></i> RSVP Sent!';
            submitBtn.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
                rsvpForm.reset();
            }, 4000);

            console.log('RSVP Submitted:', { name, email, guests, song });
        });
    }

    // ============================================================
    // 11. DIRECTIONS BUTTON
    // ============================================================
    const directionsBtn = document.getElementById('directionsBtn');
    if (directionsBtn) {
        directionsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const lat = '-37.816279';
            const lng = '144.953735';
            window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
        });
    }

    // ============================================================
    // 12. CELEBRATION / CONFETTI EFFECT
    // ============================================================
    function createCelebration() {
        console.log('🎉 Celebration started!');
        const colors = ['#8a5a9e', '#c9a8d8', '#6a3a7e', '#e8d8ee', '#b080c8', '#f0e6f2'];

        for (let i = 0; i < 60; i++) {
            const confetti = document.createElement('div');
            const size = 6 + Math.random() * 10;
            const isCircle = Math.random() > 0.5;

            confetti.style.cssText = `
                position: fixed;
                width: ${size}px;
                height: ${isCircle ? size : size * 0.6}px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: ${isCircle ? '50%' : '2px'};
                top: -10px;
                left: ${Math.random() * 100}%;
                z-index: 99999;
                pointer-events: none;
                opacity: 0.9;
                transform: rotate(${Math.random() * 360}deg);
            `;
            document.body.appendChild(confetti);

            const duration = 1500 + Math.random() * 2500;
            const drift = (Math.random() - 0.5) * 300;

            confetti.animate([
                {
                    transform: `translateY(0px) rotate(0deg) scale(1)`,
                    opacity: 0.9
                },
                {
                    transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 720 + 360}deg) scale(0.3) translateX(${drift}px)`,
                    opacity: 0
                }
            ], {
                duration: duration,
                easing: 'ease-in',
                fill: 'forwards'
            }).onfinish = function() {
                confetti.remove();
            };
        }
    }

    // ============================================================
    // 13. SMOOTH SCROLL FOR NAV LINKS
    // ============================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    console.log('💜 BTS × ARMY - 14 Years of Purple Love (2027) Invitation loaded! 💜');
    console.log('✨ Borahae! ✨');

});
    // ============================================================
    // PLAYLIST - FEATURE 2: LYRIC CAROUSEL
    // ============================================================
    const playlistLyrics = [
        { lyric: 'You are the cause of my euphoria.', song: 'Euphoria' },
        { lyric: 'The stars are shining because of you.', song: 'Mikrokosmos' },
        { lyric: 'In the garden of memories, we bloom.', song: 'Spring Day' },
        { lyric: 'Our love is beautiful and timeless.', song: 'Forever Young' },
        { lyric: 'Together we are stronger than the storm.', song: 'Magic Shop' },
        { lyric: 'From the first moment to forever, you are my purple heart.', song: 'Butterfly' },
        { lyric: 'We are Bulletproof. Forever.', song: 'We Are Bulletproof' },
        { lyric: 'I purple you. I love you.', song: 'Purple You' }
    ];

    const playlistLyricElement = document.getElementById('playlistLyric');
    const playlistLyricSong = document.getElementById('playlistLyricSong');
    const playlistLyricDots = document.querySelectorAll('.playlist-lyric-dot');
    let playlistLyricIndex = 0;

    function updatePlaylistLyric(index) {
        const data = playlistLyrics[index];
        if (playlistLyricElement) {
            playlistLyricElement.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            playlistLyricElement.style.opacity = '0';
            playlistLyricElement.style.transform = 'translateY(-8px)';
            setTimeout(() => {
                playlistLyricElement.textContent = data.lyric;
                if (playlistLyricSong) playlistLyricSong.textContent = data.song;
                playlistLyricElement.style.opacity = '1';
                playlistLyricElement.style.transform = 'translateY(0)';
            }, 500);
        }

        playlistLyricDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    if (playlistLyricElement) {
        // Auto-rotate every 4 seconds
        setInterval(() => {
            playlistLyricIndex = (playlistLyricIndex + 1) % playlistLyrics.length;
            updatePlaylistLyric(playlistLyricIndex);
        }, 4000);

        // Click on dots
        playlistLyricDots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                playlistLyricIndex = i;
                updatePlaylistLyric(i);
            });
        });
    }

    // ============================================================
    // PLAYLIST - FEATURE 6: ARMY LIGHTSTICK (FIXED)
    // ============================================================
    const playlistLightstickCore = document.getElementById('playlistLightstickCore');
    const playlistLightstickGlow = document.getElementById('playlistLightstickGlow');
    const playlistColorBtns = document.querySelectorAll('.playlist-color-btn');
    const playlistEffectBtns = document.querySelectorAll('.playlist-effect-btn');
    const playlistColorName = document.getElementById('playlistColorName');
    const playlistLightstickMini = document.getElementById('playlistLightstick');

    // Color configuration
    const colorConfig = {
        purple: {
            core: 'linear-gradient(180deg, #9B59B6, #8E44AD, #7D3C98)',
            glow: 'rgba(155, 89, 182, 0.3)',
            glowColor: 'rgba(155, 89, 182, 0.15)',
            name: 'Purple 💜'
        },
        pink: {
            core: 'linear-gradient(180deg, #FF6B9D, #E74C7E, #C0397E)',
            glow: 'rgba(255, 107, 157, 0.3)',
            glowColor: 'rgba(255, 107, 157, 0.15)',
            name: 'Pink 💗'
        },
        blue: {
            core: 'linear-gradient(180deg, #3498DB, #2980B9, #1A5276)',
            glow: 'rgba(52, 152, 219, 0.3)',
            glowColor: 'rgba(52, 152, 219, 0.15)',
            name: 'Blue 💙'
        },
        green: {
            core: 'linear-gradient(180deg, #2ECC71, #27AE60, #1E8449)',
            glow: 'rgba(46, 204, 113, 0.3)',
            glowColor: 'rgba(46, 204, 113, 0.15)',
            name: 'Green 💚'
        },
        orange: {
            core: 'linear-gradient(180deg, #F39C12, #E67E22, #D35400)',
            glow: 'rgba(243, 156, 18, 0.3)',
            glowColor: 'rgba(243, 156, 18, 0.15)',
            name: 'Orange 🧡'
        },
        rainbow: {
            core: 'linear-gradient(180deg, #FF6B9D, #9B59B6, #3498DB, #2ECC71, #F39C12)',
            glow: 'rgba(155, 89, 182, 0.3)',
            glowColor: 'rgba(155, 89, 182, 0.15)',
            name: 'Rainbow 🌈'
        }
    };

    let currentColor = 'purple';
    let currentEffect = 'pulse';
    let autoColorInterval = null;
    let rainbowInterval = null;
    let isAutoColor = false;

    // Function to change lightstick color
    function changeLightstickColor(color) {
        const config = colorConfig[color];
        if (!config) return;

        currentColor = color;

        // Stop any existing rainbow interval
        if (rainbowInterval) {
            clearInterval(rainbowInterval);
            rainbowInterval = null;
        }

        // Update core
        if (playlistLightstickCore) {
            playlistLightstickCore.style.background = config.core;
            // Re-apply effect animation
            applyEffect(currentEffect);
        }

        // Update glow
        if (playlistLightstickGlow) {
            playlistLightstickGlow.style.background = `radial-gradient(circle, ${config.glow}, transparent 70%)`;
        }

        // Update color name
        if (playlistColorName) {
            playlistColorName.textContent = config.name;
        }

        // Update active button
        playlistColorBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.color === color);
        });

        // Update status
        const statusText = document.querySelector('.playlist-status-text');
        if (statusText) {
            statusText.textContent = `💜 ${config.name.toUpperCase()} ARMY BOMB`;
        }
    }

    // Function to auto-change colors
    function startAutoColorChange() {
        if (autoColorInterval) {
            clearInterval(autoColorInterval);
            autoColorInterval = null;
        }

        isAutoColor = true;
        const colors = Object.keys(colorConfig);
        let index = 0;

        autoColorInterval = setInterval(() => {
            index = (index + 1) % colors.length;
            const color = colors[index];
            
            // Skip if already on that color
            if (color === currentColor && !isAutoColor) return;
            
            changeLightstickColor(color);
            
            // Add a subtle pop animation
            if (playlistLightstickMini) {
                playlistLightstickMini.style.transition = 'transform 0.15s ease';
                playlistLightstickMini.style.transform = 'scale(1.15)';
                setTimeout(() => {
                    playlistLightstickMini.style.transform = 'scale(1)';
                }, 200);
            }
        }, 3000); // Change every 3 seconds
    }

    // Function to stop auto-color change
    function stopAutoColorChange() {
        if (autoColorInterval) {
            clearInterval(autoColorInterval);
            autoColorInterval = null;
        }
        isAutoColor = false;
    }

    // Apply effect
    function applyEffect(effect) {
        currentEffect = effect;

        if (!playlistLightstickCore) return;

        // Remove all existing animations
        playlistLightstickCore.style.animation = 'none';
        if (playlistLightstickGlow) {
            playlistLightstickGlow.style.animation = 'none';
        }

        // Force reflow
        void playlistLightstickCore.offsetWidth;

        // Apply new animation based on effect
        switch(effect) {
            case 'pulse':
                playlistLightstickCore.style.animation = 'corePulse 1.5s ease-in-out infinite';
                if (playlistLightstickGlow) {
                    playlistLightstickGlow.style.animation = 'glowPulse 2s ease-in-out infinite';
                }
                break;
            case 'wave':
                playlistLightstickCore.style.animation = 'waveEffect 1.2s ease-in-out infinite';
                if (playlistLightstickGlow) {
                    playlistLightstickGlow.style.animation = 'waveGlow 1.5s ease-in-out infinite';
                }
                break;
            case 'fade':
                playlistLightstickCore.style.animation = 'fadeEffect 2.5s ease-in-out infinite';
                if (playlistLightstickGlow) {
                    playlistLightstickGlow.style.animation = 'fadeGlow 2.5s ease-in-out infinite';
                }
                break;
            case 'flash':
                playlistLightstickCore.style.animation = 'flashEffect 0.6s ease-in-out infinite';
                if (playlistLightstickGlow) {
                    playlistLightstickGlow.style.animation = 'flashGlow 0.6s ease-in-out infinite';
                }
                break;
            default:
                playlistLightstickCore.style.animation = 'corePulse 1.5s ease-in-out infinite';
        }

        // Update active effect button
        playlistEffectBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.effect === effect);
        });
    }

    // --- Event Listeners for Color Buttons ---
    playlistColorBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const color = this.dataset.color;
            
            // If clicking the same color and it's rainbow, restart
            if (color === 'rainbow' && color === currentColor) {
                // Restart rainbow
                if (rainbowInterval) {
                    clearInterval(rainbowInterval);
                    rainbowInterval = null;
                }
                rainbowInterval = setInterval(() => {
                    const hue = Date.now() / 30 % 360;
                    if (playlistLightstickCore) {
                        playlistLightstickCore.style.background = `linear-gradient(180deg, hsl(${hue}, 100%, 60%), hsl(${hue + 60}, 100%, 50%))`;
                    }
                }, 50);
                return;
            }

            // Stop auto color if clicking a specific color
            stopAutoColorChange();
            
            changeLightstickColor(color);

            // If rainbow selected, start rainbow animation
            if (color === 'rainbow') {
                rainbowInterval = setInterval(() => {
                    const hue = Date.now() / 30 % 360;
                    if (playlistLightstickCore) {
                        playlistLightstickCore.style.background = `linear-gradient(180deg, hsl(${hue}, 100%, 60%), hsl(${hue + 60}, 100%, 50%))`;
                    }
                }, 50);
            }
        });
    });

    // --- Event Listeners for Effect Buttons ---
    playlistEffectBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const effect = this.dataset.effect;
            applyEffect(effect);
            
            // Add click feedback
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // --- Click on lightstick to auto-change color ---
    if (playlistLightstickMini) {
        playlistLightstickMini.addEventListener('click', function() {
            if (isAutoColor) {
                // If auto is on, stop it
                stopAutoColorChange();
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 200);
                // Reset to current color
                changeLightstickColor(currentColor);
            } else {
                // Start auto color change
                startAutoColorChange();
                this.style.transform = 'scale(1.15)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 300);
            }
        });
    }

    // --- Auto-start rainbow effect on page load ---
    setTimeout(() => {
        // Start with auto color change after 3 seconds
        setTimeout(() => {
            startAutoColorChange();
        }, 3000);
    }, 1000);

    // ============================================================
    // PLAYLIST - FEATURE 5: MUSIC PLAYER (WITH I NEED U)
    // ============================================================
    const playlistSongs = [
        { title: 'I Need U', artist: 'BTS', duration: '3:30' },
        { title: 'Euphoria', artist: 'BTS (Jungkook)', duration: '3:45' },
        { title: 'Mikrokosmos', artist: 'BTS', duration: '3:45' },
        { title: 'Spring Day', artist: 'BTS', duration: '4:34' },
        { title: 'Forever Young', artist: 'BTS', duration: '3:50' },
        { title: 'Magic Shop', artist: 'BTS', duration: '4:35' },
        { title: 'Answer: Love Myself', artist: 'BTS', duration: '4:11' },
        { title: 'Butterfly', artist: 'BTS', duration: '4:00' },
        { title: 'Lights', artist: 'BTS', duration: '4:00' },
        { title: 'Run', artist: 'BTS', duration: '3:56' },
        { title: 'Fire', artist: 'BTS', duration: '3:23' },
        { title: 'Dynamite', artist: 'BTS', duration: '3:19' }
    ];

    const playlistPlayBtn = document.getElementById('playlistPlayBtn');
    const playlistPlayIcon = document.getElementById('playlistPlayIcon');
    const playlistCurrentSong = document.getElementById('playlistCurrentSong');
    const playlistArtist = document.querySelector('.playlist-music-artist');
    const playlistProgressFill = document.getElementById('playlistProgressFill');
    const playlistTimeCurrent = document.getElementById('playlistTimeCurrent');
    const playlistTimeTotal = document.getElementById('playlistTimeTotal');
    const playlistPrevBtn = document.getElementById('playlistPrevBtn');
    const playlistNextBtn = document.getElementById('playlistNextBtn');
    const playlistAlbumCover = document.getElementById('playlistAlbumCover');

    let playlistIsPlaying = false;
    let playlistCurrentIndex = 0; // Starts with "I Need U" at index 0
    let playlistProgress = 0;
    let playlistInterval = null;

    // Album cover colors for each song
    const albumColors = [
        '#8a5a9e', // I Need U - Purple
        '#6a3a7e', // Euphoria
        '#9B59B6', // Mikrokosmos
        '#7D3C98', // Spring Day
        '#AF7AC5', // Forever Young
        '#6C3483', // Magic Shop
        '#4A235A', // Answer: Love Myself
        '#8E44AD', // Butterfly
        '#5B2C6F', // Lights
        '#2C3E50', // Run
        '#C0392B', // Fire
        '#F39C12'  // Dynamite
    ];

    function updatePlaylistSong(index) {
        const song = playlistSongs[index];
        if (playlistCurrentSong) {
            playlistCurrentSong.style.transition = 'opacity 0.3s ease';
            playlistCurrentSong.style.opacity = '0';
            setTimeout(() => {
                playlistCurrentSong.textContent = song.title;
                playlistCurrentSong.style.opacity = '1';
            }, 300);
        }
        if (playlistArtist) {
            playlistArtist.style.transition = 'opacity 0.3s ease';
            playlistArtist.style.opacity = '0';
            setTimeout(() => {
                playlistArtist.textContent = song.artist;
                playlistArtist.style.opacity = '1';
            }, 300);
        }
        if (playlistTimeTotal) playlistTimeTotal.textContent = song.duration;
        if (playlistAlbumCover) {
            const color = albumColors[index % albumColors.length];
            playlistAlbumCover.style.background = `linear-gradient(135deg, ${color}, ${color}dd)`;
            playlistAlbumCover.style.transition = 'background 0.5s ease';
        }
        playlistProgress = 0;
        if (playlistProgressFill) playlistProgressFill.style.width = '0%';
        if (playlistTimeCurrent) playlistTimeCurrent.textContent = '0:00';
    }

    function togglePlaylistPlay() {
        playlistIsPlaying = !playlistIsPlaying;
        if (playlistPlayIcon) playlistPlayIcon.textContent = playlistIsPlaying ? '⏸' : '▶';
        if (playlistPlayBtn) playlistPlayBtn.classList.toggle('playing', playlistIsPlaying);
        
        if (playlistIsPlaying) {
            if (playlistInterval) clearInterval(playlistInterval);
            playlistInterval = setInterval(() => {
                playlistProgress += 0.5;
                const progressPercent = Math.min((playlistProgress / 100) * 100, 100);
                if (playlistProgressFill) playlistProgressFill.style.width = progressPercent + '%';
                if (playlistTimeCurrent) {
                    const seconds = Math.floor(playlistProgress * 2.2);
                    const mins = Math.floor(seconds / 60);
                    const secs = seconds % 60;
                    playlistTimeCurrent.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
                }
                if (playlistProgress >= 100) {
                    clearInterval(playlistInterval);
                    playlistInterval = null;
                    playlistIsPlaying = false;
                    if (playlistPlayIcon) playlistPlayIcon.textContent = '▶';
                    if (playlistPlayBtn) playlistPlayBtn.classList.remove('playing');
                    // Auto-play next song
                    setTimeout(() => {
                        playlistCurrentIndex = (playlistCurrentIndex + 1) % playlistSongs.length;
                        updatePlaylistSong(playlistCurrentIndex);
                        // Auto-play the next song
                        setTimeout(() => {
                            if (!playlistIsPlaying) {
                                togglePlaylistPlay();
                            }
                        }, 500);
                    }, 1000);
                }
            }, 100);
        } else {
            if (playlistInterval) {
                clearInterval(playlistInterval);
                playlistInterval = null;
            }
        }
    }

    // Event Listeners
    if (playlistPlayBtn) {
        playlistPlayBtn.addEventListener('click', togglePlaylistPlay);
    }

    if (playlistPrevBtn) {
        playlistPrevBtn.addEventListener('click', function() {
            if (playlistIsPlaying) {
                clearInterval(playlistInterval);
                playlistInterval = null;
                playlistIsPlaying = false;
                if (playlistPlayIcon) playlistPlayIcon.textContent = '▶';
                if (playlistPlayBtn) playlistPlayBtn.classList.remove('playing');
            }
            playlistCurrentIndex = (playlistCurrentIndex - 1 + playlistSongs.length) % playlistSongs.length;
            updatePlaylistSong(playlistCurrentIndex);
            setTimeout(() => {
                if (!playlistIsPlaying) {
                    togglePlaylistPlay();
                }
            }, 500);
        });
    }

    if (playlistNextBtn) {
        playlistNextBtn.addEventListener('click', function() {
            if (playlistIsPlaying) {
                clearInterval(playlistInterval);
                playlistInterval = null;
                playlistIsPlaying = false;
                if (playlistPlayIcon) playlistPlayIcon.textContent = '▶';
                if (playlistPlayBtn) playlistPlayBtn.classList.remove('playing');
            }
            playlistCurrentIndex = (playlistCurrentIndex + 1) % playlistSongs.length;
            updatePlaylistSong(playlistCurrentIndex);
            setTimeout(() => {
                if (!playlistIsPlaying) {
                    togglePlaylistPlay();
                }
            }, 500);
        });
    }

    // Initialize first song (I Need U)
    updatePlaylistSong(0);
    console.log('🎵 Now Playing: I Need U - BTS');

    // ============================================================
    // ADD REQUIRED CSS ANIMATIONS
    // ============================================================
    const lightstickStyles = document.createElement('style');
    lightstickStyles.textContent = `
        /* Lightstick Animations */
        @keyframes corePulse {
            0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
            50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
        }

        @keyframes glowPulse {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.3); }
        }

        @keyframes waveEffect {
            0%, 100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
            25% { transform: translate(-50%, -50%) scale(1.1) rotate(5deg); }
            50% { transform: translate(-50%, -50%) scale(0.9) rotate(-5deg); }
            75% { transform: translate(-50%, -50%) scale(1.05) rotate(3deg); }
        }

        @keyframes waveGlow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.4); }
        }

        @keyframes fadeEffect {
            0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
            50% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.2; }
        }

        @keyframes fadeGlow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.05; transform: scale(0.7); }
        }

        @keyframes flashEffect {
            0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
            50% { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }
        }

        @keyframes flashGlow {
            0%, 100% { opacity: 0.2; transform: scale(0.8); }
            50% { opacity: 0.8; transform: scale(1.5); }
        }

        /* Lightstick click feedback */
        .playlist-lightstick-mini {
            transition: transform 0.3s ease;
            cursor: pointer;
        }

        .playlist-lightstick-mini:active {
            transform: scale(0.9) !important;
        }

        /* Color button active state */
        .playlist-color-btn.active {
            border-color: #2a1a3a;
            box-shadow: 0 0 20px rgba(138, 90, 158, 0.4);
            transform: scale(1.15);
        }

        /* Effect button active state */
        .playlist-effect-btn.active {
            background: #8a5a9e;
            color: #fff;
            border-color: #8a5a9e;
            box-shadow: 0 2px 12px rgba(138, 90, 158, 0.3);
        }
    `;
    document.head.appendChild(lightstickStyles);

    console.log('💜 Playlist Lightstick loaded - Click to auto-change colors!');
    console.log('🌈 Rainbow mode available - Click the rainbow button!');
    // ============================================================
// ACHIEVEMENTS - ANIMATED COUNTERS
// ============================================================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const step = Math.max(1, Math.floor(target / 60));
        let current = 0;
        
        // Format number with commas
        function formatNumber(num) {
            return num.toLocaleString();
        }
        
        const interval = setInterval(() => {
            current += step;
            if (current >= target) {
                counter.textContent = formatNumber(target);
                clearInterval(interval);
            } else {
                counter.textContent = formatNumber(current);
            }
        }, duration / 60);
    });
}

// ============================================================
// ACHIEVEMENTS - SCROLL REVEAL
// ============================================================
function revealAchievements() {
    const section = document.getElementById('achievements');
    if (!section) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.disconnect();
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(section);
}

// Call when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    revealAchievements();
});
// ============================================================
// THEME TOGGLE - LIGHT / DARK MODE
// ============================================================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeText = document.getElementById('themeText');
let isDarkMode = true;

// Check for saved theme preference
const savedTheme = localStorage.getItem('btsTheme');
if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    isDarkMode = false;
    themeIcon.textContent = '☀️';
    themeText.textContent = 'Light';
}

if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        
        if (document.body.classList.contains('light-mode')) {
            isDarkMode = false;
            themeIcon.textContent = '☀️';
            themeText.textContent = 'Light';
            localStorage.setItem('btsTheme', 'light');
            console.log('☀️ Light mode activated');
        } else {
            isDarkMode = true;
            themeIcon.textContent = '🌙';
            themeText.textContent = 'Dark';
            localStorage.setItem('btsTheme', 'dark');
            console.log('🌙 Dark mode activated');
        }
    });
}

console.log('🌓 Theme toggle loaded - Current mode:', isDarkMode ? 'Dark' : 'Light');
// ============================================================
// MEMBER PROFILES - ACCURATE & DETAILED DATA
// ============================================================

const memberData = {
    rm: {
        name: 'RM',
        emoji: '🐨',
        role: 'Leader · Main Rapper · Producer',
        birth: 'September 12, 1994 · Ilsan, South Korea',
        bio: 'RM is the leader of BTS, known for his poetic lyrics, intelligence, and deep love for art and nature. With an IQ of 148, he is fluent in English and a member of the Korea Music Copyright Association. He has released several solo mixtapes and collaborations that showcase his unique rap style and philosophical worldview. His solo work often explores themes of identity, growth, and self-reflection.',
        albums: [
            { title: 'RM', year: '2015' },
            { title: 'mono.', year: '2018' },
            { title: 'Indigo', year: '2022' },
            { title: 'Right Place, Wrong Person', year: '2024' }
        ],
        achievements: [
            { title: 'Billboard 200 #1', desc: 'Indigo (2022) — First K-pop act' },
            { title: 'Hot 100 Entry', desc: '"Wild Flower" (2022)' },
            { title: 'Best Rap Album', desc: 'Korean Music Awards' },
            { title: 'Global Recognition', desc: 'As a solo artist' }
        ],
        funFacts: ['♍ Virgo', 'IQ 148', 'Fluent in English', 'Loves art museums', 'Pet turtle named Ilta']
    },
    jin: {
        name: 'Jin',
        emoji: '🐹',
        role: 'Vocalist · Visual · Sub-rapper',
        birth: 'December 4, 1992 · Gwacheon, South Korea',
        bio: 'Jin is the oldest member of BTS, known for his "worldwide handsome" visuals, incredible vocals, and his passion for cooking. He holds a Master\'s degree in Film Arts from Konkuk University. His solo songs showcase his emotional depth and versatility as an artist. He is also known for his variety show appearances and his love for gaming.',
        albums: [
            { title: 'Awake', year: '2016' },
            { title: 'Epiphany', year: '2018' },
            { title: 'The Astronaut', year: '2022' },
            { title: 'HAPPY', year: '2024' }
        ],
        achievements: [
            { title: 'Hot 100 Entry', desc: '"The Astronaut" (2022)' },
            { title: 'Soundtrack Appearances', desc: 'Multiple K-Drama OSTs' },
            { title: 'Gaming Ambassador', desc: 'MapleStory collaboration' },
            { title: 'Cooking Show Host', desc: '"Jin\'s Kitchen"' }
        ],
        funFacts: ['♐ Sagittarius', 'Worldwide Handsome', 'Master\'s degree', 'Loves gaming', 'Excellent cook']
    },
    suga: {
        name: 'SUGA',
        emoji: '🐱',
        role: 'Lead Rapper · Producer',
        birth: 'March 9, 1993 · Daegu, South Korea',
        bio: 'SUGA is a genius producer who turns pain into poetry. His raw honesty and musical brilliance have shaped BTS\'s sound for over a decade. He has produced music for himself, BTS, and other artists under the name Agust D. His music often deals with themes of mental health, ambition, and self-reflection. He is also known for his passion for basketball.',
        albums: [
            { title: 'Agust D', year: '2016' },
            { title: 'D-2', year: '2020' },
            { title: 'D-DAY', year: '2023' }
        ],
        achievements: [
            { title: 'Billboard 200 Top 10', desc: '"D-2" (2020)' },
            { title: 'Hot 100 Entry', desc: '"Daechwita" (2020)' },
            { title: 'Producer of the Year', desc: 'Multiple awards' },
            { title: 'Sold Out Tours', desc: 'Agust D world tour' }
        ],
        funFacts: ['♓ Pisces', 'Multiple personas (SUGA / Agust D)', 'Loves basketball', 'Food enthusiast', 'Has studio "D-Town"']
    },
    jhope: {
        name: 'j-hope',
        emoji: '🐿️',
        role: 'Main Dancer · Rapper · Sub-vocalist',
        birth: 'February 18, 1994 · Gwangju, South Korea',
        bio: 'j-hope is the sunshine of BTS whose energy lights up every stage. His dance skills and positive spirit are truly infectious. He was part of a dance team called "Neuron" before debut and has released solo music that showcases his unique style and creativity. His music often blends hip-hop with upbeat, energetic sounds.',
        albums: [
            { title: 'Hope World', year: '2018' },
            { title: 'Jack In The Box', year: '2022' },
            { title: 'Hope on the Street Vol.1', year: '2024' }
        ],
        achievements: [
            { title: 'Billboard 200 Entry', desc: '"Jack In The Box" (2022)' },
            { title: 'Dance Excellence', desc: 'Main dancer of BTS' },
            { title: 'Lollapalooza Headliner', desc: 'First Korean artist' },
            { title: 'Global Dance Icon', desc: 'Worldwide recognition' }
        ],
        funFacts: ['♒ Aquarius', 'Dance machine', 'Positive energy', 'Loves fashion', 'Pre-debut dancer']
    },
    jimin: {
        name: 'Jimin',
        emoji: '🐥',
        role: 'Vocalist · Main Dancer',
        birth: 'October 13, 1995 · Busan, South Korea',
        bio: 'A performer born to be on stage. His graceful movements and emotional vocals have captivated millions around the world. Jimin is known for his powerful stage presence, contemporary dance skills, and his ability to connect with fans through his performances. His solo work explores themes of love, passion, and self-discovery.',
        albums: [
            { title: 'Lie', year: '2016' },
            { title: 'Serendipity', year: '2017' },
            { title: 'Promise', year: '2023' },
            { title: 'MUSE', year: '2024' }
        ],
        achievements: [
            { title: 'Hot 100 Entry', desc: '"Like Crazy" (2024)' },
            { title: 'Dance Excellence', desc: 'Contemporary & hip-hop' },
            { title: 'Best Solo Artist', desc: 'Multiple awards' },
            { title: 'Billboard 200 #1', desc: '"MUSE" (2024)' }
        ],
        funFacts: ['♎ Libra', 'Contemporary dance expert', 'Busan pride', 'Cute and charming', 'Loves cats']
    },
    v: {
        name: 'V',
        emoji: '🐯',
        role: 'Vocalist · Visual · Sub-rapper',
        birth: 'December 30, 1995 · Daegu, South Korea',
        bio: 'An artist with a soulful voice and a unique perspective on life. V\'s creativity extends beyond music into photography, acting, and art. He has released solo music that showcases his deep, baritone voice and artistic vision. He also acted in the historical drama "Hwarang" and has held photography exhibitions.',
        albums: [
            { title: 'Stigma', year: '2016' },
            { title: 'Singularity', year: '2018' },
            { title: 'Layover', year: '2023' },
            { title: 'FRAME', year: '2025' }
        ],
        achievements: [
            { title: 'Billboard 200 #1', desc: '"Layover" (2023)' },
            { title: 'Hot 100 Entry', desc: '"Slow Dancing" (2023)' },
            { title: 'Photography Exhibition', desc: 'Global recognition' },
            { title: 'Acting Awards', desc: 'Hwarang and others' }
        ],
        funFacts: ['♑ Capricorn', 'Jazz enthusiast', 'Loves photography', 'Deep baritone voice', 'Dog named Yeontan']
    },
    jungkook: {
        name: 'Jungkook',
        emoji: '🐰',
        role: 'Main Vocalist · Lead Dancer · Center · Maknae',
        birth: 'September 1, 1997 · Busan, South Korea',
        bio: 'The golden maknae who excels at everything. From singing to dancing to sports, his talent knows no bounds. Jungkook has become a global solo star while maintaining his humble and kind personality. He was scouted by multiple companies before choosing Big Hit and has since become one of the most recognized artists worldwide.',
        albums: [
            { title: 'Euphoria', year: '2018' },
            { title: 'Seven', year: '2023' },
            { title: 'GOLDEN', year: '2023' },
            { title: 'NEON', year: '2025' }
        ],
        achievements: [
            { title: 'Billboard 200 #1', desc: '"GOLDEN" (2023)' },
            { title: 'Hot 100 #1', desc: '"Seven" (2023)' },
            { title: 'Best Pop Solo', desc: 'Multiple awards' },
            { title: 'Global Superstar', desc: 'Billboard & beyond' }
        ],
        funFacts: ['♍ Virgo', 'Golden Maknae', 'Loves boxing', 'Multi-talented', 'Scouted by multiple companies']
    }
};

// --- Open Member Panel ---
function openMemberPanel(memberId) {
    const overlay = document.getElementById('memberPanelOverlay');
    const content = document.getElementById('memberPanelContent');
    const data = memberData[memberId];

    if (!data || !overlay || !content) return;

    // Build panel content - NO ICONS
    content.innerHTML = `
        <div class="member-panel-header">
            <span class="member-panel-avatar">${data.emoji}</span>
            <div class="member-panel-title">
                <h2>${data.name}</h2>
                <span class="panel-role">${data.role}</span>
                <span class="panel-birth">${data.birth}</span>
            </div>
        </div>

        <div class="panel-section">
            <h3 class="panel-section-title">About</h3>
            <p>${data.bio}</p>
        </div>

        <div class="panel-section">
            <h3 class="panel-section-title">Solo Albums</h3>
            <div class="panel-albums">
                ${data.albums.map(album => `
                    <div class="panel-album">
                        <span class="album-year">${album.year}</span>
                        <span class="album-title">${album.title}</span>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="panel-section">
            <h3 class="panel-section-title">Achievements</h3>
            <div class="panel-achievements">
                ${data.achievements.map(ach => `
                    <div class="panel-achievement">
                        <span class="achievement-title">${ach.title}</span>
                        <span class="achievement-desc">${ach.desc}</span>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="panel-section">
            <h3 class="panel-section-title">Fun Facts</h3>
            <div class="panel-facts">
                ${data.funFacts.map(fact => `
                    <span class="panel-fact">${fact}</span>
                `).join('')}
            </div>
        </div>
    `;

    // Show overlay
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// --- Close Member Panel ---
function closeMemberPanel() {
    const overlay = document.getElementById('memberPanelOverlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// --- Event Listeners ---

// Click on member cards
document.querySelectorAll('.member-card').forEach(card => {
    card.addEventListener('click', function(e) {
        const memberId = this.dataset.member;
        if (memberId) {
            openMemberPanel(memberId);
        }
    });
});

// Close button
document.getElementById('memberPanelClose').addEventListener('click', closeMemberPanel);

// Click outside to close
document.getElementById('memberPanelOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closeMemberPanel();
    }
});

// ESC key to close
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeMemberPanel();
    }
});

console.log('👤 Interactive Member Profiles loaded (No Icons)!');