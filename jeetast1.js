// -------------------------
// QUESTIONS (Sample)
// -------------------------
const maths = [
    { q: "∫ x dx = ?", options: ["x²/2 + C", "2x + C", "x³ + C", "1/x + C"], ans: 0 },
    { q: "Derivative of sin x?", options: ["cos x", "-sin x", "tan x", "-cos x"], ans: 0 },
];

const physics = [
    { q: "Speed of light?", options: ["3×10⁸ m/s", "3×10⁶ m/s", "3×10⁵ m/s", "3×10³ m/s"], ans: 0 },
    { q: "Unit of force?", options: ["Joule", "Newton", "Watt", "Pascal"], ans: 1 },
];

const chemistry = [
    { q: "Atomic number of Oxygen?", options: ["6", "7", "8", "9"], ans: 2 },
    { q: "Chemical formula of water?", options: ["H₂", "O₂", "H₂O", "HO₂"], ans: 2 },
];

// Duplicate to 30 questions each for demo
while (maths.length < 30) maths.push(...maths);
while (physics.length < 30) physics.push(...physics);
while (chemistry.length < 30) chemistry.push(...chemistry);


// -------------------------
// GENERATE QUESTIONS
// -------------------------
function loadQuestions(sectionId, questions, prefix) {
    const container = document.getElementById(sectionId);
    questions.forEach((item, index) => {
        const box = document.createElement("div");
        box.className = "question-box";

        box.innerHTML = `
            <p><strong>Q${index + 1}:</strong> ${item.q}</p>
            ${item.options.map((opt, i) => `
                <label>
                    <input type="radio" name="${prefix}${index}" value="${i}">
                    ${opt}
                </label><br>
            `).join("")}
        `;
        container.appendChild(box);
    });
}

loadQuestions("maths-questions", maths, "m");
loadQuestions("physics-questions", physics, "p");
loadQuestions("chem-questions", chemistry, "c");


// -------------------------
// TIMER (3 hours)
// -------------------------
let secondsLeft = 3 * 60 * 60;

function updateTimer() {
    let h = Math.floor(secondsLeft / 3600);
    let m = Math.floor((secondsLeft % 3600) / 60);
    let s = secondsLeft % 60;

    document.getElementById("timer").innerText =
        `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

    if (secondsLeft === 0) {
        submitTest();
    } else {
        secondsLeft--;
        setTimeout(updateTimer, 1000);
    }
}
updateTimer();


// -------------------------
// SCORE CALCULATION
// -------------------------
function submitTest() {
    let score = 0;

    function evaluate(questions, prefix) {
        questions.forEach((q, i) => {
            let selected = document.querySelector(`input[name="${prefix}${i}"]:checked`);
            if (selected && Number(selected.value) === q.ans) score += 4;
        });
    }

    evaluate(maths, "m");
    evaluate(physics, "p");
    evaluate(chemistry, "c");

    document.getElementById("resultBox").classList.remove("hidden");
    document.getElementById("scoreText").innerText = `Your total score is: ${score} / 360`;
}

document.getElementById("submitTest").addEventListener("click", submitTest);
