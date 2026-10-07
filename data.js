/* All site content lives here. Written in first person, no em dashes. */

const SITE = {
  first: "Zahan",
  middle: "Nikhil",
  last: "Sawhney",
  monogram: "ZNS",
  image: "images/zahan.jpg",
  tagline: "Student, editor, debater and researcher",
  places: "New Delhi  ·  Tonbridge, Kent",
  email: "zahan.n.sawhey@gmail.com",
  intro:
    "I am a Lower Sixth student at Tonbridge School in Kent, originally from New Delhi. I care about how economics, politics and people shape one another, and I like to lead, write and argue my way into understanding them.",
  details: [
    ["Based in", "New Delhi, India and Kent, UK"],
    ["School", "Tonbridge School, Lower Sixth"],
    ["Studying", "Economics, Politics, Spanish, Mathematics and an EPQ"],
    ["Currently", "House Captain and Editor-in-Chief, The Bull & The Boar"],
  ],
  facts: ["House Captain", "Editor-in-Chief", "MUN Co-Founder"],
};

/* Pages that hang off a dropdown. Each item gets its own page. */
const GROUPS = {
  leadership: {
    label: "Leadership",
    kicker: "Leadership",
    items: [
      {
        id: "house-captain",
        title: "House Captain",
        org: "Tonbridge School",
        period: "2026 to Present",
        lead:
          "Within eight months of arriving at Tonbridge, I was appointed House Captain. I am one of the youngest students to have held the role.",
        body: [
          "Being trusted with the house so early meant I had to learn its rhythms quickly: who the quiet talents were, which competitions mattered most to people, and how to bring a group of very different boys together behind one name.",
          "Today I formalise every house event team for our inter-house competitions, so that each one has the right people in it and nobody is left out. I am also responsible for recognising individual contributions and awarding house accolades. I take that part seriously, because I have learnt that people give their best when they know their effort is noticed.",
        ],
        highlights: [
          "Appointed within eight months of joining Tonbridge",
          "One of the youngest students to hold the role",
          "I form and formalise all house event teams",
          "I recognise contributions and award house accolades across inter-house competitions",
        ],
      },
      {
        id: "editor-in-chief",
        title: "Editor-in-Chief",
        org: "The Bull & The Boar, Tonbridge School",
        period: "2026 to Present",
        lead:
          "I am the first new boy at Tonbridge to be appointed Editor-in-Chief of The Bull & The Boar, the school's social science magazine.",
        body: [
          "The magazine covers economics, politics and social affairs, the three subjects I keep coming back to in everything I read and write. Leading it lets me turn that curiosity into something other students can pick up and argue with.",
          "As editor I set the editorial direction and content strategy, decide what each issue should explore, and see every edition through to publication. It has taught me how to shape a clear voice out of many writers, and how to hold a high standard while keeping people excited to contribute.",
        ],
        highlights: [
          "First new boy at Tonbridge to hold the position",
          "I own editorial direction and content strategy",
          "I oversee publication from commissioning to print",
          "Coverage spans economics, politics and social affairs",
        ],
      },
      {
        id: "model-un",
        title: "Co-Founder & Deputy Secretary-General",
        org: "Model United Nations, Tonbridge School",
        nav: "Model United Nations",
        navMeta: "Co-Founder & Deputy Secretary-General",
        period: "2025 to Present",
        lead:
          "I co-founded the inaugural edition of Tonbridge School's Model United Nations society and served as its Deputy Secretary-General.",
        body: [
          "MUN has been part of my life since Grade 6 at Step-by-Step School in Noida, where I first learnt to research a country's position, defend it under pressure and find common ground with people who disagreed with me. When I arrived at Tonbridge, I wanted to build that same space for others.",
          "At our inaugural conference I chaired both the Disarmament Committee and the General Assembly. Chairing taught me a different kind of discipline from debating: keeping the room fair, keeping it moving and making sure every delegate had a real chance to be heard.",
        ],
        highlights: [
          "Co-founded Tonbridge School's first MUN society",
          "Served as Deputy Secretary-General",
          "Chaired the Disarmament Committee and the General Assembly at the inaugural conference",
          "Active MUN debater and delegate since Grade 6",
        ],
      },
      {
        id: "house-drama",
        title: "Head of House Drama",
        org: "Tonbridge School",
        period: "2025 to 2026",
        lead:
          "I directed a student-led inter-school production that went on to win an award.",
        body: [
          "Directing meant juggling everything at once. I managed the rehearsal schedule, refined the script and shaped the performances, often all in the same evening.",
          "What I am proudest of is the confidence it built in the cast. Helping other students grow comfortable on stage taught me as much about leadership as any title has, and I learnt how to coordinate a collaborative creative project under real pressure.",
        ],
        highlights: [
          "Directed an award-winning, student-led inter-school production",
          "Managed scheduling, script refinement and performance direction",
          "Built stage confidence in first-time performers",
        ],
      },
    ],
  },

  research: {
    label: "Research",
    kicker: "Research & Independent Projects",
    items: [
      {
        id: "parsi-civic-elites",
        title: "Independent Research Paper",
        org: "Minority status and urban political influence",
        period: "2026",
        lead:
          "How did Parsi civic elites convert 'minority status' into urban political influence in Bombay, now Mumbai?",
        body: [
          "The Parsis have always been a numerical minority in Bombay, and yet they shaped the city's institutions in ways far beyond their numbers. My paper asks how that happened.",
          "I am tracing the mechanisms through four channels: municipal bodies, philanthropy, the press and professional associations. My aim is to understand how a small community turned civic engagement into lasting influence over urban governance, and what that tells us about how power really works in cities.",
        ],
        highlights: [
          "Original research question I designed myself",
          "Four lenses: municipal bodies, philanthropy, the press and professional associations",
          "Focus on how a numerical minority shaped urban governance",
        ],
      },
      {
        id: "parsi-documentary",
        title: "Documentary Film & Digital Repository",
        org: "Oral history archive",
        period: "2026",
        lead:
          "I am developing a documentary film and a digital oral history archive to preserve the stories, traditions and cultural heritage of elderly Parsis in India.",
        body: [
          "Some traditions survive only in the memories of the people who lived them. This project is my attempt to record those memories while there is still time.",
          "I am conducting interviews and field research to document lesser-known Parsi customs before they are lost. The film will tell the story, and the digital repository will keep the original voices available for anyone who wants to learn from them in the future.",
        ],
        highlights: [
          "Documentary film in development",
          "Digital oral history repository",
          "Interviews and field research with elderly Parsis",
          "Focus on lesser-known customs at risk of being lost",
        ],
      },
    ],
  },

  community: {
    label: "Community",
    kicker: "Community Engagement",
    items: [
      {
        id: "oriental-fc",
        title: "Co-Founder, Oriental Football Club",
        org: "Inter-school, India",
        nav: "Oriental Football Club",
        navMeta: "Co-Founder",
        period: "2022 to 2024",
        lead:
          "I co-founded the first student-run inter-school football club in India, built to bridge the sports gap between public and private schools.",
        body: [
          "I noticed that students from public and private schools rarely got to play on the same pitch, even though they loved the same game. Oriental Football Club was our answer: a tournament where those lines did not matter.",
          "To make it happen, I pitched the value of the tournament directly to school principals and convinced them to give students time off from class. I managed operations, logistics, finance and publicity. In the end we brought together more than 100 participants from 30 schools, and our work was covered nationally by Times Now and The Tribune India.",
        ],
        highlights: [
          "First student-run inter-school football club in India",
          "100+ participants from 30 schools",
          "Pitched to principals to secure time off from class",
          "Ran operations, logistics, finance and publicity",
          "National media coverage in Times Now and The Tribune India",
        ],
      },
      {
        id: "community-council",
        title: "Member, Tonbridge Community Council",
        org: "Tonbridge School",
        nav: "Tonbridge Community Council",
        navMeta: "Member",
        period: "2025 to Present",
        lead:
          "Through the Community Council I try to make sure Tonbridge gives back to the town around it.",
        body: [
          "I volunteered as a host at the annual Tonbridge community concert for elderly residents, helping to welcome guests and make sure the evening ran smoothly.",
          "I also organised a fundraising donut drive for ovarian cancer research. It was a simple idea, but it showed me how easily a community will show up for a good cause when someone takes the first step.",
        ],
        highlights: [
          "Host at the annual community concert for elderly residents",
          "Organised a donut drive for ovarian cancer research",
        ],
      },
      {
        id: "charity-walk",
        title: "10K Charity Walk",
        org: "Alzheimer's Research UK",
        period: "2026",
        lead:
          "I walked 10 kilometres as part of a team that raised nearly £1,200 for Alzheimer's Research UK.",
        body: [
          "Alzheimer's affects so many families, and I wanted to do something practical to support the research that might one day change that.",
          "Walking alongside my team, and seeing how many people chose to back us, reminded me that small efforts add up when people take them together.",
        ],
        highlights: [
          "Team fundraiser for Alzheimer's Research UK",
          "Collectively raised nearly £1,200",
        ],
      },
      {
        id: "one-step-greener",
        title: "Core Team Member (Eco-warrior)",
        org: "One Step Greener",
        nav: "One Step Greener",
        navMeta: "Core Team Member (Eco-warrior)",
        period: "2021 to 2025",
        lead:
          "For four years I worked with One Step Greener on public environmental campaigns in India.",
        body: [
          "I contributed to campaigns including a fundraising drive for tree plantation, and my work was featured on the organisation's social media.",
          "I took part in Mission RBG at ITC WOW, a waste management initiative, and helped run a door-to-door zero-waste awareness campaign that reached more than 100 households. I also wrote and published an article on e-waste in Enviro-Annotations, which was my first time writing for a public audience about an issue I cared about.",
        ],
        highlights: [
          "Fundraising drive for tree plantation",
          "Mission RBG at ITC WOW, a waste management initiative",
          "Door-to-door zero-waste campaign reaching 100+ households",
          "Published an article on e-waste in Enviro-Annotations",
        ],
      },
    ],
  },

  awards: {
    label: "Awards",
    kicker: "Competitions & Programmes",
    items: [
      {
        id: "ai-futures",
        title: "AI Futures Challenge",
        org: "Northeastern University London",
        period: "2026",
        badge: "Finalist · £1,000 Scholarship",
        lead:
          "I was selected as a finalist in a five-day challenge to solve real business problems using AI, and was awarded a £1,000 scholarship.",
        body: [
          "The challenge put me in front of real business problems and asked how AI could solve them. It was a very different kind of thinking from the classroom: practical, fast and grounded in what companies actually need.",
          "Over the five days I learnt how AI is deployed across established companies and startups, and how to turn a technical idea into a case that a business would back.",
        ],
        highlights: [
          "Finalist in a five-day AI business challenge",
          "Awarded a £1,000 scholarship",
          "Learnt how AI is deployed across companies and startups",
        ],
      },
      {
        id: "world-economics-cup",
        title: "World Economics Cup",
        org: "Regional Qualifiers, UK",
        period: "2026",
        badge: "Team Gold · Highest Distinction",
        lead:
          "I was part of a six-person team that won gold at the UK regional qualifiers, and I was individually awarded the Highest Distinction with a score of 93 out of 100.",
        body: [
          "Economics is the subject I enjoy most, and the World Economics Cup was a chance to test it against some of the strongest students in the country.",
          "Winning gold as a team was special, but scoring 93 out of 100 on my own paper gave me real confidence that I can hold my own at this level.",
        ],
        highlights: [
          "Gold medal, team of six",
          "Individual score of 93/100",
          "Individually awarded the Highest Distinction",
        ],
      },
      {
        id: "ieo",
        title: "International Economics Olympiad",
        org: "Business WinterChallenge",
        period: "2025 to 2026",
        badge: "Honourable Mention · Top 15",
        lead:
          "I achieved an Honourable Mention and a Top 15 finish nationally in the IEO Business WinterChallenge, and qualified for the second stage.",
        body: [
          "The WinterChallenge asks you to think like a business strategist under time pressure, and I loved the mix of analysis and judgement it demanded.",
          "I have qualified for the second stage of the IEO and the competition is still ongoing.",
        ],
        highlights: [
          "Honourable Mention",
          "Top 15 nationally",
          "Qualified for the second stage, ongoing",
        ],
      },
      {
        id: "iea-budget",
        title: "IEA Budget Challenge",
        org: "Tonbridge School",
        period: "2026",
        badge: "Co-Chair, Climate Committee",
        lead:
          "I co-chaired my school's Climate Committee and took part in the IEA Budget Challenge.",
        body: [
          "The Budget Challenge asks students to think about public finances the way a government must, weighing priorities against hard constraints.",
          "Co-chairing the Climate Committee let me bring my interest in the environment and my interest in economics into the same conversation.",
        ],
        highlights: [
          "Co-chaired the school's Climate Committee",
          "Participant in the IEA Budget Challenge",
        ],
      },
      { id: "honours", title: "Honours", org: "Academic honours & awards", page: "honours" },
    ],
  },
};

