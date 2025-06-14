const questions = [
  // Section 1: Property & Production
  { text: "The government should own and operate key industries.", axis: "economic", direction: -1 },
  { text: "Large corporations lead to more innovation than privately owned companies ever could.", axis: "economic", direction: -1 },
  { text: "Workers should have a say in how the companies they work for are run.", axis: "economic", direction: -1 },
  { text: "Nationalizing major corporations is sometimes necessary to protect public interests.", axis: "economic", direction: -1 },
  { text: "The free market, left alone, produces better outcomes than any government plan.", axis: "economic", direction: 1 },
  { text: "Excessive corporate profit is often a sign of exploitation.", axis: "economic", direction: 1 },
  { text: "It’s wrong to allow private ownership of most the land and natural resources.", axis: "economic", direction: -1 },
  { text: "Competition between private companies drives more economic progress compared to corporate globalization.", axis: "economic", direction: 1 },
  { text: "Collective ownership, such as stocks of a corporation, is a fairer way to manage economic output.", axis: "economic", direction: -1 },
  { text: "People should be free to own as much property or capital as they can acquire.", axis: "economic", direction: 1 },

  // Section 2: Wealth & Redistribution
  { text: "A fair society must include some form of forced wealth redistribution.", axis: "economic", direction: -1 },
  { text: "People who earn more should pay proportionally higher taxes.", axis: "economic", direction: -1 },
  { text: "Universal basic income would do more harm than good.", axis: "economic", direction: 1 },
  { text: "No one should become a billionaire while others struggle to afford housing.", axis: "economic", direction: -1 },
  { text: "The rich, absent their holdings, contribute more to society by investing and creating jobs.", axis: "economic", direction: 1 },
  { text: "Social welfare programs often discourage personal responsibility.", axis: "economic", direction: 1 },
  { text: "Economic inequality is an unavoidable outcome of a free society.", axis: "economic", direction: 1 },
  { text: "Public services like education and healthcare should be free, or subsidized, for everyone.", axis: "economic", direction: -1 },
  { text: "Heavily taxing inherited wealth is a necessary step toward fairness.", axis: "economic", direction: -1 },
  { text: "Society functions best when individuals retain most of their earnings, choosing donations over taxation.", axis: "economic", direction: 1 },

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
    const borderStyle = 'class="question-box"';
    html += `
      <div ${borderStyle}>
        <p><strong>Q${index + 1}:</strong> ${q.text}</p>
        <div class="answer-set">
          ${createAnswerOption(index, 'agree', 'Agree', responses[index])}
          ${createAnswerOption(index, 'somewhat_agree', 'Somewhat Agree', responses[index])}
          ${createAnswerOption(index, 'somewhat_disagree', 'Somewhat Disagree', responses[index])}
          ${createAnswerOption(index, 'disagree', 'Disagree', responses[index])}
        </div>
      </div>
    `;
  });

  html += `
  <div style="display: flex; justify-content: space-between; gap: 10px;">
    ${sectionIndex > 0 ? '<button onclick="prevSection()">Back</button>' : '<div></div>'}
    <button onclick="nextSection()">Next Section</button>
  </div>
`;
  container.innerHTML = html;

  const progress = (Math.min(responses.filter(Boolean).length, questions.length) / questions.length) * 100;
  document.getElementById("progress-bar").style.width = `${progress}%`;

  const progressText = document.getElementById("progress-text");
  if (progressText) {
    progressText.textContent = `${Math.round(progress)}%`;
  }
}

function createAnswerOption(index, choice, label, currentResponse) {
  const selectedClass = currentResponse === choice ? 'selected' : '';
  return `
    <div class="answer-option ${selectedClass}" onclick="submitAnswer(${index}, '${choice}', this)">
      <span class="circle"></span>
      <span class="answer-text">${label}</span>
    </div>`;
}

