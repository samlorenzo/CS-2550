const data = [
  {
    question: 'The Birth of The Harley V-Twin Engine',
    answer:
      'Harleys V-twin engine was born in 1909! They were not the ones who invented the V-twin, A company named Indian Motorcycles introduced the invention in 1904.',
  },
  {
    question: 'The amount of factories Harley Davidson have',
    answer:
      'They have factories all over the globe! They four locations in the USA and various factories in other places, however their manufacutring plants are set up in Brazil, Thailand, and India',
  },
  {
    question: 'What makes Harley Davidson so American ',
    answer:
      'When America joined World War 1 in 1917, the government bought one-third of Harley Davidson bikes, assisting transportation for soldiers. Now thats AMERICAN!!!',
  },
  {
    question: 'The amount of models Harley Davidson has',
    answer:
      'Harley Davidson has been coming in 90 models in eight different categories! Thats a lot of bikes!',
  },
  {
    question: 'Harley Davidsons contribution for Americans',
    answer:
      'Harley Davidson has several university for Americans who want to get their certifications to manufacture Harley Davidson Bikes! ',
  },
  {
    question: 'The first ever Harley-Davidson Motorcycle Club',
    answer:
      'The first ever club was formed in Prague, Czech Republic in 1928. This very club is still going strong today - in 7 years it will celebrate its centurial anniversary.',
  },
];

data.forEach(trivia => {
  const article = document.createElement('article');
  const label = document.createElement('label');
  const button = document.createElement('button');
  const paragraph = document.createElement('p');

  label.textContent = trivia.question;

  button.textContent = '+';
  button.addEventListener('click', event => {
    const btn = event.target;
    const p = btn.nextElementSibling;

    switch (p.style.display) {
      case 'block':
        btn.textContent = '+';
        p.style.display = 'none';
        break;
      case 'none':
        btn.textContent = '-';
        p.style.display = 'block';
        break;
    }

    const timer = setTimeout(() => {
      btn.textContent = '+';
      p.style.display = 'none';
      clearTimeout(timer);
    }, 5000);

    if (p.style.display === 'none') {
      clearTimeout(timer);
    }
  });
  paragraph.style.display = 'none';
  paragraph.textContent = trivia.answer;

  article.append(label);
  article.append(button);
  article.append(paragraph);
  document.body.append(article);
});
