const questions = [
  // Section 1: Property & Production
  { text: "The government should own and operate key industries.", axis: "economic", direction: -1 },
  { text: "Large corporations lead to more innovation than privately owned companies ever could.", axis: "economic", direction: 1 },
  { text: "Workers should have a say in how the companies they work for are run.", axis: "economic", direction: -1 },
  { text: "Nationalizing major corporations is sometimes necessary to protect public interests.", axis: "economic", direction: -1 },
  { text: "The free market, left alone, produces better outcomes than any government plan.", axis: "economic", direction: 1 },
  { text: "Excessive corporate profit is often a sign of exploitation.", axis: "economic", direction: -1 },
  { text: "It’s wrong for a small number of people to control most of the land and natural resources.", axis: "economic", direction: -1 },
  { text: "Competition between private companies drives economic progress.", axis: "economic", direction: 1 },
  { text: "Collective ownership is a fairer way to manage economic output.", axis: "economic", direction: -1 },
  { text: "People should be free to own as much property or capital as they can acquire.", axis: "economic", direction: 1 },

  // Section 2: Wealth & Redistribution
  { text: "A fair society must include some form of wealth redistribution.", axis: "economic", direction: -1 },
  { text: "People who earn more should pay proportionally higher taxes.", axis: "economic", direction: -1 },
  { text: "Universal basic income would do more harm than good.", axis: "economic", direction: 1 },
  { text: "No one should become a billionaire while others struggle to afford housing.", axis: "economic", direction: -1 },
  { text: "The rich contribute more to society by investing and creating jobs.", axis: "economic", direction: 1 },
  { text: "Social welfare programs often discourage personal responsibility.", axis: "economic", direction: 1 },
  { text: "Economic inequality is an unavoidable outcome of a free society.", axis: "economic", direction: 1 },
  { text: "Public services like education and healthcare should be free for everyone.", axis: "economic", direction: -1 },
  { text: "Heavily taxing inherited wealth is a necessary step toward fairness.", axis: "economic", direction: -1 },
  { text: "Society functions best when people can keep most of what they earn.", axis: "economic", direction: 1 },

  // Section 3: Law & Order
  { text: "Maintaining law and order should be the government’s top priority.", axis: "authority", direction: 1 },
  { text: "The state has the right to use force to protect its stability.", axis: "authority", direction: 1 },
  { text: "Harsh punishments are effective at deterring crime.", axis: "authority", direction: 1 },
  { text: "Surveillance is a necessary tool for national security.", axis: "authority", direction: 1 },
  { text: "Civil liberties should be limited during times of crisis.", axis: "authority", direction: 1 },
  { text: "A society without strong authority will inevitably collapse.", axis: "authority", direction: 1 },
  { text: "People who break the law deserve to be punished, regardless of their reasons.", axis: "authority", direction: 1 },
  { text: "The average citizen should trust the judgment of the police and military.", axis: "authority", direction: 1 },
  { text: "Dissent is acceptable only when expressed within legal boundaries.", axis: "authority", direction: 1 },
  { text: "Most people need firm leadership to behave responsibly.", axis: "authority", direction: 1 },

  // Section 4: Power & Rebellion
  { text: "Disobeying unjust laws is not only acceptable — it’s necessary.", axis: "authority", direction: -1 },
  { text: "Protesting should never require government approval.", axis: "authority", direction: -1 },
  { text: "Violent resistance is sometimes justified against oppressive regimes.", axis: "authority", direction: -1 },
  { text: "True change only comes from challenging power directly.", axis: "authority", direction: -1 },
  { text: "Decentralized communities are better at governing themselves than large states.", axis: "authority", direction: -1 },
  { text: "Authority figures should be constantly questioned and held accountable.", axis: "authority", direction: -1 },
  { text: "Revolutionary movements are essential to correcting historic injustices.", axis: "authority", direction: -1 },
  { text: "Most institutions are designed to protect those already in power.", axis: "authority", direction: -1 },
  { text: "Civil disobedience is more patriotic than blind obedience.", axis: "authority", direction: -1 },
  { text: "A society without rulers is both possible and desirable.", axis: "authority", direction: -1 },

  // Section 5: Faith & Morality
  { text: "Some moral truths are universal, regardless of culture or era.", axis: "adherence", direction: 1 },
  { text: "Society needs a shared sense of right and wrong to function.", axis: "adherence", direction: 1 },
  { text: "Morality is subjective and varies too much to be enforced by law.", axis: "adherence", direction: -1 },
  { text: "People should be free to live according to their conscience, even if it clashes with social norms.", axis: "adherence", direction: -1 },
  { text: "It’s dangerous to separate moral values from public policy.", axis: "adherence", direction: 1 },
  { text: "A society that loses its moral foundation is bound to decay.", axis: "adherence", direction: 1 },
  { text: "Ethics should be grounded in reason, not tradition.", axis: "adherence", direction: -1 },
  { text: "Children need to be taught moral values to become good citizens.", axis: "adherence", direction: 1 },
  { text: "Institutions that preserve cultural and moral heritage play a vital role in society.", axis: "adherence", direction: 1 },
  { text: "Progress means questioning the values we’ve inherited, even if it makes people uncomfortable.", axis: "adherence", direction: -1 },

  // Section 6: Tradition & Progress
  { text: "Traditions exist for a reason and should be preserved.", axis: "adherence", direction: 1 },
  { text: "Rapid cultural change often causes more harm than good.", axis: "adherence", direction: 1 },
  { text: "Society should move past outdated beliefs, no matter how sacred they once were.", axis: "adherence", direction: -1 },
  { text: "It’s important to respect the wisdom of past generations.", axis: "adherence", direction: 1 },
  { text: "Modern values have improved society more than traditional ones ever did.", axis: "adherence", direction: -1 },
  { text: "Religion should adapt to fit modern norms, not the other way around.", axis: "adherence", direction: -1 },
  { text: "Cultural heritage should never limit personal freedom.", axis: "adherence", direction: -1 },
  { text: "The decline of traditional institutions is a sign of progress.", axis: "adherence", direction: -1 },
  { text: "Moral relativism has undermined the strength of our communities.", axis: "adherence", direction: 1 },
  { text: "Tradition without critical thinking leads to stagnation.", axis: "adherence", direction: -1 }
];

