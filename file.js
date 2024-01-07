const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.classList.add('paragraph');
paragraph.textContent = "Hey, I'm red!";
paragraph.style.color = 'red';

container.appendChild(paragraph);

const headingThree = document.createElement('h3');
headingThree.classList.add('headingThree');
headingThree.textContent = "I'm a blue h3!";
headingThree.style.color = 'blue';

container.appendChild(headingThree);

const anotherContainer = document.createElement('div');
anotherContainer.classList.add('anotherContainer');
anotherContainer.setAttribute('style', 'background: pink; border: black;');
    const headingOne = document.createElement('h1');
    headingOne.classList.add('headingOne');
    headingOne.textContent = "I'm in a div";

    const anotherParagraph = document.createElement('p');
    anotherParagraph.classList.add('anotherParagraph');
    anotherParagraph.textContent = 'ME TOO!';

    anotherContainer.appendChild(headingOne);
    anotherContainer.appendChild(anotherParagraph);

container.appendChild(anotherContainer);