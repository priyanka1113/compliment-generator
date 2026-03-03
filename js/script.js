const AmbientEngine = (() => {
    const library = {
        life: [
            "The way you've curated your living space reflects such a beautiful inner peace. 🏠",
            "You have a rare talent for making everyone you meet feel like they truly belong. 🫂",
            "Your ability to find joy in small, ordinary moments is a beautiful superpower. ✨",
            "You handle life's chaotic mornings with a grace that most people only dream of. ☕",
            "Your personal growth over the last year is nothing short of inspiring. 📈",
            "You are a master at picking the perfect gift for the people you love. 🎁",
            "The way you take care of your plants shows a truly nurturing soul. 🪴",
            "Your kitchen always smells like home and happiness. 🍪",
            "You have an incredible knack for finding exactly what you need in the 'junk drawer'. 🔍",
            "Your parallel parking skills are nothing short of legendary. 🚗",
            "You always know the best route to avoid traffic and find the scenic way. 🗺️",
            "The way you keep your inbox organized is a true feat of human discipline. 📧",
            "You make the most incredible Sunday brunch the world has ever seen. 🥞",
            "Your ability to fold a fitted sheet is proof that you are a wizard. 🪄",
            "You are the expert at picking the perfectly ripe avocado every single time. 🥑",
            "Your home library reflects a curious and beautiful mind. 📚",
            "You have mastered the art of the 'perfectly timed' power nap. 😴",
            "Your seasonal decorations make the whole neighborhood feel more festive. 🎃",
            "You always have the exact tool or battery someone needs in a pinch. 🔋",
            "The way you've built your daily routine shows such thoughtful intention. 🗓️"
        ],
        kindness: [
            "The way you remember small details about people's lives makes them feel so seen. 🌟",
            "Your kindness isn't just a trait; it's a quiet strength that changes people's days. ❤️",
            "You are the person everyone wants to call first when they have good news. 📞",
            "The world feels a little softer and safer because you are in it. 🌍",
            "You have a heart that listens even when you aren't saying a word. 👂",
            "You give the kind of hugs that make everything feel okay again. 🤗",
            "Your 'how are you?' is always sincere, and people can really feel that. 💬",
            "You remember birthdays without needing a notification, and that's rare. 🎂",
            "The way you share the last cookie shows a truly generous spirit. 🍪",
            "You are incredibly good at apologizing when you're wrong; it shows great character. 🙏",
            "Your patience with people who are learning new things is deeply appreciated. 🎓",
            "You are the 'safe space' for so many people in your life. 🛡️",
            "Your laugh is the best soundtrack to any gathering. 😂",
            "You are the first to cheer and the last to leave the celebration. 🎉",
            "You forgive small mistakes with a grace that makes everyone feel at ease. 🕊️",
            "Your 'thinking of you' texts arrive exactly when they are needed most. 📱",
            "You always bring the best snacks, but your company is the real treat. 🥨",
            "You radiate a positive energy that lingers long after you've left the room. ✨",
            "The way you treat strangers says everything about your beautiful heart. 💖",
            "You are a champion of the underdog and a voice for the quiet. 📣"
        ],
        resilience: [
            "You have a remarkable way of finding the sunlight even on the most overcast days. ☀️",
            "Your persistence through the quiet struggles of life is your most impressive trait. ⚓",
            "Breathe. You have survived every single one of your hardest days so far. 🌬️",
            "You are becoming the version of yourself you once only dared to dream of. 🦋",
            "There is a quiet, powerful resilience in the way you keep showing up for yourself. 🌱",
            "You handle 'low battery' days with such honest and healthy self-care. 🔋",
            "The way you get back up after a trip is more important than the fall itself. 🌈",
            "Your calm in a long grocery line is a testament to your inner peace. 🧘",
            "You learn from your 'oops' moments with such a humble and open heart. 💡",
            "You don't let a rainy day dictate the weather inside your soul. ☔",
            "The way you trust the process even when it's slow is truly inspiring. ⏳",
            "Your courage is quiet, but it is steady and undeniable. 🦁",
            "You bounce back from rejection with a wisdom that is beyond your years. 🧠",
            "You always give yourself permission to try again tomorrow. 🌅",
            "Your ability to find the silver lining is a gift to everyone you know. ☁️",
            "You stay true to yourself even when the world tries to change you. 💎",
            "Facing your small fears every day is how you've built such a big life. 🏔️",
            "You know exactly when to push forward and exactly when to take a rest. 🛑",
            "You are growing through everything you go through, and it shows. 🌻",
            "Your strength doesn't always roar; sometimes it's the quiet voice at the end of the day. 🌙"
        ],
        creative: [
            "You see connections in the world that the rest of us haven't discovered yet. 🎨",
            "Your unique perspective turns the mundane into something truly miraculous. 🪄",
            "Your creative spirit is a catalyst for joy in the lives of everyone around you. 💡",
            "The way you express yourself is a gift to everyone lucky enough to witness it. 🎭",
            "Creation is an act of bravery, and you live fearlessly. 🔥",
            "Your imaginative storytelling makes even the simplest day feel like an adventure. 🐉",
            "The color palette of your life is vibrant, bold, and entirely your own. 🌈",
            "Your doodle mastery transforms every boring meeting into a gallery of ideas. ✍️",
            "The way you invent new recipes on the fly is a true culinary art. 🍲",
            "You see shapes in the clouds that tell stories the rest of us miss. ☁️",
            "Your ability to find the perfect song for any mood is a true superpower. 🎵",
            "Your fashion sense is a direct reflection of your brilliant and unique soul. 👗",
            "You think outside the box, and then you decorate the box too. 📦",
            "Turning scraps into treasures is just a normal Tuesday for you. 💎",
            "Your visionary perspective helps others see the beauty in themselves. 👁️",
            "Your brain is a beautiful gallery of 'what ifs' and 'why nots'. 🖼️",
            "You write the kind of greeting cards that people keep forever. 💌",
            "You solve everyday problems with a designer's eye for elegance. 📐",
            "Your handwriting is a work of art in a world of digital fonts. 🖋️",
            "The way you tell a joke is just as creative as the punchline itself. 🎤"
        ],
        witty: [
            "You're the human equivalent of a perfect cup of coffee on a rainy day. ☕",
            "If life was a game, you clearly started with the 'Premium' personality package. 💎",
            "You're the 'unexpectedly fast Wi-Fi' of human beings. 🚀",
            "You have a sense of humor that could brighten up a Monday morning commute. 🚌",
            "You are proof that some people were just born with the 'Main Character' energy. 🎬",
            "You're the human version of a high-five. ✋",
            "You have the confidence of a middle-aged man in a hardware store. 🛠️",
            "You are like a fresh pair of socks—unexpectedly life-changing. 🧦",
            "You're the 'Golden Ticket' of friends. 🎫",
            "10/10 would definitely hang out with you again. ⭐",
            "You're as smart as a whip and twice as fast. ⚡",
            "You are the 'extra sauce' that makes life much more flavorful. 🥫",
            "Sharp as a tack, but significantly less pointy. 📍",
            "You're a cool glass of water in a vast desert of boring people. 🧊",
            "You are the human equivalent of Friday at 5:00 PM. 🥂",
            "You're more fun than a ball pit, and significantly more hygienic. 🎈",
            "You are one in a melon, and that's a scientific fact. 🍉",
            "Like a warm muffin, you just make everything a little bit better. 🧁",
            "You are the sprinkles on the donut of life. 🍩",
            "If you were a dog, you'd be a Golden Retriever. Everyone loves you. 🐕"
        ]
    };

    const aesthetics = {
        life: { c1: '#ff9a9e', c2: '#fad0c4', c3: '#fbc2eb', c4: '#ffecd2' },
        kindness: { c1: '#f093fb', c2: '#f5576c', c3: '#f8cdda', c4: '#fbc2eb' },
        resilience: { c1: '#4facfe', c2: '#00f2fe', c3: '#a8edea', c4: '#fed6e3' },
        creative: { c1: '#667eea', c2: '#764ba2', c3: '#89f7fe', c4: '#66a6ff' },
        witty: { c1: '#43e97b', c2: '#38f9d7', c3: '#a8ff78', c4: '#fff1eb' }
    };

    let state = { category: 'life', currentText: "", busy: false };

    const dom = {
        text: document.getElementById('compliment-text'),
        stage: document.getElementById('display-stage'),
        pills: document.querySelectorAll('.category-pill'),
        genBtn: document.getElementById('gen-btn'),
        copyBtn: document.getElementById('copy-btn'),
        toast: document.getElementById('toast'),
        orbs: [
            document.getElementById('orb-1'),
            document.getElementById('orb-2'),
            document.getElementById('orb-3'),
            document.getElementById('orb-4')
        ]
    };

    const applyTheme = (cat) => {
        const theme = aesthetics[cat];
        document.documentElement.style.setProperty('--c1', theme.c1);
        document.documentElement.style.setProperty('--c2', theme.c2);
        document.documentElement.style.setProperty('--c3', theme.c3);
        document.documentElement.style.setProperty('--c4', theme.c4);
    };

    const triggerTextUpdate = async () => {
        if (state.busy) return;
        state.busy = true;

        dom.stage.classList.replace('enter', 'exit');
        await new Promise(r => setTimeout(r, 750));

        const pool = library[state.category];
        let next = pool[Math.floor(Math.random() * pool.length)];
        while (next === state.currentText) next = pool[Math.floor(Math.random() * pool.length)];
        state.currentText = next;

        dom.text.innerText = `"${state.currentText}"`;
        dom.stage.classList.replace('exit', 'enter');
        
        state.busy = false;
    };

    const showToast = (msg) => {
        dom.toast.innerText = msg;
        dom.toast.classList.add('show');
        setTimeout(() => { dom.toast.classList.remove('show'); }, 3000);
    };

    const init = () => {
        dom.pills.forEach(pill => {
            pill.addEventListener('click', (e) => {
                const newCat = e.target.getAttribute('data-cat');
                if (newCat === state.category || state.busy) return;
                dom.pills.forEach(p => p.classList.remove('active'));
                e.target.classList.add('active');
                state.category = newCat;
                applyTheme(newCat);
                triggerTextUpdate();
            });
        });

        dom.genBtn.addEventListener('click', triggerTextUpdate);

        dom.copyBtn.addEventListener('click', () => {
            if (!state.currentText) return;
            const el = document.createElement('textarea');
            el.value = state.currentText;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            showToast("Sentiment Captured 📋");
        });

        applyTheme('life');
        triggerTextUpdate();
    };

    return { init };
})();

document.addEventListener('DOMContentLoaded', AmbientEngine.init);