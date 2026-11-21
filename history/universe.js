const timelineControls = document.querySelector(".timeline-controls");
const milestones = Array.from(timelineControls.querySelectorAll("button"), (button) => ({
  button,
  event: document.getElementById(button.getAttribute("aria-controls"))
}));

function showMilestone(selected) {
  for (const milestone of milestones) {
    const active = milestone === selected;
    milestone.button.setAttribute("aria-pressed", String(active));
    milestone.event.hidden = !active;
  }
}

for (const milestone of milestones) {
  milestone.button.addEventListener("click", () => showMilestone(milestone));
}
showMilestone(milestones[0]);
timelineControls.hidden = false;

for (const button of document.querySelectorAll("[data-video]")) {
  button.hidden = false;
  button.addEventListener("click", () => {
    const player = document.createElement("iframe");
    player.src = "https://www.youtube.com/embed/" + button.dataset.video + "?autoplay=1";
    player.title = button.dataset.title;
    player.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    player.allowFullscreen = true;
    player.referrerPolicy = "strict-origin-when-cross-origin";
    button.closest(".video-frame").replaceChildren(player);
    player.focus({ preventScroll: true });
  });
}

const chapters = [
  { name: "The Big Bang", anchor: "big-bang" },
  { name: "Stars and galaxies", anchor: "stars" },
  { name: "The Solar System", anchor: "solar-system" },
  { name: "Earth and the Moon", anchor: "earth-moon" },
  { name: "Early Earth", anchor: "young-earth" }
];

