/* All site content lives here. Written in first person, no em dashes. */

const SITE = {
  first: "Zahan",
  middle: "Nikhil",
  last: "Sawhney",
  monogram: "ZNS",
  image: "images/zahan.jpg",
  tagline: "Student, editor, filmmaker and researcher",
  places: "New Delhi  ·  Tonbridge, Kent",
  email: "zahan.n.sawhey@gmail.com",
  intro:
    "I am an Upper Sixth student at Tonbridge School in Kent, originally from New Delhi. I care about how economics and people shape one another, and I like to lead, write and argue my way into understanding them.",
  details: [
    ["Based in", "New Delhi, India and Kent, UK"],
    ["School", "Tonbridge School, Upper Sixth"],
    ["Studying", "Economics, Spanish and Mathematics (EPQ completed)"],
    ["Currently", "House Captain and Editor-in-Chief, The Bull & The Boar"],
  ],
  facts: ["House Captain", "Editor-in-Chief", "MUN Co-Founder", "President, South Asian Society"],
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
          "Within nine months of arriving at Tonbridge, I was appointed by my Housemaster as one of 12 House Captains, chosen from a cohort of around 160.",
        body: [
          "Being trusted with the house so early meant I had to learn its rhythms quickly: who the quiet talents were, which competitions mattered most to people, and how to bring a group of very different boys together behind one name.",
          "Today I look after a house of 65 students. I coordinate more than 20 inter-house competitions a year, forming every event team so that each one has the right people in it and nobody is left out. I also set up a cross-year peer mentorship scheme, so that younger boys always have someone older to turn to, and this year the house reached a record 95% engagement in house events.",
          "I am also responsible for recognising individual contributions and awarding house accolades. I take that part seriously, because I have learnt that people give their best when they know their effort is noticed.",
        ],
        highlights: [
          "1 of 12 House Captains, chosen from a cohort of around 160 within nine months",
          "Lead a house community of 65 students",
          "Coordinate 20+ inter-house competitions a year",
          "Set up cross-year peer mentorship",
          "Record 95% engagement in house events",
        ],
      },
      {
        id: "editor-in-chief",
        title: "Editor-in-Chief",
        org: "The Bull & The Boar, Tonbridge School",
        period: "2026 to Present",
        lead:
          "I am the first new boy at Tonbridge to be appointed Editor-in-Chief of The Bull & The Boar, the school's annual social sciences magazine. I was hand-picked by the Head of Social Sciences as the sole appointee from a field of fifty.",
        body: [
          "The magazine covers economics, politics and social affairs, the three subjects I keep coming back to in everything I read and write. Leading it lets me turn that curiosity into something other students can pick up and argue with.",
          "As editor I set the editorial direction and content strategy, oversee the design and editing of the issue, and see it through to publication. I also commissioned school-wide polls so that our 1,500-word essays are grounded in real data, not just opinion. It has taught me how to shape a clear voice out of many writers, and how to hold a high standard while keeping people excited to contribute.",
        ],
        highlights: [
          "First new boy at Tonbridge to hold the position",
          "Sole appointee from a field of fifty, chosen by the Head of Social Sciences",
          "I own editorial direction, design and editing",
          "Commissioned school-wide polls to ground essays in data",
          "I oversee publication from commissioning to print",
          "Coverage spans economics, politics and social affairs",
        ],
      },
      {
        id: "model-un",
        title: "Co-Founder, Deputy Secretary-General & Deputy President",
        org: "Model United Nations, Tonbridge School",
        nav: "Model United Nations",
        navMeta: "Co-Founder, Deputy Secretary-General & Deputy President",
        period: "2025 to Present",
        lead:
          "I co-founded Tonbridge School's Model United Nations society, served as Deputy Secretary-General of TOMUN, the school's first-ever inter-school MUN conference, and am now Deputy President of the society.",
        body: [
          "MUN has been part of my life since Grade 6 at Step-by-Step School in Noida, where I first learnt to research a country's position, defend it under pressure and find common ground with people who disagreed with me. When I arrived at Tonbridge, I wanted to build that same space for others.",
          "Our inaugural conference brought together more than 110 delegates from over 10 schools. We set four committees on Iran, Arctic militarisation and AI weapons, and I wrote the crisis briefs. I chaired both the Disarmament Committee and the General Assembly. Chairing taught me a different kind of discipline from debating: keeping the room fair, keeping it moving and making sure every delegate had a real chance to be heard.",
          "As Deputy President, I am responsible for training every new member of the society, usually around 30 a year. As one of the most experienced delegates in the society, I try to give them the same grounding in research and debate that I was lucky enough to get.",
        ],
        highlights: [
          "Co-founded Tonbridge School's first MUN society",
          "Deputy Secretary-General of TOMUN: 110+ delegates from 10+ schools",
          "Chaired the Disarmament Committee and the General Assembly",
          "Set committees on Iran, Arctic militarisation and AI weapons, and wrote the crisis briefs",
          "Deputy President: I train around 30 new members each year",
          "Active MUN debater and delegate since Grade 6",
        ],
      },
      {
        id: "house-drama",
        title: "Head of House Drama",
        org: "Tonbridge School",
        period: "2025 to Present",
        lead:
          "I led my house to its first inter-house drama award in years, with an original script that won Most Creative Script out of 12 houses.",
        body: [
          "Directing meant juggling everything at once. I managed the rehearsal schedule, refined the script and shaped the performances, often all in the same evening.",
          "What I am proudest of is the confidence it built in the cast. Helping other students grow comfortable on stage taught me as much about leadership as any title has, and I learnt how to coordinate a collaborative creative project under real pressure.",
        ],
        highlights: [
          "First inter-house drama award for my house in years",
          "Most Creative Script, 1 of 12 entries from 12 houses",
          "Won House Colours for the annual drama",
          "Managed scheduling, script writing and performance direction",
          "Built stage confidence in first-time performers",
        ],
      },
      {
        id: "south-asian-society",
        title: "President, South Asian Society",
        org: "Tonbridge School",
        nav: "South Asian Society",
        navMeta: "President",
        period: "2026 to Present",
        lead:
          "I lead Tonbridge's South Asian Society, a community of around 50 students.",
        body: [
          "Coming to Tonbridge from New Delhi, the South Asian Society was one of the first places that felt like home. Now I run it, and I want it to do the same for everyone who walks in.",
          "I manage all of the society's events, from cultural visits to food and culture evenings, and I try to make sure they are open to anyone curious about South Asia, not only students from the region.",
        ],
        highlights: [
          "President of a society of around 50 students",
          "Manage all society events, including cultural visits",
          "Organise food and culture programming open to the whole school",
        ],
      },
      {
        id: "fencing-captain",
        title: "Captain of Sabre, Tonbridge Fencing",
        org: "Tonbridge School",
        nav: "Captain of Sabre",
        navMeta: "Tonbridge Fencing",
        period: "2026 to Present",
        lead:
          "I am one of three fencing captains at Tonbridge, leading the sabre squad and representing the school in every fixture.",
        body: [
          "Fencing is a fast, tactical sport, and captaining it means thinking about the team as much as my own bouts. I select the teams, manage our fixtures and referee matches when needed.",
          "I also teach the sabre to the lower years, usually around 20 students. Seeing a beginner land their first clean hit is one of the most satisfying parts of the role. This season we have won all three of our fixtures.",
        ],
        highlights: [
          "1 of 3 fencing captains at Tonbridge",
          "Represent the school in all fixtures",
          "Select teams, manage fixtures and referee",
          "Train around 20 lower-year students in sabre",
          "Won 3 out of 3 fixtures this season",
        ],
      },
    ],
  },

  research: {
    label: "Research",
    kicker: "Research & Independent Projects",
    items: [
      {
        id: "parsi-philanthropy",
        title: "“Thy Name is Charity”",
        org: "Nation building via Parsi philanthropy",
        nav: "Research Paper",
        navMeta: "Thy Name is Charity",
        period: "2026",
        badge: "Submitted to The Concord Review",
        lead:
          "I wrote a 5,000-word research paper on the historical sociology of Parsi philanthropy, and how it helped build a community and a nation. I am its sole author, and it has been submitted to The Concord Review.",
        body: [
          "My mother's family is Parsi, so this question is personal. The Parsis have always been a tiny minority in India, and yet their philanthropy shaped institutions far beyond their numbers. I wanted to understand why they gave in the way they did, and what that giving does to the community today.",
          "I conducted nine interviews, including one with Dr Pheroza Godrej. What I found surprised me: the trusts that hold around 4,000 flats now effectively define who counts as Parsi, and that pool is shrinking faster than the 57,264 Parsis left in India. Charity that once built a community now helps decide its edges.",
          "My work has been quoted at the World Zoroastrian Congress.",
        ],
        highlights: [
          "Sole author of a 5,000-word paper",
          "Submitted to The Concord Review",
          "9 interviews, including Dr Pheroza Godrej",
          "Quoted at the World Zoroastrian Congress",
        ],
      },
      {
        id: "bombay-samachar",
        title: "The Bombay Samachar",
        org: "Documentary film",
        nav: "The Bombay Samachar",
        navMeta: "Documentary, Director",
        period: "2026",
        badge: "Best Documentary Short · 3x Category Winner",
        lead:
          "I directed a multi-award-winning documentary that goes inside the Bombay Samachar, Asia's oldest newspaper, Parsi-run and printing since 1822.",
        body: [
          "The film is an oral-history record of Asia's oldest newsroom. It tells the story of how a refugee faith survived in India by translating itself into Gujarati, and asks what that survival now costs a community that is slowly disappearing.",
          "So far the film has won in three categories and received one honourable mention. It won Best Documentary Short at the Kodaikanal International Film Festival and Best Documentary at the Makizhmithran Festival, and was honoured at the Caravan and Global India International Film Festivals.",
          "In March 2027 I have been invited to speak about the documentary in Cambridge by Professor Almut Hintz, President of the Ancient India and Iran Trust, which works with Cambridge academics and other experts on the region's history.",
        ],
        highlights: [
          "Director of the film",
          "Best Documentary Short, Kodaikanal International Film Festival",
          "Best Documentary, Makizhmithran Festival",
          "Honoured at the Caravan and Global India International Film Festivals",
          "3x category winner and 1 honourable mention so far",
          "Invited to speak at the Ancient India and Iran Trust, Cambridge, March 2027",
        ],
      },
      {
        id: "sachin-pilot-internship",
        title: "Field Researcher & Constituent Liaison",
        org: "Constituency office of Sachin Pilot, MLA for Tonk",
        nav: "Constituency Internship",
        navMeta: "Office of Sachin Pilot, MLA",
        period: "Internship",
        lead:
          "I interned at the constituency office of Sachin Pilot, MLA for Tonk and General Secretary of the Indian National Congress, as a field researcher and constituent liaison.",
        body: [
          "I wanted to see how welfare actually reaches people, not just how it looks on paper. So I went to the villages and asked.",
          "I conducted more than 80 field interviews across 12 villages in Tonk. In 60% of the welfare cases I looked at, middlemen were exploiting the people the schemes were meant to help. I wrote a policy brief proposing direct outreach, so that support could reach families without passing through those hands.",
        ],
        highlights: [
          "80+ field interviews across 12 villages in Tonk",
          "Found middleman exploitation in 60% of welfare cases",
          "Authored a policy brief proposing direct outreach",
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
        title: "Co-Founder, Oriental Cup",
        org: "Inter-school football league, Delhi",
        nav: "Oriental Cup",
        navMeta: "Co-Founder",
        period: "2022 to 2024",
        lead:
          "I co-founded and directed the Oriental Cup (first called the Triental Cup), Delhi's first student-run inter-school football league, built to bridge the sports gap between public and private schools.",
        body: [
          "I noticed that students from public and private schools rarely got to play on the same pitch, even though they loved the same game. The Oriental Cup was our answer: a league where those lines did not matter, and where every capable player got to compete in a semi-professional environment.",
          "To make it happen, I pitched the value of the league directly to school principals and convinced them to give students time off from class. I managed operations, logistics, finance and publicity. The league grew to 39 teams, we turned it into an annual multi-tier league, and three of our players were scouted for state teams. Our work was covered by ten national outlets, including The Tribune India.",
        ],
        highlights: [
          "Delhi's first student-run inter-school football league",
          "39 teams in an annual multi-tier league",
          "3 players scouted for state teams",
          "Pitched to principals to secure time off from class",
          "Ran operations, logistics, finance and publicity",
          "Covered by 10 national outlets, including The Tribune India",
        ],
      },
      {
        id: "community-council",
        title: "Tonbridge Community Council",
        org: "Tonbridge School",
        nav: "Tonbridge Community Council",
        navMeta: "Member & Initiative Leader",
        period: "2025 to Present",
        lead:
          "I was one of 3 students admitted from 60 applicants to the Community Council's outreach programme, which works to make sure Tonbridge gives back to the town around it.",
        body: [
          "For two years I have helped run the annual Tonbridge School Community Concert for residents of three elder care homes in Tonbridge. More than 100 people attend, and around 40 residents join us from the care homes. I was selected as a host, which means looking after our elderly guests from the moment they arrive, and I coordinate donors, volunteers and logistics across eight events.",
          "Spending time with the residents has been one of the most rewarding parts of my time at Tonbridge. Many of them have lived in the town all their lives, and listening to their stories reminds me that community is built one conversation at a time.",
          "I also lead the school's community fundraising drive, the doughnut drive for cancer research, which has raised £10,000. It is a simple idea, but it shows how readily a community will show up for a good cause when someone takes the first step.",
        ],
        highlights: [
          "1 of 3 admitted from 60 applicants",
          "Co-run the annual concert for 3 elder care homes, supporting around 40 residents",
          "100+ attendees; coordinated donors, volunteers and logistics for 8 events",
          "Selected as host, caring for elderly guests from the care homes",
          "Lead the community fundraising drive, which has raised £10,000",
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
          "For four years I was part of the core team at One Step Greener, a Delhi waste NGO founded by winners of the International Children's Peace Prize.",
        body: [
          "I was a key fundraiser and social advocate for the organisation. Together we made Sundar Nagar colony 90% waste-free over four years, and the work won the ITC Wellbeing Out of Waste Green Award under the Swachh Bharat Mission. I also contributed to a fundraising drive for tree plantation, and my work was featured on the organisation's social media.",
          "I took part in Mission RBG at ITC WOW, a waste management initiative, and helped run door-to-door waste segregation drives that reached more than 100 households. I taught residents how to identify e-waste, and I also wrote and published an article on e-waste in Enviro-Annotations, which was my first time writing for a public audience about an issue I cared about.",
        ],
        highlights: [
          "Made Sundar Nagar colony 90% waste-free in 4 years",
          "ITC Wellbeing Out of Waste Green Award (Swachh Bharat Mission)",
          "NGO founded by International Children's Peace Prize winners",
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
          "I was selected as a finalist from around 1,000 participants in a five-day challenge to solve real business problems using AI, and was awarded a £1,000 scholarship.",
        body: [
          "The challenge put me in front of real business problems and asked how AI could solve them. It was a very different kind of thinking from the classroom: practical, fast and grounded in what companies actually need.",
          "Over the five days I learnt how AI is deployed across established companies and startups, and how to turn a technical idea into a case that a business would back.",
        ],
        highlights: [
          "Finalist from around 1,000 participants",
          "Awarded a £1,000 scholarship",
          "Learnt how AI is deployed across companies and startups",
        ],
      },
      {
        id: "world-economics-cup",
        title: "World Economics Cup",
        org: "Regional Qualifiers, UK",
        period: "2026",
        badge: "Team Gold · Highest Distinction · Continental Round",
        lead:
          "I was part of a six-person team that won gold at the UK regional qualifiers, and I was individually awarded the Highest Distinction with a score of 93 out of 100.",
        body: [
          "Economics is the subject I enjoy most, and the World Economics Cup was a chance to test it against some of the strongest students in the country.",
          "The competition focuses on applying economic theory to real-world problems. Winning gold as a team was special, but scoring 93 out of 100 on my own paper gave me real confidence that I can hold my own at this level. Our team has now qualified for the Continental Round.",
        ],
        highlights: [
          "Gold medal, team of six",
          "Individual score of 93/100",
          "Individually awarded the Highest Distinction",
          "Team qualified for the Continental Round",
        ],
      },
      {
        id: "ieo",
        title: "International Economics Olympiad",
        org: "Business WinterChallenge",
        period: "2025 to 2026",
        badge: "Honourable Mention · Global Top 10",
        lead:
          "I achieved an Honourable Mention and a global Top 10 finish out of 2,157 entrants (top 0.4%) in the IEOx Business WinterChallenge, and qualified for the second stage.",
        body: [
          "Over two weeks, my team built a business case and product to tackle a practical, real-world problem. The WinterChallenge asks you to think like a business strategist under time pressure, and I loved the mix of analysis and judgement it demanded.",
          "I have qualified for the second stage of the IEO and the competition is still ongoing.",
        ],
        highlights: [
          "Honourable Mention",
          "Global Top 10 out of 2,157 (top 0.4%)",
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
      {
        id: "film-society-tie",
        title: "Tonbridge Film Society Tie",
        org: "Ad campaign with Oscar winner Vikram Jayanti",
        period: "2026",
        badge: "School Honour",
        lead:
          "I was awarded the Tonbridge Film Society Tie, a school honour, for an advertising campaign I produced with Oscar-winning filmmaker Vikram Jayanti.",
        body: [
          "The campaign was made for American Holidays, a travel marketing company, and is set to run on the London Underground and on buses over a year-long engagement.",
          "Working alongside an Oscar winner taught me how much care goes into every frame of a short piece of film. At the end of the project I presented the campaign to the CEO of AmericanHolidays.com.",
        ],
        highlights: [
          "Awarded the Tonbridge Film Society Tie (school honour)",
          "Produced with Oscar winner Vikram Jayanti",
          "Year-long campaign for the Tube and London buses",
          "Presented the campaign to the CEO of AmericanHolidays.com",
        ],
      },
      {
        id: "john-locke",
        title: "John Locke Essay Competition",
        org: "John Locke Institute",
        period: "2026",
        badge: "Shortlisted",
        lead:
          "My essay on democracy in crisis was shortlisted in the John Locke Essay Competition.",
        body: [
          "I wanted to write about why democracies that look stable can weaken from within, and what keeps them alive.",
          "Being shortlisted gave me confidence that my writing can stand up alongside some of the strongest young essayists in the world. Final results are still to be announced.",
        ],
        highlights: [
          "Essay on democracy in crisis",
          "Shortlisted for awards, final results to come",
        ],
      },
      {
        id: "aspen-fellow",
        title: "Junior Fellow, Ananta Aspen Institute",
        org: "TSAALS Socratic Leadership Programme",
        nav: "Ananta Aspen Institute",
        navMeta: "Junior Fellow",
        period: "Grade 10",
        badge: "Junior Fellow",
        lead:
          "I was chosen for a two-week residential leadership programme run by the Ananta Aspen Institute, the Indian wing of the Aspen Institute.",
        body: [
          "The Ananta Aspen Institute is a Track II diplomacy nonprofit that works in partnership with India's Ministry of External Affairs to foster dialogue and global collaboration.",
          "The TSAALS programme is built around Socratic dialogue. I led and joined peer discussions on the ethics and purpose of leadership, and my reflections from those two weeks later shaped how I approached my documentary.",
        ],
        highlights: [
          "Selected for a 2-week residential programme",
          "Led and joined Socratic dialogues on the ethics of leadership",
          "Reflections shaped the positioning of my documentary",
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
    stage: "Upper Sixth Form (A Levels)",
    text:
      "I moved from New Delhi to Tonbridge for my A Levels. I am studying Economics, Spanish and Mathematics, and I have completed an Extended Project Qualification.",
    subjects: ["Economics", "Spanish", "Mathematics", "Extended Project Qualification (completed)"],
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
  ["World Economics Cup", "Individual Highest Distinction (93/100) and team Gold Medal, UK Regional Qualifiers; Continental Round qualifier"],
  ["International Economics Olympiad", "Honourable Mention and Global Top 10 of 2,157 (top 0.4%), IEOx WinterChallenge; Second Stage qualifier"],
  ["Best Documentary Short", "Kodaikanal International Film Festival, for The Bombay Samachar"],
  ["Best Documentary", "Makizhmithran Festival; also honoured at the Caravan and Global India International Film Festivals"],
  ["AI Futures Challenge", "Finalist from around 1,000 participants and £1,000 Scholarship, Northeastern University London"],
  ["John Locke Essay Competition", "Shortlisted, essay on democracy in crisis"],
  ["Tonbridge Film Society Tie", "School honour for an ad campaign produced with Oscar winner Vikram Jayanti"],
  ["House Colours", "Most Creative Script (1 of 12 houses), annual inter-house drama, Tonbridge School"],
  ["Certificate of Recognition", "Blue Ocean Strategy Challenge"],
];

const BEYOND = [
  {
    title: "Fencing",
    period: "2025 to Present",
    text:
      "I fence sabre for Tonbridge and am one of the school's three fencing captains. This season we have won all three of our fixtures.",
  },
  {
    title: "Karate",
    period: "2017 to Present",
    text:
      "I hold a 2nd Degree (Nidan) Black Belt in Shotokan Karate, awarded by the international SSKI organisation. Years of training have given me patience, confidence and a lot of respect for slow, steady progress.",
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
];

const ABOUT = {
  lead:
    "I am Zahan Nikhil Sawhney, an Upper Sixth student at Tonbridge School in Kent. I grew up in New Delhi, and I am curious about how economics and people shape one another.",
  body: [
    "I spent twelve years at Step-by-Step School in Noida before moving to the UK for my A Levels. Today I study Economics, Spanish and Mathematics, and I have completed an Extended Project Qualification alongside them.",
    "Much of what I do comes back to one question: how do people and communities gain a voice? It is why I co-founded a football club that brought public and private school students onto the same pitch, why I helped start Model United Nations at Tonbridge, and why my research and my documentary on the Bombay Samachar look at how the Parsi community, my mother's community, has shaped and sustained itself in India.",
    "I like to lead from the inside. Within my first year at Tonbridge I became House Captain and the first new boy to be named Editor-in-Chief of The Bull & The Boar, our social science magazine. I have learnt that the best leaders make other people feel seen, and that is what I try to do.",
    "Away from my desk you will find me fencing, practising karate (I hold a second-degree black belt), playing tabla or, when I get the chance, scuba diving.",
  ],
  interests: ["Economics", "Urban history", "Debate & MUN", "Writing & editing", "Community building"],
};
