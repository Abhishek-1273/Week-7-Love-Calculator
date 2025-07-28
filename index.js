let alreadyChecked = false;

function calculatorLove() {
    let name1 = document.getElementById("name1").value.trim();
    let name2 = document.getElementById("name2").value.trim();
    let loveScore = Math.floor(Math.random() * 101);

    let validNameRegex = /^[A-Za-z\s]+$/;

    if (name1 === "" || name2 === "") {
        document.getElementById("result").innerText = "Please enter both names!";
        return;
    }
    if (!validNameRegex.test(name1) || !validNameRegex.test(name2)) {
        document.getElementById("result").innerText = "Only alphabets are allowed. No numbers or symbols!";
        return;
    }

    let message = "";
    if (loveScore === 100) {
        message = "💯 Soulmates Forever! True Love Exists! 💍💘";
    } else if (loveScore >= 90) {
        message = "💘 Match Made in Heaven! Pure Connection!";
    } else if (loveScore >= 80) {
        message = "🌟 You're the dream team! Keep the magic alive!";
    } else if (loveScore >= 70) {
        message = "✨ There's chemistry! A little effort can go a long way.";
    } else if (loveScore >= 60) {
        message = "😊 Things look good! Just communicate well.";
    } else if (loveScore >= 45) {
        message = "🤞 Not bad! With time, this could grow into something.";
    } else if (loveScore >= 30) {
        message = "😐 There’s potential, but it needs work.";
    } else if (loveScore >= 15) {
        message = "😕 Hmm... mixed signals. Proceed carefully.";
    } else if (loveScore >= 1) {
        message = "😬 Unlikely to work. Different wavelengths.";
    } else {
        message = "💔 No chance! Like oil and water.";
    }

    document.getElementById("result").innerText = "Calculating love score...";
    setTimeout(() => {
        document.getElementById("result").innerText = `${name1}❤️${name2} = ${loveScore}%\n${message}`;
    }, 5000);

    const audio = document.getElementById("loveAudio");
    audio.volume = 0.2;
    audio.muted = false;
    audio.play().catch(() => {
        console.warn("Autoplay blocked until user interacts.");
    });

    alreadyChecked = true;
    document.querySelector(".btn-chk").disabled = true;
}


let facts = [
  "❤ Hugging your partner for 20 seconds releases oxytocin.",
  "💓 Your heartbeat syncs with your partner when cuddling.",
  "🧠 Love and addiction activate the same brain area.",
  "🦋 Butterflies in your stomach? That’s adrenaline.",
  "👀 Eye contact for 2 minutes can build emotional connection.",
  "🎯 Saying 'I love you' activates the brain’s reward system.",
  "🤝 Holding hands reduces stress and physical pain.",
  "📞 Long-distance couples often build stronger emotional bonds.",
  "😵 Falling in love lowers serotonin — creating obsession.",
  "🌡 Love literally makes you feel warmer.",
  "👃 You’re subconsciously attracted to someone’s scent.",
  "📅 Couples who laugh together stay longer.",
  "🧬 Genetic similarity affects romantic attraction.",
  "🎶 Listening to music together strengthens emotional bonds.",
  "🧸 Love boosts your immune system.",
  "😳 People blink slower when looking at someone they love.",
  "📲 Texting 'Good morning' increases relationship satisfaction.",
  "🧠 Memories of love activate pain relief centers in the brain.",
  "💬 People in love talk more about their partner than themselves.",
  "🫂 Long hugs release stress-relieving chemicals.",
  "💋 Kissing lowers cortisol levels — the stress hormone.",
  "🍫 Chocolate and love both trigger dopamine.",
  "🥺 Couples mimic each other's body language unconsciously.",
  "🧭 Most people are attracted to those with similar values.",
  "👩‍❤‍👨 62% of people believe in soulmates.",
  "🎁 Giving gifts releases more dopamine than receiving.",
  "🧠 Love can temporarily reduce IQ — love brain fog is real!",
  "📚 Romantic people often love poetry and music.",
  "💞 Physical touch improves emotional bonding.",
  "📉 Breakups cause real withdrawal-like symptoms.",
  "😴 Sleeping close improves REM sleep quality.",
  "📷 Looking at partner photos relieves pain.",
  "💐 Smelling flowers increases romantic thoughts.",
  "💌 Saying 'I miss you' increases oxytocin production.",
  "🚶‍♂ Couples who walk in sync report more satisfaction.",
  "👂 Listening is a top-ranked love language.",
  "🧠 Love strengthens memory when tied to strong emotions.",
  "🎨 Making art together builds intimacy.",
  "📦 Nostalgia increases feelings of love.",
  "🐦 Love letters increase dopamine — even if not real!",
  "📖 Storytelling boosts partner empathy.",
  "🖼 Couples who display photos of each other feel closer.",
  "🌃 Star-gazing is linked with emotional closeness.",
  "🧃 Sharing food increases oxytocin levels.",
  "🍿 Watching movies together builds deeper emotional memories.",
  "💭 Thinking about love activates parts of the brain related to rewards.",
  "🎈 Celebrating small wins boosts connection.",
  "🏃‍♀ Working out together increases physical attraction.",
  "💬 Deep late-night conversations strengthen bonds.",
  "🛏 Cuddling before sleep improves trust levels."
];

let current = 0;

function showFact() {
  const factDisplay = document.getElementById("factDisplay");

  // Reset animation
  factDisplay.style.animation = "none";
  void factDisplay.offsetWidth; // force reflow
  factDisplay.textContent = facts[current];
  factDisplay.style.animation = "fadeIn 1s ease forwards";

  current = (current + 1) % facts.length;
}

window.onload = () => {
  showFact();
  setInterval(showFact, 5000); // new fact every 5 seconds
};