const sectionTitles = [
  "Property & Production",
  "Wealth & Redistribution",
  "Law & Order",
  "Power & Rebellion",
  "Faith & Morality",
  "Tradition & Progress"
];

const answerScores = {
  "agree": 1,
  "somewhat_agree": 0.5,
  "somewhat_disagree": -0.5,
  "disagree": -1
};

let sectionIndex = 0;
let responses = [];

function showSection() {
  const container = document.getElementById("quiz");
  const start = sectionIndex * 10;
  const end = start + 10;
  const sectionQuestions = questions.slice(start, end);

  const sectionTitle = sectionTitles[sectionIndex];
  let html = `<h2>${sectionTitle}</h2>`;

  sectionQuestions.forEach((q, i) => {
    const index = start + i;
    const unansweredClass = responses[index] ? '' : 'style="border: 2px solid red; padding: 8px; border-radius: 6px;"';
    html += `
      <div ${unansweredClass}>
        <p><strong>Q${index + 1}:</strong> ${q.text}</p>
        <div style="margin-bottom: 10px;">
          <button class="answer-button" data-question="${index}" data-choice="agree" onclick="submitAnswer(${index}, 'agree', this)">Agree</button>
          <button class="answer-button" data-question="${index}" data-choice="somewhat_agree" onclick="submitAnswer(${index}, 'somewhat_agree', this)">Somewhat Agree</button>
          <button class="answer-button" data-question="${index}" data-choice="somewhat_disagree" onclick="submitAnswer(${index}, 'somewhat_disagree', this)">Somewhat Disagree</button>
          <button class="answer-button" data-question="${index}" data-choice="disagree" onclick="submitAnswer(${index}, 'disagree', this)">Disagree</button>
        </div>
      </div>
    `;
  });

  html += `<button onclick="nextSection()">Next Section</button>`;
  container.innerHTML = html;

  const progress = (start / questions.length) * 100;
  document.getElementById("progress-bar").style.width = `${progress}%`;
}

function submitAnswer(index, choice, button) {
  responses[index] = choice;

  // Remove selected class from all buttons in the same group
  const buttons = button.parentElement.querySelectorAll('.answer-button');
  buttons.forEach(btn => btn.classList.remove('selected'));

  // Add selected class to the clicked button
  button.classList.add('selected');
}

function nextSection() {
  const start = sectionIndex * 10;
  const end = start + 10;
  const unanswered = questions.slice(start, end).some((_, i) => !responses[start + i]);

  if (unanswered) {
    alert("Please answer all questions in this section before continuing.");
    showSection(); // refresh with visual warnings
    return;
  }

  sectionIndex++;
  if (sectionIndex * 10 < questions.length) {
    showSection();
  } else {
    calculateResults();
  }
}

function calculateResults() {
  let x = 0, y = 0, z = 0;

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const score = answerScores[responses[i]] * q.direction;
    if (q.axis === "economic") x += score;
    else if (q.axis === "authority") y += score;
    else if (q.axis === "adherence") z += score;
  }

  x = x / questions.filter(q => q.axis === "economic").length;
  y = y / questions.filter(q => q.axis === "authority").length;
  z = z / questions.filter(q => q.axis === "adherence").length;

  const resultBox = document.getElementById("quiz");
  resultBox.innerHTML = `
    <h2>Your Results:</h2>
    <p><strong>Economic (x):</strong> ${x.toFixed(2)}</p>
    <p><strong>Authority (y):</strong> ${y.toFixed(2)}</p>
    <p><strong>Adherence (z):</strong> ${z.toFixed(2)}</p>
    <p><strong>Ideological Interpretation:</strong> ${getIdeologyLabel(x, y, z)}</p>
  `;
  document.getElementById("progress-bar").style.width = `100%`;
}

function getIdeologyLabel(x, y, z) {
  const quadrant = `${x < 0 ? 'Left' : 'Right'},${y < 0 ? 'Anarchist' : 'Authoritarian'},${z < 0 ? 'Secular' : 'Religious'}`;
  const map = {
    'Left,Authoritarian,Religious': 'Adherence Socialism (e.g., Marxism, National-Socialism)',
    'Left,Authoritarian,Secular': 'Progressivism',
    'Left,Anarchist,Religious': 'Utopian/NatSoc Anarchism',
    'Left,Anarchist,Secular': 'Anarchism',
    'Right,Authoritarian,Religious': 'Conservatism',
    'Right,Authoritarian,Secular': 'Technocratic',
    'Right,Anarchist,Religious': 'Libertarian Conservatism',
    'Right,Anarchist,Secular': 'Liberalism'
  };
  return map[quadrant] || 'Unclassified Position';
}

window.onload = showSection;