const EDUCATION = [
  {
    school: "Tonbridge School",
    place: "Kent, UK",
    period: "2025 to Present",
    stage: "Lower Sixth Form (A Levels)",
    text:
      "I moved from New Delhi to Tonbridge for my A Levels. I am studying Economics, Politics, Spanish and Mathematics, and I am also working on an Extended Project Qualification.",
    subjects: ["Economics", "Politics", "Spanish", "Mathematics", "Extended Project Qualification"],
  },
  {
    school: "Step-by-Step School",
    place: "Noida, India",
    period: "2013 to 2025",
    stage: "IGCSE",
    text:
      "I spent twelve years at Step-by-Step, where I first discovered MUN, economics and writing. I completed my IGCSEs there and earned the International Certificate of Education (ICE) with Distinction for achievement across multiple subjects.",
    grades: [
      ["Global Perspectives", "A*"],
      ["Coordinated Sciences (Double Award)", "A* A*"],
      ["Spanish", "A*"],
      ["Economics", "A"],
      ["Computer Science", "A"],
      ["First Language English", "A"],
      ["English Literature", "B"],
      ["International Mathematics", "B"],
    ],
  },
];

const HONOURS = [
  ["ICE Distinction", "International Certificate of Education, for outstanding achievement across multiple IGCSE subjects"],
  ["Subject Excellence Award", "IGCSE Coordinated Sciences (Double Award), Step-by-Step School"],
  ["World Economics Cup", "Individual Highest Distinction (93/100) and team Gold Medal, UK Regional Qualifiers"],
  ["International Economics Olympiad", "Honourable Mention and Top 15, Business WinterChallenge; Second Stage qualifier"],
  ["AI Futures Challenge", "Finalist and £1,000 Scholarship, Northeastern University London"],
  ["Certificate of Recognition", "Blue Ocean Strategy Challenge"],
];