function calculateResults() {
  document.getElementById("progress-bar").style.width = "100%";
  const progressText = document.getElementById("progress-text");
  if (progressText) {
    progressText.textContent = "100%";
  }
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
  resultBox.innerHTML = '<div class="result-box"><div class="spinner"></div><p>Loading results...</p></div>';
  const label = getIdeologyLabel(x, y, z);
  const examples = {
    'Realist Socialism': 'A system where socialist policies favor select groups while enforcing strict ideological rules, as seen in the USSR, Maoist China, and other centrally planned regimes.',
    'Progressivism': 'A system where socialist policies benefit select groups while enforcing secular ideology, seen in welfare democracies like post-WWII Scandinavia and FDR’s New Deal.',
    'Utopian Socialism': 'A system where socialist policies support the whole society, emphasizing acceptance over enforcement, seen in visionary models like Robert Owen’s New Harmony.',
    'Corporatism': 'A political system of interest representation and policymaking whereby corporate groups come together and negotiate contracts or policy on the basis of their common interests.',
    'Conservatism': 'A system where capitalist policies uphold traditional structures with strict enforcement, seen in monarchist states and religious nationalisms.',
    'Anarchism': 'An anti-socialist and anti-traditionalist movement rejecting socialist corporatism and state governance, exemplified by Anarcho-Capitalism and Technocratic Movements.',
    'Libertarianism': 'A movement centered on individual liberty, often adhering to traditional values and laws, supporting limited government interventions.',
    'Liberalism': 'An ideology enforcing secular laws while promoting individual rights, civil liberties, and equity, often reflected in civil rights and social justice movements.'
  };

  const html = `
    <h2>Your Results:</h2>
    <p><strong>Economic (x):</strong> ${x.toFixed(2)}</p>
    <p><strong>Authority (y):</strong> ${y.toFixed(2)}</p>
    <p><strong>Adherence (z):</strong> ${z.toFixed(2)}</p>
    <p><strong>Ideological Interpretation:</strong> ${label}</p>
    <div class="result-description" style="margin-top: 20px; padding: 12px; border: 1px solid #ccc; border-radius: 8px; background-color: #f9f9f9;">
  <strong>Context:</strong><br>
  ${examples[label] || 'No historical context available for this quadrant.'}
</div>
  `;

  resultBox.classList.add("fade-out");
  setTimeout(() => {
    resultBox.innerHTML = html;
    resultBox.classList.remove("fade-out");
    resultBox.classList.add("fade-in");
    setTimeout(() => resultBox.classList.remove("fade-in"), 300);

  // Plot 3D point
  plot3D(x, y, z);
  }, 1500);
}

function getIdeologyLabel(x, y, z) {
  const quadrant = `${x < 0 ? 'Left' : 'Right'},${y > 0 ? 'Authoritarian' : 'Anarchist'},${z > 0 ? 'Religious' : 'Secular'}`;
  const map = {
    'Left,Authoritarian,Religious': 'Realist Socialism',
    'Left,Authoritarian,Secular': 'Progressivism',
    'Left,Anarchist,Religious': 'Utopian Socialism',
    'Left,Anarchist,Secular': 'Corporatism',
    'Right,Authoritarian,Religious': 'Conservatism',
    'Right,Authoritarian,Secular': 'Anarchism',  // swapped here
    'Right,Anarchist,Religious': 'Libertarianism',
    'Right,Anarchist,Secular': 'Liberalism'       // swapped here
  };
  return map[quadrant] || 'Unclassified Position';
}

document.addEventListener("DOMContentLoaded", () => {
  showSection();
});

function submitAnswer(index, choice, button) {
  responses[index] = choice;

  const buttons = button.parentElement.querySelectorAll('.answer-option');
  buttons.forEach(btn => btn.classList.remove('selected'));

  button.classList.add('selected');
}

function prevSection() {
  if (sectionIndex > 0) {
    sectionIndex--;
    showSection();
    document.getElementById("quiz").scrollIntoView({ behavior: 'smooth' });
  }
}

function nextSection() {
  const start = sectionIndex * 10;
  const end = start + 10;
  const unanswered = questions.slice(start, end).some((_, i) => !responses[start + i]);

  if (unanswered) {
    alert("Please answer all questions in this section before continuing.");
    return;
  }

  sectionIndex++;
  if (sectionIndex * 10 < questions.length) {
    showSection();
    document.getElementById("quiz").scrollIntoView({ behavior: 'smooth' });
  } else {
    calculateResults();
  }
}