const questions = [
  {
    chapter: 0, type: "single",
    prompt: "What is expanding in the Big Bang model?",
    options: ["A cloud moving away from a central point in existing space", "Space itself, increasing distances on large scales", "The surfaces of stars and planets"],
    correct: [1],
    explanation: "The expansion increases distances on cosmic scales. Any point in the stretchy fabric analogy sees more distant points move farther away."
  },
  {
    chapter: 0, type: "multiple",
    prompt: "Which observations help scientists reconstruct a hot, expanding early universe?",
    options: ["Redshift generally increases with galaxy distance", "The cosmic microwave background is seen across the sky", "The Moon’s phases repeat", "Earth’s crust shifts over time"],
    correct: [0, 1],
    explanation: "Galaxy redshift traces expansion, and the microwave background preserves light that travelled once the universe cooled enough for neutral atoms to form."
  },
  {
    chapter: 0, type: "truefalse",
    prompt: "The cosmic microwave background comes from the first generation of stars.",
    options: ["True", "False"],
    correct: [1],
    explanation: "That light began travelling freely about 380,000 years after the Big Bang, long before the first stars."
  },
  {
    chapter: 1, type: "single",
    prompt: "What made slightly denser pockets of the early universe gather still more matter?",
    options: ["The energy from newly formed planets", "The drop in temperature at Earth's poles", "Gravity pulling matter into the clumps"],
    correct: [2],
    explanation: "Gravity amplified the original differences in density. Dark matter clumps pulled in gas, some of which eventually formed stars."
  },
  {
    chapter: 1, type: "single",
    prompt: "Where were many carbon and oxygen atoms made?",
    options: ["Inside earlier generations of stars", "In the first few minutes after the Big Bang", "In molten rocks on the young Earth"],
    correct: [0],
    explanation: "Stars can fuse lighter nuclei into heavier ones, including carbon and oxygen. Dying stars can return some of those elements to space."
  },
  {
    chapter: 1, type: "truefalse",
    prompt: "Light from some galaxies in Webb’s Deep Field left those galaxies before Earth formed.",
    options: ["True", "False"],
    correct: [0],
    explanation: "Light takes time to travel. In a deep field, we see some distant galaxies as they were billions of years ago."
  },
  {
    chapter: 2, type: "order",
    prompt: "Put these Solar System milestones in order from earliest to latest.",
    options: ["Planetesimals grow by accretion", "Part of a gas and dust cloud collapses", "Earth grows through collisions of rocky bodies", "A protoplanetary disk takes shape"],
    correct: [1, 3, 0, 2],
    explanation: "Cloud collapse formed a disk. In that disk, solids gathered into planetesimals, and collisions between rocky bodies helped build Earth."
  },
  {
    chapter: 2, type: "single",
    prompt: "Why were rock and metal the main solid ingredients near the young Sun?",
    options: ["The young Sun pushed all metals inward", "Many ices could remain solid only in colder parts of the disk", "The early Solar System contained no water"],
    correct: [1],
    explanation: "The inner disk was warm enough for many ices to vapourise. Rock and metal could still exist there as solids."
  },
  {
    chapter: 2, type: "single",
    prompt: "What does accretion mean in planet formation?",
    options: ["Turning gas into light through fusion", "Separating a planet into layers", "Growing by gathering and incorporating material"],
    correct: [2],
    explanation: "From grains to larger bodies, some collisions add material and help objects grow. That accumulation is accretion."
  },
  {
    chapter: 3, type: "single",
    prompt: "Why is Earth’s core rich in iron?",
    options: ["Dense iron-rich material sank through the hot young Earth", "Iron only entered Earth after the crust had formed", "Earth’s atmosphere pulled iron into the centre"],
    correct: [0],
    explanation: "Heat let material separate by density. Dense iron-rich material sank, and lighter rock remained above it."
  },
  {
    chapter: 3, type: "single",
    prompt: "Which evidence helps put Earth’s age at about 4.54 billion years?",
    options: ["The time it takes Earth to orbit the Sun today", "Isotope ratios in ancient meteorites and lead from Earth", "The age of the oldest known human fossils"],
    correct: [1],
    explanation: "Meteorites preserve early Solar System material. Radioactive decay changes isotope ratios over time, providing a clock that can be compared with lead from Earth."
  },
  {
    chapter: 3, type: "single",
    prompt: "In the leading model, where did the material that formed the Moon come from?",
    options: ["Gas blown off the Sun", "A passing body that Earth captured intact", "Material sent into orbit by a giant impact on the young Earth"],
    correct: [2],
    explanation: "The leading hypothesis involves a giant impact. Evidence from lunar samples helps scientists refine how it happened."
  },
  {
    chapter: 4, type: "multiple",
    prompt: "Which statements fit the evidence about Earth’s early surface and air?",
    options: ["Volcanic gases contributed to the early atmosphere", "The early air had about as much free oxygen as today", "Liquid water could collect where conditions cooled enough", "The composition of the atmosphere stayed constant"],
    correct: [0, 2],
    explanation: "Outgassing released gases and cooling allowed water to condense. The atmosphere changed over time and initially had much less free oxygen."
  },
  {
    chapter: 4, type: "single",
    prompt: "What is one inference from the chemistry of some ancient Jack Hills zircons?",
    options: ["Liquid water likely interacted with some of their parent material", "An ocean covered the entire planet at a precisely known date", "The early atmosphere already had its modern composition"],
    correct: [0],
    explanation: "The chemical signature is consistent with past interaction with water. The grains alone cannot tell us how widespread early oceans were."
  },
  {
    chapter: 4, type: "order",
    prompt: "Order this simplified sequence from a hot young Earth to surface water.",
    options: ["Liquid water collects at the surface", "Water vapour condenses as the surface cools", "Hot rock releases water vapour"],
    correct: [2, 1, 0],
    explanation: "Hot rock releases gas. When conditions become cool enough, vapour can condense and liquid water can collect."
  }
];

const quiz = document.getElementById("lesson-quiz");
let questionIndex = 0;
let results = [];

function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function quizButton(label, type = "button", className = "lesson-button") {
  const button = element("button", label, className);
  button.type = type;
  return button;
}

function resetQuiz() {
  questionIndex = 0;
  results = [];
  renderQuestion(true);
}

function restartButton(label) {
  const button = quizButton(label, "button", "lesson-button outline-button");
  button.addEventListener("click", resetQuiz);
  return button;
}

