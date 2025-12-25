const allQuestions = [
  {
    question: "According to the text, laws are primarily made by:",
    options: ["Morality and custom", "The state or the courts", "Society in general", "Individuals"],
    answer: 1
  },
  {
    question: "What is a key difference between laws and rules of morality?",
    options: [
      "Laws aim to control behavior, while morality doesn't",
      "Laws are always fair, while morality can be subjective",
      "Laws are enforced by the courts, while morality is not",
      "Morality is written down, while laws are not"
    ],
    answer: 2
  },
  {
    question: "Which of the following is the correct English equivalent of 'nizolarni hal qilish'?",
    options: ["break a law", "resolving disputes", "go to prison", "facilitate business activities"],
    answer: 1
  },

  {
    question: "The English phrase 'to ensure a safe and peaceful society' is equivalent to:",
    options: ["qamoqqa tushmoq", "xatti-harakatlarimizni o'zgartirmoq", "xavfsiz va tinch jamiyatni ta'minlash", "qonunni buzish"],
    answer: 2
  },

  {
    question: "Which word is a synonym for 'govern'?",
    options: ["change", "rule", "admit", "guarantee"],
    answer: 1
  },

  {
    question: "The synonym for 'enforce' from the list is:",
    options: ["pressurize", "to be like", "express", "set"],
    answer: 3
  },

  {
    question: "What is a synonym for 'crime'?",
    options: ["liberty", "wrongdoing", "neatly", "strong"],
    answer: 1
  },

  {
    question: "The word 'jail' is a synonym for:",
    options: ["regulation", "property", "prison", "fine"],
    answer: 2
  },

  {
    question: "Which of the following is the English translation of 'qonunga murojaat qilish'?",
    options: [
      "to respect individual rights",
      "to arrest and punish people without trial",
      "to believe in the Rule of Law",
      "to turn to the law"
    ],
    answer: 3
  },

  {
    question: "If someone is said 'to lay down the law,' what are they doing?",
    options: [
      "resolve the dispute peacefully",
      "create more conflict",
      "enforce rules strictly",
      "mediate between parties"
    ],
    answer: 0
  },

  {
    question: "Which idiom relates to a situation where there are no rules or morals governing behavior?",
    options: ["law and order", "the law of the jungle", "to lay down the law", "necessity knows no law"],
    answer: 1
  },

  {
    question: "According to Exercise 9, Oliy Majlis (the Uzbek Parliament) _______ laws.",
    options: ["enforce", "break", "study", "make"],
    answer: 3
  },

  {
    question: "In the sentence 'A judge is a court officer authorized to decide legal cases,' the word 'judge' functions as a:",
    options: ["verb", "noun", "adjective", "adverb"],
    answer: 1
  },

  {
    question: "In the sentence 'Don't judge a book by its cover,' the word 'judge' functions as a:",
    options: ["noun", "verb", "adjective", "adverb"],
    answer: 1
  },

  {
    question: "Which is the best simple replacement for 'for the reason that'?",
    options: ["to", "because", "with", "after"],
    answer: 1
  },

  {
    question: "In the sentence 'At this point in time, no legal remedy is available...', the phrase 'At this point in time' can be replaced with:",
    options: ["then", "before", "after", "if"],
    answer: 0
  },

  {
    question: "Which modal verb expresses a strong recommendation or advice?",
    options: ["Must", "Ought to", "Should", "Needn't"],
    answer: 2
  },

  {
    question: "The best English translation of 'Agar kishi qonunni buzsa, u jazolanishi mumkin' is:",
    options: [
      "Everyone should know the laws",
      "If a person breaks the law, they may be punished",
      "Law is a social phenomenon",
      "Law is an instrument for achieving goals"
    ],
    answer: 1
  },

  {
    question: "(Based on Ex. 8 lesson 1.) If someone is said 'to lay down the law' what are they doing?",
    options: [
      "Breaking established rules",
      "Interpreting existing legislation",
      "Establishing or stating rules or commands firmly.",
      "Ignoring the legal framework."
    ],
    answer: 2
  },

  {
    question: "(Based on Ex. 15 lesson 1.) According to the modal verbs explanation, which modal verb expresses a prohibition?",
    options: [
      "Should",
      "Ought to",
      "Mustn't",
      "Needn't"
    ],
    answer: 2
  },
  {
    question: "(Based on Ex. 1 lesson 2.) Which model expresses full agreement with a statement?",
    options: [
      "I am afraid, I can’t agree with it",
      "Both of the above.",
      "Neither of the above.",
      "I fully agree with the statement"
    ],
    answer: 3
  },

  {
    question: "(Based on Ex. 1 lesson 2.) How would you express disagreement with the statement 'Not everything we do is governed by some set of rules'?",
    options: [
      "I fully agree with the statement",
      "I am afraid, I can’t agree with it",
      "Perhaps",
      "I'm not sure"
    ],
    answer: 1
  },

  {
    question: " When the world was at a very primitive stage of development there were no laws to regulate life of people. If a man chose to kill his wife or if a woman succeeded in killing her husband that was their own business and no one interfered officially. In primitive societies, personal disputes were not officially intervened in "
    ,

    options: [
      "True",
      "False",
    ],
    answer: 0
  },

  {
    question: "When the world was at a very primitive stage of development there were no laws to regulate life of people. If a man chose to kill his wife or if a woman succeeded in killing her husband that was their own business and no one interfered officially.According to the text, in early times,what was the consequence of a husband killing his wife?",

    options: [
      "Public execution",
      "It was considered a personal matter.",
      "Intervention by elders",
      "Imprisonment"
    ],
    answer: 1
  },

  {
    question: "25.	(Based on Ex. 2 lesson 2.) What has led to an increased need for rules and regulations?",
    options: [
      "Decrease in population",
      "Simpler lifestyles",
      "Scientific and social developments",
      "Less interaction between people"
    ],
    answer: 2
  },

  {
    question: "The English equivalent of 'hayotni tartibga solish' is:",
    options: [
      "consulting the police",
      "regulate life",
      "live in a complicated world",
      "blamed on somebody"
    ],
    answer: 1
  },

  {
    question: "'O'zini oqilona tutishdan bosh tortadi' translates to:",
    options: [
      "to testify under oath",
      "refuses to behave reasonably",
      "to recover your loss",
      "interfered officially"
    ],
    answer: 1
  },

  {
    question: "Which word is a synonym for 'consult'?",
    options: [
      "hire",
      "advice",
      "regain",
      "deny"
    ],
    answer: 1
  },

  {
    question: "A synonym for 'injure' is:",
    options: [
      "lend",
      "demand",
      "hurt",
      "get used to"
    ],
    answer: 2
  },

  {
    question: "What is a synonym for 'primitive'?",
    options: [
      "responsibility",
      "earliest",
      "rational",
      "complex"
    ],
    answer: 1
  },

  {
    question: "The word 'attorney' is a synonym for:",
    options: [
      "debt",
      "lawyer",
      "trial",
      "oath"
    ],
    answer: 1
  },

  {
    question: "\"Scientific and social developments increase\" translates to:",
    options: [
      "qonunlar oqilona ehtiyojlarga asoslangan",
      "ilmiy va ijtimoiy taraqqiyot oshadi",
      "qonuniy majburiyatlar bilan shartnoma tuzadi",
      "oqilona xatti-harakat qilishdan bosh tortadi"
    ],
    answer: 1
  },

  {
    question: "Which of the following is the English translation of \"siz da'vogar bo'lasiz va u javobgar bo'ladi\"?",
    options: [
      "refuses to behave reasonably",
      "injured in a train accident",
      "you become a plaintiff and he is a defendant",
      "accustomed to using legal means"
    ],
    answer: 2
  },

  {
    question: "When there were no legal guidelines for lifestyle changes, murder was considered a family affair.",
    options: [
      "True",
      "False",
      "",
      ""
    ],
    answer: 0
  },

  {
    question: "In court, promising to tell the truth involves:",
    options: [
      "experience in the field",
      "detailed information",
      "using a lie detector system",
      "an oath not to tell anything but the truth"
    ],
    answer: 3
  },

  {
    question: "To \"lawyer up\" means:",
    options: [
      "To argue with a lawyer",
      "To hire a lawyer",
      "To study law",
      "To avoid lawyers"
    ],
    answer: 1
  },

  {
    question: "What does it mean if something is \"against the law\"?",
    options: [
      "It is morally wrong",
      "It is permitted with restrictions",
      "It is illegal",
      "It is suggested but not required"
    ],
    answer: 2
  },

  {
    question: "\"Our manager thinks he's ___ coming in late every morning\"",
    options: [
      "bending the law",
      "above the law",
      "lawyered up",
      "a slap on the wrist"
    ],
    answer: 1
  },

  {
    question: "As the owner of the company, Michelle had a ___ in seeing it succeed.",
    options: [
      "vested interest",
      "open-and-shut case",
      "letter of the law",
      "spirit of the law"
    ],
    answer: 0
  },

  {
    question: "The party accused in court is the:",
    options: [
      "plaintiff",
      "police",
      "defendant",
      "lawyer"
    ],
    answer: 2
  },

  {
    question: "Who advises people about laws and represents them in court?",
    options: [
      "Judge",
      "Police",
      "Lawyer",
      "Plaintiff"
    ],
    answer: 2
  },

  {
    question: "What supports the court system in enforcing laws?",
    options: [
      "Public opinion",
      "International pressure",
      "The power of the police",
      "Moral obligation"
    ],
    answer: 2
  },

  {
    question: "\"Until such time as\" can be replaced with:",
    options: [
      "during",
      "while",
      "until",
      "for"
    ],
    answer: 2
  },

  {
    question: "\"Often bills are discussed\" is an example of:",
    options: [
      "Present continuous tense",
      "Simple present tense",
      "Simple past tense",
      "Present perfect tense"
    ],
    answer: 1
  },

  {
    question: "\"Now the bill is being discussed\" is an example of:",
    options: [
      "Present continuous tense",
      "Simple present tense",
      "Simple past tense",
      "Present perfect tense"
    ],
    answer: 0
  },

  {
    question: "The passive form of \"Police investigate crimes\" is:",
    options: [
      "Crimes investigate police",
      "Crimes are investigated by police",
      "Crimes will be investigated by police",
      "Crimes were investigated by police"
    ],
    answer: 1
  },

  {
    question: "The passive form of \"The Parliament has already passed the law\" is:",
    options: [
      "The law has already been passed by the Parliament",
      "The law is already passed by the Parliament",
      "The law was already passed by the Parliament",
      "The law will already be passed by the Parliament"
    ],
    answer: 0
  },

  {
    question: "The best English translation for \"Ilmiy-ijtimoiy o'zgarishlar kundalik hayot faoliyatimiz sur'atini oshiradi\" is:",
    options: [
      "Legal implications of this activity make us think",
      "Scientific and social developments increase the tempo of our daily living activities",
      "People all over the world are becoming more accustomed to using legal means",
      "Multinational companies employ lawyers"
    ],
    answer: 1
  },

  {
    question: "The best English translation for \"Ko'p millatli kompaniyalar shartnomalarni haqiqiy bo'lishini ta'minlash uchun advokat yollashadi\" is:",
    options: [
      "Although laws are based on the reasonable needs of society",
      "In general, it seems that people all over the world are becoming more accustomed",
      "Using legal means to regulate their relationships",
      "Multinational companies employ lawyers to ensure that their contracts are valid"
    ],
    answer: 3
  },

  {
    question: "(Based on Ex. 18 lesson 2.) The best English translation for 'Ko'p millatli kompaniyalar shartnomalari haqiqiy bo'lishini ta'minlash uchun advokat yollashadi is:",
    options: [
      " Before starting any risky business, we begin to think about the legal consequences of this activity.", 
      "Although laws are based on the reasonable needs of society, we often do not notice them.", 
      " In general, it seems that people all over the world are becoming more accustomed to using legal means to regulate their relationships with each other.", 
      "Multinational companies employ lawyers to ensure that their contracts are valid."
    ],
    answer: 3
  },

  {
    question: "(Based on Ex. 2 - Paragraph 1. Lesson 3.) Read the paragraph and determine if the statement following it is True or False.Law affects everyday life and society in a variety of ways. The courts and police enforce this system of rules and punish people who break or offend the laws. A court may make offenders pay a fine or other penalty or send them to jail.Statement: Courts and police are responsible for enforcing laws and penalizing offenders.",

    options: [
      "True", 
      "False", 
    ],
    answer: 0
  },
];

