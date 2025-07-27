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