const BEYOND = [
  {
    title: "Fencing",
    period: "2025 to Present",
    text:
      "I fence competitively at the inter-school level as part of a team of nine, and we have already begun winning accolades.",
  },
  {
    title: "Karate",
    period: "2017 to Present",
    text:
      "I hold a Black Belt (Dan 1) in Karate. Years of training have given me patience, focus and a lot of respect for slow, steady progress.",
  },
  {
    title: "Tabla",
    period: "2017 to Present",
    text:
      "I am trained in tabla, Indian classical percussion. It keeps me connected to home, wherever I happen to be.",
  },
  {
    title: "Scuba Diving",
    period: "Certified",
    text: "I am a certified scuba diver. There is nothing quite like the quiet underwater.",
  },
  {
    title: "South Asian Society",
    period: "Tonbridge School",
    text:
      "I am an active member of the South Asian Society at Tonbridge, helping with cultural events, food and culture programming, and exposure walks.",
  },
];

const ABOUT = {
  lead:
    "I am Zahan Nikhil Sawhney, a Lower Sixth student at Tonbridge School in Kent. I grew up in New Delhi, and I am curious about how economics, politics and people shape one another.",
  body: [
    "I spent twelve years at Step-by-Step School in Noida before moving to the UK for my A Levels. Today I study Economics, Politics, Spanish and Mathematics, and I am working on an Extended Project Qualification alongside them.",
    "Much of what I do comes back to one question: how do people and communities gain a voice? It is why I co-founded a football club that brought public and private school students onto the same pitch, why I helped start Model United Nations at Tonbridge, and why my research looks at how the Parsi community shaped the governance of Bombay.",
    "I like to lead from the inside. Within my first year at Tonbridge I became House Captain and the first new boy to be named Editor-in-Chief of The Bull & The Boar, our social science magazine. I have learnt that the best leaders make other people feel seen, and that is what I try to do.",
    "Away from my desk you will find me fencing, practising karate (I hold a black belt), playing tabla or, when I get the chance, scuba diving.",
  ],
  interests: ["Economics", "Politics", "Urban history", "Debate & MUN", "Writing & editing", "Community building"],
};