// =====================
// RANDOM 50 SAVOL
// =====================
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

let questions = shuffle([...allQuestions]).slice(0, 50);

// =====================
// O'ZGARUVCHILAR
// =====================
let current = 0;
let selectedAnswers = new Array(questions.length).fill(null);
let time = 30;
let timerInterval;

// =====================
// ELEMENTLAR
// =====================
const box = document.getElementById("question-box");
const progress = document.getElementById("progress");
const timer = document.getElementById("timer");
const result = document.getElementById("result");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

// =====================
// SAVOL CHIQARISH
// =====================
function loadQuestion() {
  clearInterval(timerInterval);
  time = 30;
  startTimer();

  const q = questions[current];
  progress.textContent = `Savol ${current + 1} / ${questions.length}`;

  nextBtn.disabled = selectedAnswers[current] === null;

  box.innerHTML = `
    <div class="question">
      <h2>${q.question || "According to the text, laws are primarily made by: "}</h2>
      ${q.options.map((opt, i) => `
        <label class="option">
          <input type="radio" name="option"
            ${selectedAnswers[current] === i ? "checked" : ""}
            onclick="selectAnswer(${i})">
          <span class="checkmark"></span>
          ${opt || ""}
        </label>
      `).join("")}
    </div>
  `;
}

// =====================
// JAVOB TANLASH
// =====================
function selectAnswer(i) {
  selectedAnswers[current] = i;
  nextBtn.disabled = false;
}

