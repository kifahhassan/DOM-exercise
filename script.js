const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.classList.add('para');
para.textContent = 'Hey, I\'m red!';

container.appendChild(para);

para.style.color = 'red';

const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.textContent = 'I\'m a blue text';

container.appendChild(h3);

h3.style.color = 'blue';


