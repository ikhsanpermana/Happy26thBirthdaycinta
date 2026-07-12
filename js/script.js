/* ============================================
   The Gallery of Sayangkuu
   script.js
============================================ */

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

/* ============================================
   LOADER
============================================ */

window.addEventListener("load", () => {

    gsap.to("#loader", {

        opacity: 0,
        duration: 1.5,
        delay: 1,

        onComplete: () => {

            document.getElementById("loader").style.display = "none";

        }

    });

});


/* ============================================
   LENIS SMOOTH SCROLL
============================================ */

const lenis = new Lenis({

    duration: 1.3,

    smoothWheel: true,

});

function raf(time) {

    lenis.raf(time);

    requestAnimationFrame(raf);

}

requestAnimationFrame(raf);


/* ============================================
   ENTER BUTTON
============================================ */

const enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click", () => {

    window.scrollTo({

        top: window.innerHeight,

        behavior: "smooth"

    });

});


/* ============================================
   MUSIC PLAYER
============================================ */

const music = document.getElementById("bgMusic");

const musicButton = document.getElementById("musicButton");

let playing = false;

musicButton.addEventListener("click", () => {

    if (!playing) {

        music.play();

        musicButton.innerHTML = "❚❚ Pause";

        playing = true;

    } else {

        music.pause();

        musicButton.innerHTML = "♫ Music";

        playing = false;

    }

});


/* ============================================
   HERO ANIMATION
============================================ */

gsap.from(".hero h1", {

    y: 80,

    opacity: 0,

    duration: 1.4,

    ease: "power3.out"

});

gsap.from(".hero p", {

    y: 40,

    opacity: 0,

    delay: .5,

    duration: 1

});

gsap.from("#enterButton", {

    y: 30,

    opacity: 0,

    delay: .8,

    duration: 1

});


/* ============================================
   GALLERY REVEAL
============================================ */

gsap.utils.toArray(".gallery-section").forEach(section => {

    gsap.from(section, {

        opacity: 0,

        y: 120,

        duration: 1.3,

        ease: "power3.out",

        scrollTrigger: {

            trigger: section,

            start: "top 80%"

        }

    });

});


/* ============================================
   QUOTE
============================================ */

gsap.from("blockquote", {

    opacity: 0,

    scale: .95,

    duration: 1.4,

    scrollTrigger: {

        trigger: ".quote-section",

        start: "top 70%"

    }

});


/* ============================================
   LETTER TYPEWRITER
============================================ */

const letter = `

Happy Birthday, Sayangkuu ❤️

Today is all about celebrating the wonderful person you are.

Thank you for bringing happiness, laughter, and warmth into my life.

Every moment we share becomes another beautiful memory that I treasure deeply.

On your special day, I wish you endless happiness, good health, and dreams that come true.

No matter where life takes us, I hope we continue creating memories together.

Thank you for being my safe place.

Thank you for being you.

I love you more than words can ever describe.

Forever Yours,

Ikhsan ❤️

`;

const typed = document.getElementById("typedLetter");

let index = 0;

function typeLetter() {

    if (index < letter.length) {

        typed.innerHTML += letter.charAt(index);

        index++;

        setTimeout(typeLetter, 35);

    }

}

ScrollTrigger.create({

    trigger: ".letter",

    start: "top 70%",

    once: true,

    onEnter: typeLetter

});


/* ============================================
   PARALLAX IMAGE
============================================ */

gsap.utils.toArray(".image-side img").forEach(image => {

    gsap.to(image, {

        y: -50,

        ease: "none",

        scrollTrigger: {

            trigger: image,

            scrub: true

        }

    });

});


/* ============================================
   SURPRISE BUTTON
============================================ */

document.getElementById("surprise").addEventListener("click", () => {

    confetti({

        particleCount: 250,

        spread: 180,

        origin: {

            y: 0.6

        }

    });

});


/* ============================================
   FLOATING HEARTS
============================================ */

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.bottom = "-20px";

    heart.style.fontSize = (Math.random() * 15 + 10) + "px";

    heart.style.opacity = .6;

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    gsap.to(heart, {

        y: -window.innerHeight - 200,

        x: Math.random() * 100 - 50,

        rotation: Math.random() * 90,

        duration: 10,

        ease: "none",

        onComplete: () => heart.remove()

    });

}

setInterval(createHeart, 1200);


/* ============================================
   MOUSE GLOW
============================================ */

const glow = document.createElement("div");

glow.style.position = "fixed";

glow.style.width = "300px";

glow.style.height = "300px";

glow.style.borderRadius = "50%";

glow.style.pointerEvents = "none";

glow.style.background =

"radial-gradient(circle, rgba(255,255,255,.25), transparent 70%)";

glow.style.mixBlendMode = "soft-light";

glow.style.zIndex = "-1";

document.body.appendChild(glow);

window.addEventListener("mousemove", e => {

    gsap.to(glow, {

        x: e.clientX - 150,

        y: e.clientY - 150,

        duration: .4

    });

});


/* ============================================
   BIRTHDAY SECTION
============================================ */

gsap.from(".birthday h1", {

    opacity: 0,

    y: 80,

    duration: 1.4,

    scrollTrigger: {

        trigger: ".birthday",

        start: "top 70%"

    }

});


/* ============================================
   FOOTER
============================================ */

gsap.from("footer", {

    opacity: 0,

    duration: 1,

    scrollTrigger: {

        trigger: "footer",

        start: "top 90%"

    }

});