// =====================
// TIMER
// =====================
function startTimer() {
  timer.textContent = `⏱ ${time} s`;

  timerInterval = setInterval(() => {
    time--;
    timer.textContent = `⏱ ${time} s`;

    if (time === 0) {
      nextQuestion();
    }
  }, 1000);
}

// =====================
// NAVIGATSIYA
// =====================
function nextQuestion() {
  if (current < questions.length - 1) {
    current++;
    loadQuestion();
  } else {
    showResult();
  }
}

function prevQuestion() {
  if (current > 0) {
    current--;
    loadQuestion();
  }
}

nextBtn.onclick = nextQuestion;
prevBtn.onclick = prevQuestion;

// =====================
// NATIJA + TAHLIL
// =====================
function showResult() {
  clearInterval(timerInterval);

  let score = 0;
  let analysisHTML = "";

  questions.forEach((q, i) => {
    const user = selectedAnswers[i];
    const correct = user === q.answer;
    if (correct) score++;

    analysisHTML += `
      <div style="
        background:${correct ? "#064e3b" : "#450a0a"};
        padding:10px;
        margin-bottom:10px;
        border-radius:8px;
        text-align:left;
      ">
        <b>${i + 1}. ${q.question}</b><br>
        Siz tanladingiz: <b>${q.options[user] ?? "Belgilanmagan"}</b><br>
        To‘g‘ri javob: <b>${q.options[q.answer]}</b>
        ${correct ? " ✅" : " ❌"}
      </div>
    `;
  });

  const percent = Math.round((score / questions.length) * 100);

  box.innerHTML = `
    <h2>🎉 Test yakunlandi</h2>
    <p>To‘g‘ri: <b>${score}</b> / ${questions.length}</p>
    <p>Foiz: <b>${percent}%</b></p>

    <button id="restart" style="
      width:100%;
      padding:10px;
      margin:15px 0;
      border:none;
      border-radius:8px;
      background:#22c55e;
      cursor:pointer;
      font-size:16px;
    ">🔄 Qayta boshlash</button>

    <h3>📊 Tahlil</h3>
    ${analysisHTML}
  `;

  progress.textContent = "";
  timer.textContent = "";
  result.innerHTML = "";
}

// =====================
// QAYTA BOSHLASH
// =====================
function restartQuiz() {
  questions = shuffle([...allQuestions]).slice(0, 50);
  current = 0;
  selectedAnswers = new Array(questions.length).fill(null);
  loadQuestion();
}

document.addEventListener("click", (e) => {
  if (e.target.id === "restart") restartQuiz();
});

// =====================
loadQuestion();