function addAnswerInputs(fieldset, question) {
  if (question.type === "order") {
    question.options.forEach((_, position) => {
      const label = element("label", "", "order-option");
      const select = element("select");
      select.name = "answer";
      select.required = true;
      select.append(new Option("Choose an event", ""));
      question.options.forEach((option, index) => select.append(new Option(option, String(index))));
      label.append(element("span", "Position " + (position + 1)), select);
      fieldset.append(label);
    });
    return;
  }

  question.options.forEach((option, index) => {
    const label = element("label");
    const input = element("input");
    input.type = question.type === "multiple" ? "checkbox" : "radio";
    input.name = "answer";
    input.value = String(index);
    label.append(input, element("span", option));
    fieldset.append(label);
  });
}

const quizInstructions = {
  single: "Choose one answer",
  multiple: "Select all that apply",
  truefalse: "True or false",
  order: "Use each event once"
};

function renderQuestion(moveFocus = false) {
  const question = questions[questionIndex];
  const top = element("div", "", "quiz-top");
  top.append(element("span", chapters[question.chapter].name), element("span", "Question " + (questionIndex + 1) + " of " + questions.length));
  const progress = element("progress");
  progress.max = questions.length;
  progress.value = results.length;
  progress.setAttribute("aria-label", "Questions answered");
  const heading = element("h3", question.prompt);
  heading.id = "question-prompt";
  heading.tabIndex = -1;
  const form = element("form");
  form.setAttribute("aria-labelledby", heading.id);
  const fieldset = element("fieldset");
  fieldset.append(element("legend", quizInstructions[question.type]));
  addAnswerInputs(fieldset, question);
  const feedback = element("div", "", "quiz-feedback");
  feedback.setAttribute("role", "status");

  const actions = element("div", "", "quiz-actions");
  const check = quizButton("Check answer", "submit");
  const lastQuestion = questionIndex === questions.length - 1;
  const next = quizButton(lastQuestion ? "See results" : "Next question");
  next.hidden = true;
  next.addEventListener("click", () => {
    if (lastQuestion) {
      renderResults();
    } else {
      questionIndex += 1;
      renderQuestion(true);
    }
  });
  actions.append(check, next, restartButton("Restart quiz"));

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (check.hidden) return;
    const answers = new FormData(form).getAll("answer").map(Number);
    if (answers.length === 0) {
      feedback.textContent = "Choose an answer before checking.";
      return;
    }
    if (question.type === "order" && new Set(answers).size !== answers.length) {
      feedback.textContent = "Use each event once. At least one event appears twice.";
      return;
    }
    const correct = answers.length === question.correct.length &&
      answers.every((answer, index) => answer === question.correct[index]);
    results.push(correct);
    progress.value = results.length;
    feedback.textContent = (correct ? "Correct. " : "Review this answer. ") + question.explanation;
    fieldset.disabled = true;
    check.hidden = true;
    next.hidden = false;
    next.focus();
  });

  form.append(fieldset, feedback, actions);
  quiz.replaceChildren(top, progress, heading, form);
  if (moveFocus) heading.focus();
}

function renderResults() {
  const score = results.filter(Boolean).length;
  const heading = element("h3", "You scored " + score + " out of " + questions.length);
  heading.tabIndex = -1;
  const list = element("ul", "", "quiz-results");
  chapters.forEach((chapter, chapterIndex) => {
    const chapterResults = results.filter((_, index) => questions[index].chapter === chapterIndex);
    const total = chapterResults.filter(Boolean).length;
    const item = element("li", chapter.name + " · " + total + " of " + chapterResults.length + " correct");
    if (total < chapterResults.length) {
      const link = element("a", "Revisit chapter");
      link.href = "#" + chapter.anchor;
      item.append(" · ", link);
    }
    list.append(item);
  });
  quiz.replaceChildren(heading, list, restartButton("Retry quiz"));
  heading.focus();
}

renderQuestion();
quiz.hidden = false;