function plot3D(x, y, z) {
  const ideology = getIdeologyLabel(x, y, z);

  const colorMap = {
    'Realist Socialism': '#9c27b0',
    'Progressivism': '#e91e63',
    'Utopian Socialism': '#f44336',
    'Corporatism': '#ff9800',
    'Conservatism': '#3f51b5',
    'Anarchism': '#00bcd4',
    'Libertarianism': '#4caf50',
    'Liberalism': '#03a9f4'
  };

  const pointColor = colorMap[ideology] || '#999999';

  const ideologyPoint = {
    type: 'scatter3d',
    mode: 'markers',
    x: [x],
    y: [y],
    z: [z],
    marker: {
      size: 8,
      color: pointColor
    },
    name: ideology
  };

  const regionDefinitions = [
  {
    name: 'Realist Socialism', color: '#9c27b0',
    vertices: [
      [-1, -1, -1], [0, -1, -1], [0, 0, -1], [-1, 0, -1],
      [-1, -1, 0], [0, -1, 0], [0, 0, 0], [-1, 0, 0]
    ]
  },
  {
    name: 'Conservatism', color: '#3f51b5',
    vertices: [
      [0, -1, -1], [1, -1, -1], [1, 0, -1], [0, 0, -1],
      [0, -1, 0], [1, -1, 0], [1, 0, 0], [0, 0, 0]
    ]
  },
  {
    name: 'Liberalism', color: '#00bcd4',
    vertices: [
      [0, -1, 0], [1, -1, 0], [1, 0, 0], [0, 0, 0],
      [0, -1, 1], [1, -1, 1], [1, 0, 1], [0, 0, 1]
    ]
  },
  {
    name: 'Progressivism', color: '#e91e63',
    vertices: [
      [-1, -1, 0], [0, -1, 0], [0, 0, 0], [-1, 0, 0],
      [-1, -1, 1], [0, -1, 1], [0, 0, 1], [-1, 0, 1]
    ]
  },
  {
    name: 'Utopian Socialism', color: '#f44336',
    vertices: [
      [-1, 0, -1], [0, 0, -1], [0, 1, -1], [-1, 1, -1],
      [-1, 0, 0], [0, 0, 0], [0, 1, 0], [-1, 1, 0]
    ]
  },
  {
    name: 'Libertarianism', color: '#4caf50',
    vertices: [
      [0, 0, -1], [1, 0, -1], [1, 1, -1], [0, 1, -1],
      [0, 0, 0], [1, 0, 0], [1, 1, 0], [0, 1, 0]
    ]
  },
  {
    name: 'Anarchism', color: '#03a9f4',
    vertices: [
      [0, 0, 0], [1, 0, 0], [1, 1, 0], [0, 1, 0],
      [0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]
    ]
  },
  {
    name: 'Corporatism', color: '#ff9800',
    vertices: [
      [-1, 0, 0], [0, 0, 0], [0, 1, 0], [-1, 1, 0],
      [-1, 0, 1], [0, 0, 1], [0, 1, 1], [-1, 1, 1]
    ]
  }
];

  const faces = [
    [0, 1, 2], [0, 2, 3], // bottom
    [4, 5, 6], [4, 6, 7], // top
    [0, 1, 5], [0, 5, 4], // front
    [2, 3, 7], [2, 7, 6], // back
    [1, 2, 6], [1, 6, 5], // right
    [0, 3, 7], [0, 7, 4]  // left
  ];

  const regionMeshes = regionDefinitions.map(region => {
    const x = region.vertices.map(v => v[0]);
    const y = region.vertices.map(v => -v[1]);
    const z = region.vertices.map(v => -v[2]);

    const i = [], j = [], k = [];
    faces.forEach(tri => {
      i.push(tri[0], tri[0], tri[0]);
      j.push(tri[1], tri[1], tri[1]);
      k.push(tri[2], tri[2], tri[2]);
    });

    return {
      type: 'mesh3d',
      x, y, z,
      i, j, k,
      color: region.color,
      opacity: 0.08,
      name: region.name,
      showlegend: true
    };
  });

  const gridLines = {
    type: 'scatter3d',
    mode: 'lines',
    x: [], y: [], z: [],
    line: {
      color: 'rgba(0,0,0,0.2)',
      width: 2,
      dash: 'dash'
    },
    showlegend: false,
    hoverinfo: 'skip'
  };

  const bounds = [-1, 0, 1];
  for (let xi = 0; xi < bounds.length; xi++) {
    for (let yi = 0; yi < bounds.length; yi++) {
      gridLines.x.push(bounds[xi], bounds[xi], null);
      gridLines.y.push(bounds[yi], bounds[yi], null);
      gridLines.z.push(-1, 1, null);

      gridLines.x.push(bounds[xi], bounds[xi], null);
      gridLines.y.push(-1, 1, null);
      gridLines.z.push(bounds[yi], bounds[yi], null);

      gridLines.x.push(-1, 1, null);
      gridLines.y.push(bounds[xi], bounds[xi], null);
      gridLines.z.push(bounds[yi], bounds[yi], null);
    }
  }

  const data = [...regionMeshes, ideologyPoint, gridLines];

  const layout = {
    margin: { l: 0, r: 0, b: 0, t: 0 },
    legend: {
      orientation: 'h',
      y: -0.2
    },
    scene: {
      xaxis: { title: 'Economic' },
      yaxis: { title: 'Authority' },
      zaxis: { title: 'Adherence' }
    }
  };

  Plotly.newPlot('graph', data, layout);
  }

  function toggleMore(button) {
    const content = document.getElementById("moreContent");
    const isOpen = content.classList.contains("open");

    if (isOpen) {
      content.classList.remove("open");
      button.textContent = "Show More ▼";
    } else {
      content.classList.add("open");
      button.textContent = "Show Less ▲";
    }
  }


